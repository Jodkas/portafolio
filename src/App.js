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
    </div>
  );
}

export default App;
