import React from "react";
import "../styles/contenedor-proyectos.css";
import CartaProyecto from "./carta-proyecto";

function ContenedorProyectos() {
  return (
    <section id="conocimientos">
      <h2 className="proyectos-titulo">Mis proyectos</h2>
      <div className="proyectos-contenedor">
        <CartaProyecto />
        <CartaProyecto />
        <CartaProyecto />
      </div>
    </section>
  );
}

export default ContenedorProyectos;
