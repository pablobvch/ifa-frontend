// @flow

import React, {Fragment} from "react";

import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "../../components/navbar";
import {data} from "./utils/invoice";

const renderContent = () => (
  <div className="bg-light">
    <Header
      values={{
        id: data.id,
        number: data.number,
        date: data.date,
        dueDate: data.dueDate,
        terms: data.terms
      }}
    />
    <Body />
    <Footer />
  </div>
);

const renderNavbar = () => <Navbar />;

const Dashboard = () => (
  <div className="container">
    {renderNavbar()}
    {renderContent()}
  </div>
);

export default Dashboard;
