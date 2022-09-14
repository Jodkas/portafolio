import mainStyles from './main.module.css';
import Wave from './wave';
import waveStyle from './wave.module.css';
import ListProyects from './listProyects';

const Main = () => {
  return (
    <main className={mainStyles.container}>
      <Wave nameStyle={waveStyle.wave1} />
      <Wave nameStyle={waveStyle.wave2} />
      <h2 className={mainStyles.title}>Proyectos</h2>
      <ListProyects />
    </main>
  );
};

export default Main;
