# Quadrate Tech Solutions - Development Guidelines

## Core Values

- 🚀 Innovation and excellence in every solution
- 👥 User-centric design approach
- 🔒 Performance and security as priorities
- 💻 Clean, maintainable code
- 📱 Responsive and accessible interfaces

## Design Principles

- 🎨 Follow minimalist design aesthetics
- 🎯 Maintain consistent branding
- ✨ Use smooth, purposeful animations
- 📐 Ensure responsive behavior
- 🧭 Implement intuitive navigation
- ♿ Focus on accessibility

## Performance Guidelines

- 🖼️ Optimize image assets
- 🔄 Implement lazy loading
- 📦 Minimize bundle size
- 🎬 Use efficient animations
- 💾 Cache appropriately

## Security Practices

- 🔒 Follow security best practices
- 🔑 Implement proper authentication
- 🛡️ Validate all user inputs
- 🔐 Use secure API endpoints
- 📝 Keep dependencies updated

### Always follow these rules

- Always build the project after completing any task.
- Use the command: npm run build.
- Iterate until the build is successful.
- Push changes using git push if the build is successful.

> **Note:** Never commit code that doesn't build successfully.

---

## Sentry Instrumentation Rules

These examples should be used as guidance when configuring Sentry functionality within a project.

### Exception Catching

- Use `Sentry.captureException(error)` to capture an exception and log the error in Sentry.
- Use this in try/catch blocks or areas where exceptions are expected.

### Tracing Examples

- Spans should be created for meaningful actions within an application like button clicks, API calls, and function calls.
- Use the `Sentry.startSpan` function to create a span.
- Child spans can exist within a parent span.

#### Custom span instrumentation in component actions

- The `name` and `op` properties should be meaningful for the activities in the call.
- Attach attributes based on relevant information and metrics from the request.

```javascript
function TestComponent() {
  const handleTestButtonClick = () => {
    // Create a transaction/span to measure performance
    Sentry.startSpan(
      {
        op: "ui.click",
        name: "Test Button Click",
      },
      (span) => {
        const value = "some config";
        const metric = "some metric";

        // Metrics can be added to the span
        span.setAttribute("config", value);
        span.setAttribute("metric", metric);

        doSomething();
      },
    );
  };

  return (
    <button type="button" onClick={handleTestButtonClick}>
      Test Sentry
    </button>
  );
}
```

#### Custom span instrumentation in API calls

- The `name` and `op` properties should be meaningful for the activities in the call.
- Attach attributes based on relevant information and metrics from the request.

```javascript
async function fetchUserData(userId) {
  return Sentry.startSpan(
    {
      op: "http.client",
      name: `GET /api/users/${userId}`,
    },
    async () => {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      return data;
    },
  );
}
```

### Logs

- Where logs are used, ensure Sentry is imported using `import * as Sentry from "@sentry/nextjs"`.
- Enable logging in Sentry using `Sentry.init({ _experiments: { enableLogs: true } })`.
- Reference the logger using `const { logger } = Sentry`.
- Sentry offers a `consoleLoggingIntegration` that can be used to log specific console error types automatically without instrumenting the individual logger calls.

### Configuration

- In Next.js the client side Sentry initialization is in `instrumentation-client.ts`, the server initialization is in `sentry.edge.config.ts` and the edge initialization is in `sentry.server.config.ts`.
- Initialization does not need to be repeated in other files, it only needs to happen in the files mentioned above. You should use `import * as Sentry from "@sentry/nextjs"` to reference Sentry functionality.

#### Baseline

```javascript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://d167efd1bb620d154aa0d6d0add233ef@o4509821301161984.ingest.de.sentry.io/4509821330522192",

  _experiments: {
    enableLogs: true,
  },
});
```

#### Logger Integration

```javascript
Sentry.init({
  dsn: "https://d167efd1bb620d154aa0d6d0add233ef@o4509821301161984.ingest.de.sentry.io/4509821330522192",
  integrations: [
    // send console.log, console.error, and console.warn calls as logs to Sentry
    Sentry.consoleLoggingIntegration({ levels: ["log", "error", "warn"] }),
  ],
});
```

### Logger Examples

`logger.fmt` is a template literal function that should be used to bring variables into the structured logs.

```javascript
logger.trace("Starting database connection", { database: "users" });
logger.debug(logger.fmt`Cache miss for user: ${userId}`);
logger.info("Updated profile", { profileId: 345 });
logger.warn("Rate limit reached for endpoint", {
  endpoint: "/api/results/",
  isEnterprise: false,
});
logger.error("Failed to process payment", {
  orderId: "order_123",
  amount: 99.99,
});
logger.fatal("Database connection pool exhausted", {
  database: "users",
  activeConnections: 100,
});
```