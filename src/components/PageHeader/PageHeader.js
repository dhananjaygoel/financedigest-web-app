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
  Button,
  Modal,
  InputGroup,
  FormText,
  Input,
} from "reactstrap";
import Toggle from "../Toggle/Toggle";
import * as logo from "../../assets/img/logo.jpg";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import { Typeahead } from "react-bootstrap-typeahead";
import { options } from "./options";

const PageHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <Navbar
        fixed
        expand="md"
        className="navbar"
        style={{
          float: "right",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: '0'
        }}
      >
        <div style={{ display: "flex", marginTop: '0.5em', maxHeight: '50px', maxWidth: '70%', minWidth: '70%' }}>
          <img src={logo} style={{ width: "40px", height: "40px", }}></img>
          <FormGroup
            style={{ marginLeft: "1.5em", width: "80%" }}
            className="searchbar"
          >
            <Typeahead
              onChange={(selected) => {
                // Handle selections...
              }}
              labelKey="name"
              options={options}
            />
            {/* {<Input
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="Type to search"
            />} */}
          </FormGroup>
        </div>
        
        <div style={{ display: "flex" }}>
         
          <Nav
            className="md desktop-nav"
            navbar
            style={{ flex: "end" }}
          >
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
          <button
            className="navbar-toggler"
            type="button"
            style={{marginTop: '0.5em'}}
            onClick={() => setCollapseOpen(!collapseOpen)}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
          
        </div>
        
      </Navbar>
      
      <Collapse navbar isOpen={collapseOpen}>
        <Nav
          className="md"
          navbar
          style={{ flex: "end", display: !collapseOpen && "none" }}
        >
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
        
      </Collapse>
    </div>
  );
};

export default PageHeader;
