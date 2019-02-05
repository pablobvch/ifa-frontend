// @flow
import React, {useState, Fragment} from "react";

import NavbarView from "./NavbarView";

type Props = {||};

const initialState = {
  isOpen: false
};

const getHandlers = (props, state, updateState) => ({
  onToggle: () =>
    updateState(state => ({
      ...state,
      isOpen: !state.isOpen
    }))
});

const render = (props, state, updateState) => (
  <NavbarView {...state} {...getHandlers(props, state, updateState)} />
);

const renderUsing = (props, [state, updateState]) =>
  render(props, state, updateState);

const Navbar = (props: Props) => (
  <Fragment>{renderUsing(props, useState(initialState))}</Fragment>
);

export default Navbar;
