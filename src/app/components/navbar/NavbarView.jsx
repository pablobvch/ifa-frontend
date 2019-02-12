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

import Hexagon from "./Hexagon";

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

const StyledNavLink = styled(NavLink)`
  font-weight: bold;
  &:hover {
    color: aqua !important;
  }
`;

const NotificationIconContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledIcoMoon = styled(IcoMoon)`
  margin: 10px;
  color: ${props => props.color};
`;

const IconsContainer = styled.div`
  display: block;
`;

const StyledSpan = styled.span`
  position: absolute;
  left: 21px;
  background-color: red;
  padding: 2px;
  border-radius: 50px;
  line-height: 1;
  padding: 3px 5.5px;
  font-size: 10px;
  color: white;
`;

const renderIcons = () => (
  <IconsContainer>
    <StyledIcoMoon icon="search" color={"#D3D3D3"} />
    <StyledIcoMoon icon="question" color={"#D3D3D3"} />
    <NotificationIconContainer>
      <StyledIcoMoon icon="bell" color={"#000000"} />
      <StyledSpan>3</StyledSpan>
    </NotificationIconContainer>
  </IconsContainer>
);

const renderNavItem = (pageDefinitions, index) => (
  <NavItem key={`navitem_${index}`}>
    <StyledNavLink key={`navlink_${index}`} href={pageDefinitions.path}>
      {pageDefinitions.title}
    </StyledNavLink>
  </NavItem>
);

const renderLinks = () =>
  pagesDefinitionsList.map((pageDefinitions, index) =>
    renderNavItem(pageDefinitions, index)
  );

const renderNav = () => (
  <Nav className="ml-auto" navbar>
    {renderLinks()}
    {renderIcons()}
    {renderDropDown()}
  </Nav>
);

const renderNavbarContent = ({onToggle, isOpen}) => (
  <Fragment>
    <NavbarBrand href="/">
      <Hexagon />
    </NavbarBrand>
    <NavbarToggler onClick={onToggle} />
    <Collapse isOpen={isOpen} navbar>
      {renderNav()}
    </Collapse>
  </Fragment>
);
const renderNavbar = props => (
  <Navbar color="withe" light expand="md">
    {renderNavbarContent(props)}
  </Navbar>
);

const NavbarView = (props: Props) => renderNavbar(props);

export default NavbarView;
