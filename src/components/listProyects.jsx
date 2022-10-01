import listProyectsStyles from './listProyects.module.css';
import Proyect from './proyect';
import games from '../assets/images/gamesImages/games';

const ListProyects = () => {
  return (
    <div className={listProyectsStyles.container}>
      <div className={listProyectsStyles.lineTop}></div>
      <div className={listProyectsStyles.listProyects}>
        {games.map((game, index) => (
          <Proyect
            key={index}
            title={game.title}
            text={game.text}
            images={game.images}
            button={game.button}
          />
        ))}
      </div>
      <div className={listProyectsStyles.lineBottom}></div>
    </div>
  );
};

//<Proyect title="Helados Italia" currentState={currentProyect} />
//      <Proyect title="Cash Counter" currentState={currentProyect} />
export default ListProyects;
