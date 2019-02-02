// @flow

import React from "react";
import ReactDOM from "react-dom";

import Application from "./Application";

import "bootstrap/dist/css/bootstrap.min.css";

const root = document.getElementById("root");

if (root !== null) {
  ReactDOM.render(<Application />, root);
}
