import React from "react";
import "../styles/boton.css";

function Boton(props) {
  return (
    <div className="boton">
      <a className="boton__a" href={`#${props.link}`}>
        {props.texto}
      </a>
    </div>
  );
}

export default Boton;
