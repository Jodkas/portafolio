import React from "react";
import "../styles/main.css";
import MainText from "./main-texto";

function Main() {
  return (
    <main id="main">
      <div className="main-imagen-contenedor">
        <img
          className="main-imagen"
          src={require("../imagenes/yo.png")}
          id="yo"
          alt="Foto de Lucas Cardozo"
        />
      </div>
      <MainText />
    </main>
  );
}

export default Main;
