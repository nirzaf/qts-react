import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import compression from 'compression';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

async function createServer() {
  const app = express();
  app.use(compression());

  let vite;
  if (!isProduction) {
    // Development mode with Vite's dev server
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    // Production mode - serve static assets
    app.use(express.static(path.resolve(__dirname, 'dist/client'), {
      maxAge: '1y',
      immutable: true
    }));
  }

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    try {
      let template, render;

      if (!isProduction) {
        // In development: get fresh template and server entry
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        // In production: use built files
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        render = (await import('./dist/server/entry-server.js')).render;
      }

      const { html: appHtml, helmet } = render(url);

      // Inject meta tags from helmet
      const helmetHtml = `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
      `;

      // Replace placeholders with content
      const finalHtml = template
        .replace('<!--app-head-->', helmetHtml)
        .replace('<!--app-html-->', appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
    } catch (e) {
      if (!isProduction) {
        vite.ssrFixStacktrace(e);
      }
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
  });
}

createServer();
