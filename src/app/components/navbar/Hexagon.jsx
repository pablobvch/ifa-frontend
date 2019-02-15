// @flow
import React from "react";
import styled from "styled-components";

type Props = {||};

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto;
  object-fit: contain;
`;

const Hexagon = (props: Props) => <StyledImg src={require("./Hexagon.png")} />;

export default Hexagon;
