import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import PageHeader from "components/PageHeader/PageHeader";

import routes from "routes.js";

import logo from "assets/img/react-logo.png";
import Dashboard from "views/Dashboard";

var ps;

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "blue",
      sidebarOpened:
        document.documentElement.className.indexOf("nav-open") !== -1,
    };
  }
  
  render() {
    return (
      <>
        <div className="wrapper">
          <PageHeader data={this.state.backgroundColor}/>
          <div
            className="main-panel"
            ref="mainPanel"
            data={this.state.backgroundColor}
          >
            <Dashboard />
          </div>
          <div className="flexItem">
            <Sidebar
              {...this.props}
              bgColor={this.state.backgroundColor}
              toggleSidebar={this.toggleSidebar}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Admin;
