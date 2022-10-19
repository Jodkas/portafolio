import iconFooterStyles from './iconFooter.module.css';
import github from '../assets/images/logo/github.png';
import instagram from '../assets/images/logo/instagram.png';
import linkedin from '../assets/images/logo/linkedin.png';
import gmail from '../assets/images/logo/gmail.png';
const IconFooter = () => {
  return (
    <div className={iconFooterStyles.container}>
      <a href="https://github.com/Jodkas" className={iconFooterStyles.a}>
        <img src={github} alt="" className={iconFooterStyles.img} />
      </a>
      <a href="" className={iconFooterStyles.a}>
        <img src={gmail} alt="" className={iconFooterStyles.img} />
      </a>
      <a
        href="https://www.instagram.com/lucardozo27/"
        className={iconFooterStyles.a}
      >
        <img src={instagram} alt="" className={iconFooterStyles.img} />
      </a>
      <a
        href="https://www.linkedin.com/in/lucas-ivan-cardozo/"
        className={iconFooterStyles.a}
      >
        <img src={linkedin} alt="" className={iconFooterStyles.img} />
      </a>
    </div>
  );
};

export default IconFooter;
