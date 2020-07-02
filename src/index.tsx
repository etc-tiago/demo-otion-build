import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { setup } from "otion";
// import { getStyleElement, VirtualInjector } from "react-otion/server";

// const injector = VirtualInjector();
// setup({ injector });
// const styleElement = getStyleElement(injector);

// console.log({ styleElement });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
