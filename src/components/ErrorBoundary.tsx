'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);

    // If you have analytics set up, you can log the error there
    if (typeof window !== 'undefined' && window.gtag) {
      try {
        window.gtag('event', 'error', {
          event_category: 'Error Boundary',
          event_label: error.message,
          value: 1,
          non_interaction: true,
        });
      } catch (gtagError) {
        console.error('Error logging to gtag:', gtagError);
      }
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="error-boundary-fallback">
          <h2>Something went wrong.</h2>
          <details>
            <summary>Error details</summary>
            <p>{this.state.error?.toString()}</p>
          </details>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
