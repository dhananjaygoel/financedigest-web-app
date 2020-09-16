/*eslint-disable*/
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import { dashboardData } from "store/dashboard/dashboardReducer";
import { WatchListElement } from "components/WatchListElement";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
var ps;

const Sidebar = (props) => {
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  /*componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };
  */
  const dashboardData = useSelector((state) => ({
    data: state,
  }));
  console.log(dashboardData);
  const { bgColor, routes, rtlActive, logo } = props;
  let logoImg = null;
  let logoText = null;
  if (logo !== undefined) {
    if (logo.outterLink !== undefined) {
      logoImg = (
        <a
          href={logo.outterLink}
          className="simple-text logo-mini"
          target="_blank"
          onClick={props.toggleSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </a>
      );
      logoText = (
        <a
          href={logo.outterLink}
          className="simple-text logo-normal"
          target="_blank"
          onClick={props.toggleSidebar}
        >
          {logo.text}
        </a>
      );
    } else {
      logoImg = (
        <Link
          to={logo.innerLink}
          className="simple-text logo-mini"
          onClick={props.toggleSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </Link>
      );
      logoText = (
        <Link
          to={logo.innerLink}
          className="simple-text logo-normal"
          onClick={props.toggleSidebar}
        >
          {logo.text}
        </Link>
      );
    }
  }
  return (
    <div className="sidebar">
      <Card className="card-chart" style={{height: '100%'}}>
      <div className="sidebar-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1 style={{margin: 0, fontSize: '1.2em', fontWeight: "bold", paddingLeft: "7px"}}>Watch List</h1>
        <Button size="sm" style={{backgroundColor: 'white'}}>+</Button>
        </div>
        <Table className="tablesorter" responsive>
          <thead>
            <tr></tr>
          </thead>
          <tbody className="card-chart">
            {dashboardData.data.watchList.map(e => {
              return <WatchListElement element={e} />
            })}
          </tbody>
        </Table>
      </div>
      </Card>
    </div>
  );
};

export default Sidebar;
