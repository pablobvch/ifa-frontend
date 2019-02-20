// @flow

import React, {Fragment} from "react";

import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "../../components/navbar";

import {data} from "./utils/invoice";

import type ElementConfig from "react";

const renderContent = () => (
  <div className="bg-light">
    <Header
      values={{
        balance: data.balance,
        date: data.date,
        dueDate: data.dueDate,
        id: data.id,
        number: data.number,
        terms: data.terms
      }}
    />
    <Body />
    <Footer
      values={{
        capacity: data.capacity,
        commodities: data.commodities,
        drayage: data.drayage,
        incoterms: data.incoterms,
        method: data.method,
        serviceOptions: data.serviceOptions,
        status: data.status
      }}
    />
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
