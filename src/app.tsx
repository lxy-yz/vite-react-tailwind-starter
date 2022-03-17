import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ErrorBoundary } from "react-error-boundary";

import { queryClient } from "./client";
import useRouter from "./hooks/use-router";
import { AuthProvider } from "./hooks/use-auth";

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => {
        return (
          <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
          </div>
        );
      }}
    >
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes />
          </Router>
        </QueryClientProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

function Routes() {
  const { routes } = useRouter();
  return routes;
}

export default App;
