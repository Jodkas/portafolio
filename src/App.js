import "./App.css";
import Nav from "./componentes/nav";
import Main from "./componentes/main";
import ContenedorProyectos from "./componentes/contenedor-proyectos";
function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <ContenedorProyectos />
      <section className="prueba">
        <div className="contenedor">
          <div className="cuadrado"></div>
          <div className="cuadrado"></div>
          <div className="cuadrado"></div>
          <div className="cuadrado"></div>
          <div className="cuadrado"></div>
          <div className="cuadrado"></div>
          <div className="cuadrado"></div>
          <div className="cuadrado"></div>
          <div className="cuadrado"></div>
          <div className="cuadrado"></div>
          <div className="cuadrado"></div>
          <div className="cuadrado"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
