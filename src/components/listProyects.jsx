import { useState } from 'react';
import listProyectsStyles from './listProyects.module.css';
import Proyect from './proyect';

const ListProyects = () => {
  const [currentProyect, setCurrentProyect] = useState('');
  return (
    <div className={listProyectsStyles.container}>
      <div className={listProyectsStyles.lineTop}></div>
      <div className={listProyectsStyles.lineBottom}></div>
      <Proyect title="Race Car-Driver" currentState={currentProyect} />
    </div>
  );
};
//<Proyect title="Helados Italia" currentState={currentProyect} />
//      <Proyect title="Cash Counter" currentState={currentProyect} />
export default ListProyects;
