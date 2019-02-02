// @flow

import React from "react";

import Navbar from "../../components/navbar";

const renderContent = () => <h1>Billing Page!</h1>;

const renderNavbar = () => <Navbar />;

const Billing = () => (
  <React.Fragment>
    {renderNavbar()}
    {renderContent()}
  </React.Fragment>
);

export default Billing;
