//@flow

import React from "react";
import styled from "styled-components";

import P from "./P";
import Td from "./Td";
import Th from "./Th";

type Value = {|
  capacity: string,
  commodities: string,
  drayage: string,
  incoterms: string,
  method: string,
  serviceOptions: string,
  status: string
|};

type Props = {|
  values: Value
|};

const renderTable = ({
  capacity,
  commodities,
  drayage,
  incoterms,
  method,
  serviceOptions,
  status
}) => (
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
            <span className="float-left">Status</span>
            <span className="float-right font-weight-bold text-success">
              {status}
            </span>
          </P>
          <P>
            <span className="float-left">Method</span>
            <span className="float-right font-weight-bold">{method}</span>
          </P>
          <P>
            <span className="float-left">Capacity</span>
            <span className="float-right font-weight-bold">{capacity}</span>
          </P>
          <P>
            <span className="float-left">Drayage</span>
            <span className="float-right font-weight-bold">{drayage}</span>
          </P>
        </Td>
        <Td>
          <P>
            <span className="float-left">Incoterms</span>
            <span className="float-right font-weight-bold">{incoterms}</span>
          </P>
          <P>
            <span className="float-left">Service Options</span>
            <span className="float-right font-weight-bold">
              {serviceOptions}
            </span>
          </P>
          <P rowspan="2">
            <span className="float-left">
              Hazardous or forbidden commodities
            </span>
            <span className="float-right font-weight-bold">{commodities}</span>
          </P>
        </Td>
      </tr>
    </tbody>
  </table>
);

const Footer = ({values}: Props) => (
  <div className="container">{renderTable(values)}</div>
);

export default Footer;
