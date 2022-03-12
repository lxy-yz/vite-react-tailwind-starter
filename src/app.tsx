import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { queryClient } from "./client";
import useRouter from "./hooks/use-router";

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

function Routes() {
  const { routes } = useRouter();
  return routes;
}

export default App;
