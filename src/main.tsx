import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

// install all modules under `modules/`
// https://vitejs.dev/guide/features.html#glob-import
Object.values(import.meta.globEager("./modules/*.ts")).forEach((i) =>
  i.install?.()
);

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
