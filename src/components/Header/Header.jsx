// Imports

import Navigation from "../Navigation/Navigation";
import "./Header.css";

// Function that renders the header & exports
export default function Header() {
  return (
    <div className="headerParent" style={{ padding: "0px 0px 10px 43px" }}>
      <p id="header-text">Jessica Schmidt</p>
      <Navigation />
    </div>
  );
}
