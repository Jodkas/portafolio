import headerStyles from './header.module.css';

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>Lucas Cardozo</h1>
      <h2 className={headerStyles.subtitle}>web developer</h2>
    </header>
  );
};

export default Header;
