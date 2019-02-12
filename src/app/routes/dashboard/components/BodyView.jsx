//@flow

import React, {Fragment} from "react";
import styled from "styled-components";
import {Button, ButtonGroup} from "reactstrap";

type Props = {|
  isShowingDiagram: boolean,
  onClickDiagram: () => any,
  onClickMap: () => any
|};

const renderMap = () => <h1>Map</h1>;

// const renderTable = () => (
//   <Fragment>
//     <table className="table bg-white">
//       <tbody>
//         <tr>
//           <td>Diagram</td>
//         </tr>
//       </tbody>
//     </table>
//   </Fragment>
// );

const renderDiagram = () => <h1>Table</h1>;

const renderIfNeeded = props => {
  console.log("props renderIfNeeded()", props);
  return props.isShowingDiagram === true ? renderDiagram() : renderMap();
};

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

const renderText = () => <div className="text-center">Text</div>;

const renderControls = props => {
  console.log("props renderControls", props);
  return (
    <div>
      {renderButtonsGroup(props)}
      <br />
      <div>
        {renderText()}
        {renderIfNeeded(props)}
      </div>
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
