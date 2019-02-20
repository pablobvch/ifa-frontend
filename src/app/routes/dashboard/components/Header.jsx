//@flow

import React, {Fragment} from "react";
import styled from "styled-components";

import P from "./P";
import Td from "./Td";
import Th from "./Th";

type Value = {|
  balance: string,
  date: string,
  dueDate: string,
  id: string,
  number: string,
  terms: string
|};

type Props = {|
  values: Value
|};

const renderTable = ({number, date, dueDate, terms, balance}) => (
  <table className="table bg-white">
    <thead>
      <tr>
        <Th colSpan="3">INVOICE - REVISION</Th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <Td>
          <P>
            <span className="float-left">Invoice #</span>
            <span className="float-right font-weight-bold">{number}</span>
          </P>
          <P>
            <span className="float-left">Date</span>
            <span className="float-right font-weight-bold">{date}</span>
          </P>
          <P>
            <span className="float-left">Due Date</span>
            <span className="float-right font-weight-bold">{dueDate}</span>
          </P>
          <P>
            <span className="float-left">Terms</span>
            <span className="float-right font-weight-bold">{terms}</span>
          </P>
        </Td>
        <Td>
          <span className="font-weight-bold">Bill to</span>
        </Td>
        <Td className="font-weight-bold">
          <p>New Balance upon Re-booking</p>
          <p className="text-warning font-weight-bold">{balance}</p>
        </Td>
      </tr>
    </tbody>
  </table>
);

const renderTitle = ({id}) => (
  <h2>
    Invoice&nbsp;
    <small>{id}</small>
  </h2>
);

const Header = ({values}: Props) => {
  console.log(values);
  return (
    <div className="container">
      {renderTitle(values)}
      {renderTable(values)}
    </div>
  );
};

export default Header;
