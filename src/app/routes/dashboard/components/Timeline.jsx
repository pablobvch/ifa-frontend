// @flow
import IcoMoon from "react-icomoon";
import React, {Fragment} from "react";
import styled from "styled-components";

const TimelineWrap = styled.div`
  margin: 5% 2%;
  position: relative;
  top: 100;
`;

const HorizontalLine = styled.div`
  background-color: #aabbc4;
  height: 2px;
  position: relative;
  width: 100%;
`;

const StyledIcoMoon = styled(IcoMoon)``;

const StyledItem1 = styled.div`
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #aabbc4;
  color: #fff;
  font-size: 1.4em;
  height: 50px;
  line-height: 50px;
  margin-left: -25px;
  position: absolute;
  text-align: center;
  top: -25px;
  width: 50px;
  z-index: 1000;
`;

const StyledItem2 = styled(StyledItem1)`
  left: 16.66%;
`;

const StyledItem3 = styled(StyledItem1)`
  left: 33.32%;
`;

const StyledItem4 = styled(StyledItem1)`
  left: 50%;
`;

const StyledItem5 = styled(StyledItem1)`
  left: 66.66%;
`;

const StyledItem6 = styled(StyledItem1)`
  left: 83.32%;
`;

const StyledItem7 = styled(StyledItem1)`
  left: 100%;
`;

const TimelineItems = () => (
  <Fragment>
    <StyledItem1>
      <StyledIcoMoon icon="stats-bars" color={"#000000"} />
    </StyledItem1>
    <StyledItem2>
      <StyledIcoMoon icon="stats-bars" color={"#000000"} />
    </StyledItem2>
    <StyledItem3>
      <StyledIcoMoon icon="stats-bars" color={"#000000"} />
    </StyledItem3>
    <StyledItem4>
      <StyledIcoMoon icon="stats-bars" color={"#000000"} />
    </StyledItem4>
    <StyledItem5>
      <StyledIcoMoon icon="stats-bars" color={"#000000"} />
    </StyledItem5>
    <StyledItem6>
      <StyledIcoMoon icon="stats-bars" color={"#000000"} />
    </StyledItem6>
    <StyledItem7>
      <StyledIcoMoon icon="stats-bars" color={"#000000"} />
    </StyledItem7>
  </Fragment>
);

const Timeline = () => (
  <TimelineWrap>
    <HorizontalLine />
    <TimelineItems />
  </TimelineWrap>
);

export default Timeline;
