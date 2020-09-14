import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { FourOFour } from "./views/404";
import AdminLayout from "layouts/Admin/Admin.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route exact path="/" render={(props) => <AdminLayout {...props} />} />
        <Route path="/404" render={() => <FourOFour />} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
