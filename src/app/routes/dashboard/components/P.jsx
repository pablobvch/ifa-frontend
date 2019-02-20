// @flow

import React from "react";
import styled from "styled-components";

import type {Node} from "react";

type Props = {|
  children: Node,
  className?: string
|};

const StyledP = styled.p`
  clear: both;
`;

const P = ({children}: Props) => <StyledP>{children}</StyledP>;

export default P;
