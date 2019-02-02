// @flow

import React from "react";

import Navbar from "../../components/navbar";

const renderContent = () => <img src={require("./utils/mapView.png")} />;

const renderNavbar = () => <Navbar />;

const Map = () => (
  <React.Fragment>
    {renderNavbar()}
    {renderContent()}
  </React.Fragment>
);

export default Map;
