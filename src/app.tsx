import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { queryClient } from "./client";
import useRouter from "./hooks/use-router";
import { AuthProvider } from "./hooks/use-auth";

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes />
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  );
}

function Routes() {
  const { routes } = useRouter();
  return routes;
}

export default App;
