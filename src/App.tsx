import { useRoutes, BrowserRouter as Router } from "react-router-dom";

import routes from "~react-pages";

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
  return useRoutes(routes);
}

export default App;
