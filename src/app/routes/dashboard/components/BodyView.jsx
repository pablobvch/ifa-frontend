//@flow

import React, {Fragment} from "react";
import styled from "styled-components";
import {Button, ButtonGroup} from "reactstrap";

import Map from "./Map";
import Timeline from "./Timeline";

type Props = {|
  isShowingDiagram: boolean,
  onClickDiagram: () => any,
  onClickMap: () => any
|};

const renderMap = () => <Map>Map</Map>;

const StyledTd = styled.td`
  border-top: 0px !important;
  text-align: center;
`;

const StyledTr = styled.tr`
  border: 1px solid #dee2e6;
`;

const TableContainer = styled.div`
  margin-top: -10px;
`;

const renderDiagram = () => (
  <TableContainer>
    <table className="table">
      <tbody>
        <tr>
          <StyledTd>
            <span className="font-weight-bold">Text</span>
          </StyledTd>
        </tr>
        <StyledTr className="bg-white">
          <td>
            <Timeline />
          </td>
        </StyledTr>
      </tbody>
    </table>
  </TableContainer>
);

const renderIfNeeded = props =>
  props.isShowingDiagram === true ? renderDiagram() : renderMap();

const StyledButton = styled(Button)`
  background-color: ${props => props.backgroundcolor};
  color: ${props => props.color};
  border: 1px solid #dee2e6;
`;

const renderButtonsGroup = ({onClickDiagram, onClickMap, isShowingDiagram}) => (
  <div className="float-right">
    <ButtonGroup>
      <StyledButton
        backgroundcolor={isShowingDiagram ? "#ffffff" : "#f8f9fa"}
        className="font-weight-bold"
        color={isShowingDiagram ? "#000000" : "#dee2e6"}
        onClick={onClickDiagram}
      >
        Diagram
      </StyledButton>
      <StyledButton
        backgroundcolor={!isShowingDiagram ? "#ffffff" : "#f8f9fa"}
        className="font-weight-bold"
        color={!isShowingDiagram ? "#000000" : "#dee2e6"}
        onClick={onClickMap}
      >
        Map
      </StyledButton>
    </ButtonGroup>
  </div>
);

const renderControls = props => (
  <div>
    {renderButtonsGroup(props)}
    <br />
    <div>{renderIfNeeded(props)}</div>
    <div />
  </div>
);

const render = props => {
  return <Fragment>{renderControls(props)}</Fragment>;
};

const Body = (props: Props) => {
  return <div className="container">{render(props)}</div>;
};
export default Body;
