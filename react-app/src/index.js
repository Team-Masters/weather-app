import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./utilities/AuthProvider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
global.ASYNC_VALIDATOR_NO_WARNING = 1;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>
);
