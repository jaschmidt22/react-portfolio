//import the necessary dependencies

import { Link as RouterLink, useLocation } from "react-router-dom"; //import the Link component from react-router-dom and the useLocation hook
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./Navigation.css";

//function that renders the navigation bar
function Navigation() {
  const currentPage = useLocation().pathname; //use the useLocation hook to get the current page's pathname

  return (
    <div className="breadcrumbs-container">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          component={RouterLink}
          to="/About"
          underline="hover"
          color="inherit"
          className={currentPage === "/About" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
        <Link
          component={RouterLink}
          to="/Portfolio"
          underline="hover"
          color="inherit"
          className={
            currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </Link>
        <Link
          component={RouterLink}
          to="/Contact"
          underline="hover"
          color="inherit"
          className={
            currentPage === "/Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
        <Link
          component={RouterLink}
          to="/Resume"
          underline="hover"
          color="inherit"
          className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </Breadcrumbs>
    </div>
  );
}

//export the Navigation component
export default Navigation;
