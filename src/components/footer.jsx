import footerStyles from './footer.module.css';
import IconFooter from './iconFooter';

const Footer = () => {
  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.main}>
        <h3 className={footerStyles.title}>Mi Portafolio</h3>
        <div className={footerStyles.subTitleContainer}>
          <p className={footerStyles.subTitle}>Lucas Cardozo</p>
        </div>
        <IconFooter />
      </div>
    </footer>
  );
};

export default Footer;
