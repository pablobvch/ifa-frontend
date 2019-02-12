//@flow

import React, {Fragment} from "react";
import styled from "styled-components";

type Value = {|
  id: string,
  number: string,
  date: string,
  dueDate: string,
  terms: string,
  balance: string
|};

type Props = {|
  values: Value
|};

const StyledP = styled.p`
  clear: both;
`;

const StyledTd = styled.td`
  border: 1px solid #dee2e6 !important;
`;

const StyledTh = styled.td`
  border: 1px solid #dee2e6 !important;
`;

const renderTable = ({number, date, dueDate, terms, balance}) => (
  <table className="table bg-white">
    <thead>
      <tr>
        <StyledTh colSpan="3">INVOICE - REVISION</StyledTh>
      </tr>
    </thead>
    <tbody>
      <tr>
        <StyledTd>
          <StyledP>
            <span className="float-left">Invoice #</span>
            <span className="float-right font-weight-bold">{number}</span>
          </StyledP>
          <StyledP>
            <span className="float-left">Date</span>
            <span className="float-right font-weight-bold">{date}</span>
          </StyledP>
          <StyledP>
            <span className="float-left">Due Date</span>
            <span className="float-right font-weight-bold">{dueDate}</span>
          </StyledP>
          <StyledP>
            <span className="float-left">Terms</span>
            <span className="float-right font-weight-bold">{terms}</span>
          </StyledP>
        </StyledTd>
        <StyledTd>
          <span className="font-weight-bold">Bill to</span>
        </StyledTd>
        <StyledTd className="font-weight-bold">
          <p>New Balance upon Re-booking</p>
          <p className="text-warning">{balance}</p>
        </StyledTd>
      </tr>
    </tbody>
  </table>
);

{
  /*  */
}

const renderTitle = ({id}) => (
  <h2>
    Invoice&nbsp;
    <small>{id}</small>
  </h2>
);

const Header = ({values}: Props) => (
  <div className="container">
    {renderTitle(values)}
    {renderTable(values)}
  </div>
);

export default Header;
