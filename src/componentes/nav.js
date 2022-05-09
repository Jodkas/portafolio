import React from "react";
import "../styles/nav.css";
import NavUl from "./nav-ul";
import NavMenuIcono from "./nav-menuIcono";

function Nav(props) {
  return (
    <nav className="nav">
      <NavMenuIcono />
      <NavUl />
    </nav>
  );
}

export default Nav;
