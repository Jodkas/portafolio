import React from "react";
import "../styles/carta-proyecto.css";

function CartaProyecto() {
  return (
    <figure className="carta">
      <div className="carta__imagen-contenedor">
        <img
          className="carta__imagen"
          src={require("../imagenes/pagina-hi.png")}
          alt=""
        />
      </div>
      <figcaption className="carta__texto">Helados Italia</figcaption>
    </figure>
  );
}

export default CartaProyecto;
