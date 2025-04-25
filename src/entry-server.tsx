import { renderToString } from 'react-dom/server';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import App from './App';

// Temporary workaround for StaticRouter
// @ts-ignore
const StaticRouter = ({ location, children }) => {
  return <>{children}</>;
};

export function render(url: string, context: any = {}) {
  const helmetContext = {} as { helmet: HelmetServerState };

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return { html, helmet, context };
}
