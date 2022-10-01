import heladosItaliaImages from "./heladosItalia/heladosItaliaImages";
import rcdImages from "./rcd/rcdImages";

const games = [
  {
    title: "Race Car Driver",
    text: "Un juego creado para el final de Fundamentos de la Informatica, que es una materia de primer anio de Ingenieria Informatica. Esta fue mi primera experiencia desarrollando y programando un juego. Este proyecto fue creado con Scratch 3.",
    images: rcdImages,
    button: {
      link: "https://scratch.mit.edu/projects/347872241/",
      download: "https://scratch.mit.edu/projects/347872241/",
    },
  },
  {
    title: "Helados Italia",
    text: "El primer gran proyecto que me propuse luego de aprender las bases de HTML,CSS y JavaScript. Aniadiendo una base de datos en GoogleSheets manejada por su propia herramienta llamada AppScript.",
    images: heladosItaliaImages,
    button: { link: "https://jodkas.github.io/heladositalia/" },
  },
];

export default games;
