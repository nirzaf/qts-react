import { renderToString } from 'react-dom/server';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import App from './App';

// Temporary workaround for StaticRouter
// @ts-ignore
const StaticRouter = ({ location, children }) => {
  return <>{children}</>;
};

export function render(url: string, context: any = {}) {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
        <Analytics />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return {
    html,
    helmet: helmet || {
      title: { toString: () => '' },
      meta: { toString: () => '' },
      link: { toString: () => '' },
      script: { toString: () => '' },
      style: { toString: () => '' },
      base: { toString: () => '' },
      noscript: { toString: () => '' },
      htmlAttributes: { toString: () => '' },
      bodyAttributes: { toString: () => '' },
    },
    context
  };
}
