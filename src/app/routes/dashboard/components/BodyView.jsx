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
        <tr className="bg-white">
          <td>
            <Timeline />
          </td>
        </tr>
      </tbody>
    </table>
  </TableContainer>
);

const renderIfNeeded = props =>
  props.isShowingDiagram === true ? renderDiagram() : renderMap();

const StyledDiagramButton = styled(Button)`
  /*background-color: ${props => (props.showDiagram ? "#000000" : "#ffffff")};
  color: ${props => (props.showDiagram ? "#ffffff" : "#000000")};*/
`;

const StyledMapButton = styled(Button)`
  /*background-color: ${props => (!props.showDiagram ? "#000000" : "#ffffff")};
  color: ${props => (!props.showDiagram ? "#ffffff" : "#000000")};
  }};*/
`;

const renderButtonsGroup = ({isShowingDiagram, onClickDiagram, onClickMap}) => (
  <div className="float-right">
    <ButtonGroup>
      <StyledDiagramButton onClick={onClickDiagram}>
        Diagram
      </StyledDiagramButton>
      <StyledMapButton onClick={onClickMap}>Map</StyledMapButton>
    </ButtonGroup>
  </div>
);

const renderControls = props => {
  console.log("props renderControls", props);
  return (
    <div>
      {renderButtonsGroup(props)}
      <br />
      <div>{renderIfNeeded(props)}</div>
      <div />
    </div>
  );
};

const render = props => {
  return <Fragment>{renderControls(props)}</Fragment>;
};

const Body = (props: Props) => {
  return <div className="container">{render(props)}</div>;
};
export default Body;
