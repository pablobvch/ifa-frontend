// @flow
import React, {Fragment, useState} from "react";

import BodyView from "./BodyView";

type Props = {|
  isShowingDiagram: boolean
|};

const initialState = {
  isShowingDiagram: true
};

const getHandlers = (props, state, updateState) => ({
  onClickDiagram: () =>
    updateState(state => ({
      ...state,
      isShowingDiagram: true
    })),
  onClickMap: () =>
    updateState(state => ({
      ...state,
      isShowingDiagram: false
    }))
});

const render = (props, [state, updateState]) => (
  <BodyView {...state} {...getHandlers(props, state, updateState)} />
);

const Body = (props: Props) => (
  <Fragment>{render(props, useState(initialState))}</Fragment>
);

export default Body;
