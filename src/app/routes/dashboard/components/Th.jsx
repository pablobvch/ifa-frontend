// @flow

import React from "react";
import styled from "styled-components";

import type {Node} from "react";

type Props = {|
  children: Node,
  className?: string,
  colSpan: number
|};

const StyledTh = styled.th`
  border: 1px solid #dee2e6 !important;
`;

const Th = ({children, ...rest}: Props) => (
  <StyledTh {...rest}>{children}</StyledTh>
);

export default Th;
