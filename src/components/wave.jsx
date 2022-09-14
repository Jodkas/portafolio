import waveStyle from './wave.module.css';

const Wave = (props) => {
  return (
    <div className={waveStyle.container}>
      <div className={props.nameStyle}></div>
    </div>
  );
};

export default Wave;
