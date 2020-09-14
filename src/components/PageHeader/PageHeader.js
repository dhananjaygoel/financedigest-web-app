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
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Toggle from "../Toggle/Toggle";
import * as logo from "../../assets/img/logo.jpg";
const PageHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <Navbar fixed expand="md" className="navbar" style={{ float: "right" }}>
        <div style={{ width: "90%", display: 'flex' }}>
          <img src={logo} style={{ width: "40px", height: "40px" }}></img>
          <FormGroup style={{marginLeft: '3em', width: "60%"}}>
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="Type to search"
            />
          </FormGroup>
        </div>
        <Nav className="md" navbar style={{ flex: "end" }}>
          <NavItem>
            <NavLink href="/feed">Feed</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/learn">Learn</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/markets">Markets</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
        </Nav>
        <Toggle />
      </Navbar>
    </div>
  );
};

export default PageHeader;
