import { useState } from 'react';
import proyectStyles from './proyect.module.css';
import { motion } from 'framer-motion';

const Proyect = (props) => {
  const [position, setPosition] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 20;
  const onDragStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };
  const onDragMove = (e) => setTouchEnd(e.clientX);
  const onDragEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe) {
        if (position < props.images.length - 1) {
          setPosition(position + 1);
        }
      } else if (isRightSwipe) {
        if (position > 0) {
          setPosition(position - 1);
        }
      }
    }
  };

  return (
    <article className={proyectStyles.container}>
      <h3 className={proyectStyles.title}>{props.title}</h3>
      <section className={proyectStyles.features}>
        <section className={proyectStyles.descriptionContainer}>
          <p className={proyectStyles.description}>{props.text}</p>
        </section>
        <div className={proyectStyles.sliderContainer}>
          {props.images.map((img, index) => (
            <motion.div
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              onDrag={onDragMove}
              drag="x"
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              className={proyectStyles.imgContainer}
              key={index}
              initial={{ scale: 0 }}
              animate={{
                scale:
                  index === position
                    ? 1
                    : Math.abs(index - position) === 1
                    ? 0.6
                    : Math.abs(index - position) === 2
                    ? 0.3
                    : 0.3,
                zIndex:
                  index === position
                    ? 100
                    : index > position
                    ? 99 / index
                    : index,
                translateX: `${
                  (index - position) * (30 - Math.abs(index - position) * 6)
                }%`,
                visibility: Math.abs(index - position) > 2 ? 'hidden' : null,
              }}
            >
              <img src={img} alt="" className={proyectStyles.img} />
            </motion.div>
          ))}
        </div>
        <div className={proyectStyles.buttonContainer}>
          {props.button.link ? (
            <div
              className={proyectStyles.button}
              onClick={() => window.open(props.button.link, '_blank')}
            >
              <p
                className={proyectStyles.buttonText}
                onClick={() => window.open(props.button.download, '_blank')}
              >
                Visitar
              </p>
            </div>
          ) : null}
          {props.button.download ? (
            <div className={proyectStyles.button}>
              <p className={proyectStyles.buttonText}>Descargar</p>
            </div>
          ) : null}
        </div>
      </section>
    </article>
  );
};

export default Proyect;
