import React from 'react';
import iconStyle from './icon.module.css';

const Icon = (props) => {
  const goToLink = () => {
    window.open(props.link, '_blank');
  };
  return (
    <div className={iconStyle.container} onClick={goToLink}>
      <div className={iconStyle.textContainer}>
        <div
          className={iconStyle.linkContainer}
          style={{
            color: props.linkColor,
            backgroundColor: props.linkBackgroundColor,
            backgroundImage: props.linkBackgroundImage,
          }}
        >
          <p className={iconStyle.link}>{props.link}</p>
        </div>
        <div
          className={iconStyle.subLinkContainer}
          style={{
            color: props.subLinkColor,
            backgroundColor: props.subLinkBackgroundColor,
          }}
        >
          <p className={iconStyle.subLink}>{props.subLink}</p>
        </div>
      </div>
      <img src={props.src} alt={props.alt} className={iconStyle.img} />
    </div>
  );
};

export default Icon;
