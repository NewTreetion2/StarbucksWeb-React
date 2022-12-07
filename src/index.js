import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStyles from "css/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);

