import homeStyles from './home.module.css';
import ListIcons from './listIcons';
import Header from './header';

const Home = () => {
  return (
    <div className={homeStyles.container}>
      <Header />
      <ListIcons />
    </div>
  );
};

export default Home;
