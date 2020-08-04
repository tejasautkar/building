import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import "./Style/main.scss";
import App from "./App";

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById("root")
);
