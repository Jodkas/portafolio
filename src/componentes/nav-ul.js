import React from "react";
import "../styles/nav-ul.css";
import Boton from "./boton";

function NavUl(props) {
  return (
    <div className="nav__ul-contenedor">
      <ul className="nav__ul">
        <li className="nav__li">
          <Boton texto="Conocimientos" link="conocimientos" />
        </li>
        <li className="nav__li">
          <Boton texto="Proyectos" />
        </li>
        <li className="nav__li">
          <Boton texto="Contactame" />
        </li>
      </ul>
    </div>
  );
}

export default NavUl;
