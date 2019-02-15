//@ Flow

import React from "react";
import styled from "styled-components";

const RightSide = styled.div`
  float: left;
  border-left: 15px solid #0000ff;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
`;

const MiddleSide = styled.div`
  float: left;
  width: 30px;
  height: 50px;
  background-color: #0000ff;
`;

const LeftSide = styled.div`
  float: left;
  border-right: 15px solid #0000ff;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
`;

const Container = styled.div`
  display: block;
`;

const Hexagon = () => (
  <Container>
    <LeftSide />
    <MiddleSide />
    <RightSide />
  </Container>
);

export default Hexagon;
