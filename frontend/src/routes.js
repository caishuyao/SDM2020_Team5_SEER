/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import AddChart from "@material-ui/icons/Add";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import SearchIcon from "@material-ui/icons/Search";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard";
import Browse from "views/Browse/Browse";
import Search from "views/Search/Search";
import SubmitCliam from "views/Submit/SubmitClaim";
import Tt from "views/Test/Tt";
import Icons from "views/Icons/Icons";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/search",
    name: "Search Evidences",
    rtlName: "ملف تعريفي للمستخدم",
    icon: SearchIcon,
    component: Search,
    layout: "/admin",
  },
  {
    path: "/browse",
    name: "Browse Evidences",
    rtlName: "قائمة الجدول",
    icon: LibraryBooks,
    component: Browse,
    layout: "/admin",
  },
  {
    path: "/submit",
    name: "Submit Evidences",
    rtlName: "طباعة",
    icon: AddChart,
    component: SubmitCliam,
    layout: "/admin",
  },
  {
    path: "/test",
    name: "Test Page",
    rtlName: "طباعة",
    icon: AddChart,
    component: Tt,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "طباعة",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
];

export default dashboardRoutes;
