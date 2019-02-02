// @flow

import React from "react";

import Navbar from "../../components/navbar";

const renderContent = () => <h1>Network Page!</h1>;

const renderNavbar = () => <Navbar />;

const Network = () => (
  <React.Fragment>
    {renderNavbar()}
    {renderContent()}
  </React.Fragment>
);

export default Network;
