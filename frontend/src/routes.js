/*!
=====================================================
by Creative Charles Sri Fan Jason

========================================================
*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import AddChart from "@material-ui/icons/Add";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import SearchIcon from "@material-ui/icons/Search";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard";
import Browse from "views/Browse/Browse";
import Search from "views/Search/Search";
import SubmitCliam from "views/Submit/SubmitClaim";
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
];

export default dashboardRoutes;
