import React from "react";
import "../styles/main-texto.css";

function MainText() {
  return (
    <header id="header">
      <h1 className="header-h1">
        Hola!
        <br />
        Soy <span className="header-h1-span">Lucas Cardozo</span>
      </h1>
      <p className="header-p">Un desarrollador web...</p>
    </header>
  );
}

export default MainText;
