import React, { Component, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const PageHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <Navbar fixed expand="md" className="navbar" style={{float: 'right'}} >
          <div style={{width: '50%'}}></div>
          <Nav className="md" navbar right style={{flex: 'end'}}>
            <NavItem right>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
};

export default PageHeader;
