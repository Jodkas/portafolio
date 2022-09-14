import listIconStyles from './listIcons.module.css';
import Icon from './icon';
import github from '../media/images/github.png';
import instagram from '../media/images/instagram.png';
import linkedin from '../media/images/linkedin.png';

const ListIcons = () => {
  return (
    <div className={listIconStyles.container}>
      <Icon
        src={github}
        alt="Imagen de Github"
        link="https://github.com/Jodkas"
        linkColor="white"
        linkBackgroundColor="black"
        subLink="Mira mis poryectos!"
        subLinkColor="black"
        subLinkBackgroundColor="white"
      />
      <Icon
        src={linkedin}
        alt="Imagen de Linkedin"
        link="https://www.linkedin.com/in/lucas-ivan-cardozo/"
        linkColor="white"
        linkBackgroundColor="#0077b7"
        subLink="Más sobre mí"
        subLinkColor="black"
        subLinkBackgroundColor="white"
      />
      <Icon
        src={instagram}
        alt="Imagen de Instagram"
        link="https://www.instagram.com/lucardozo27/"
        linkColor="white"
        linkBackgroundImage="linear-gradient(
  135deg,
  hsl(240deg 100% 20%) 0%,
  hsl(283deg 100% 20%) 19%,
  hsl(308deg 100% 21%) 27%,
  hsl(323deg 100% 27%) 34%,
  hsl(333deg 100% 32%) 41%,
  hsl(340deg 100% 36%) 47%,
  hsl(353deg 73% 44%) 53%,
  hsl(12deg 72% 47%) 59%,
  hsl(25deg 87% 44%) 66%,
  hsl(36deg 100% 41%) 73%,
  hsl(45deg 100% 40%) 81%,
  hsl(55deg 100% 38%) 100%
)"
        subLink="hola -._"
        subLinkColor="black"
        subLinkBackgroundColor="white"
      />
    </div>
  );
};

export default ListIcons;
