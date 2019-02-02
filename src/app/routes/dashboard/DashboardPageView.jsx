// @flow

import React from "react";

import Navbar from "../../components/navbar";

const renderContent = () => <h1>Dashboard</h1>;

const renderNavbar = () => <Navbar />;

const Dashboard = () => (
  <React.Fragment>
    {renderNavbar()}
    {renderContent()}
  </React.Fragment>
);

export default Dashboard;
