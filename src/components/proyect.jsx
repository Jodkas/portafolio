import { useEffect } from 'react';
import proyectStyles from './proyect.module.css';

const Proyect = (props) => {
  useEffect(() => {
    console.log('igual');
  }, [props.currentState]);
  return (
    <article className={proyectStyles.container}>
      <h3 className={proyectStyles.title}>{props.title}</h3>
      <section className={proyectStyles.description}>
        <p className={proyectStyles.descriptionText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          accusantium impedit nemo. Ratione, qui. Sunt facere exercitationem
          quaerat, dolores eveniet aliquam similique. Harum optio pariatur, qui
          animi dicta cum. Et!
        </p>
      </section>
      <section>
        
      </section>
    </article>
  );
};

export default Proyect;
