import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import Challenge from "./challenge";
// import Travel from "./Travel";
import "./index.css";

// const root = document.getElementById("root");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Challenge />
    {/* <Travel /> */}
  </React.StrictMode>
);
