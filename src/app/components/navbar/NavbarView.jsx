// @flow
import {Link} from "react-router-dom";
import React, {Fragment} from "react";
import styled from "styled-components";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";

import IcoMoon from "react-icomoon";

import pagesDefinitionsList from "./pagesDefinitionsList";

type Props = {|
  isOpen: boolean,
  onToggle: () => any
|};

const renderDropDown = () => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      JS
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem href="/">Dashboard</DropdownItem>
      <DropdownItem href="/map">Map</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

const renderNavItem = (pageDefinitions, index) => (
  <NavItem key={`navitem_${index}`}>
    <NavLink key={`navlink_${index}`} href={pageDefinitions.path}>
      {pageDefinitions.title}
    </NavLink>
  </NavItem>
);

const renderNavContent = () =>
  pagesDefinitionsList.map((pageDefinitions, index) =>
    renderNavItem(pageDefinitions, index)
  );

const renderNav = () => (
  <Nav className="ml-auto" navbar>
    {renderNavContent()}
    {renderDropDown()}
  </Nav>
);

const renderNavbarContent = ({onToggle, isOpen}) => (
  <Fragment>
    <NavbarBrand href="/">IFA</NavbarBrand>
    <NavbarToggler onClick={onToggle} />
    <Collapse isOpen={isOpen} navbar>
      {renderNav()}
    </Collapse>
  </Fragment>
);
const renderNavbar = props => (
  <Navbar color="light" light expand="md">
    {renderNavbarContent(props)}
  </Navbar>
);

const NavbarView = (props: Props) => renderNavbar(props);

export default NavbarView;
