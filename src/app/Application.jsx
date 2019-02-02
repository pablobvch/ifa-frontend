//@flow

import React from "react";

import Router from "./components/router";

import routeDefinitions from "./routeDefinitions";

const Application = () => <Router {...{routeDefinitions}} />;

export default Application;
