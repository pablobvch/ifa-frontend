// @flow

import React from "react";
import styled from "styled-components";

import type {Node} from "react";

type Props = {|
  children: Node,
  className?: string
|};

const StyledTd = styled.td`
  border: 1px solid #dee2e6 !important;
`;

const Td = ({children}: Props) => <StyledTd>{children}</StyledTd>;

export default Td;
