import { BrowserRouter as Router } from "react-router-dom";
import useRouter from "./hooks/useRouter";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

function Routes() {
  const { routes } = useRouter();
  return routes;
}

export default App;
