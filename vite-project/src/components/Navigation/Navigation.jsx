import "./Navigation.css";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation() {
  const currentPage = useLocation().pathname;

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

export default Navigation;
