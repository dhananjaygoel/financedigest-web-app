import { FourOFour } from "views/404";
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/",
    component: Dashboard
  },
  {
    path: "*",
    name: "404",
    component: FourOFour
  }
];
export default routes;
