import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

const prepare = async () => {
  if (import.meta.env.DEV) {
    const { default: worker } = await import("./mocks/browser");
    return worker.start();
  }
};

prepare().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
