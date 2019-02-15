// @flow

import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const Map = () => <StyledImg src={require("./map.png")} />;

export default Map;
