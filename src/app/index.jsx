// @flow

import React from "react";
import ReactDOM from "react-dom";

import Application from "./Application";

const root = document.getElementById("root");

if (root !== null) {
  ReactDOM.render(<Application />, root);
}
