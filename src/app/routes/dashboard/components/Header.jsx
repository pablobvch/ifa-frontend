//@flow

import React, {Fragment} from "react";

type Value = {|
  id: string,
  number: string,
  date: string,
  dueDate: string,
  terms: string
|};

type Props = {|
  values: Value
|};

const renderTable = ({number, date, dueDate, terms}) => (
  <table className="table">
    <thead>
      <tr>
        <th colSpan="3">INVOICE - REVISION</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <p>
            <span className="text-left">Invoice #</span>
            <span className="text-right">{number}</span>
          </p>
          <p>
            <span className="text-left">Date</span>
            <span className="text-right">{date}</span>
          </p>
          <p>
            <span className="text-left">Due Date</span>
            <span className="text-right">{dueDate}</span>
          </p>
          <p>
            <span className="text-left">Terms</span>
            <span className="text-right">{terms}</span>
          </p>
        </td>
        <td>Bill to</td>
        <td>New Balance upon Re-booking</td>
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

const Header = ({values}: Props) => (
  <Fragment>
    {renderTitle(values)}
    {renderTable(values)}
  </Fragment>
);

export default Header;
