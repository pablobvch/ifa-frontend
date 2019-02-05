// @flow

import React from "react";
import styled from "styled-components";

import Navbar from "../../components/navbar";

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const renderContent = () => <StyledImg src={require("./utils/mapView.png")} />;

const renderNavbar = () => <Navbar />;

const Map = () => (
  <React.Fragment>
    {renderNavbar()}
    {renderContent()}
  </React.Fragment>
);

export default Map;
