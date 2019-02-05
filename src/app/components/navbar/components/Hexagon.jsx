//@ Flow

import React from "react";
import styled from "styled-components";

const RightHexagon = styled.div`
  float: left;
  border-left: 15px solid #0000ff;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
`;

const Square = styled.div`
  float: left;
  width: 30px;
  height: 50px;
  background-color: #0000ff;
`;

const LeftHexagon = styled.div`
  float: left;
  border-right: 15px solid #0000ff;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
`;

const HexagonContainer = styled.div`
  display: block;
`;

const Hexagon = () => (
  <HexagonContainer>
    <LeftHexagon />
    <Square />
    <RightHexagon />
  </HexagonContainer>
);

export default Hexagon;
