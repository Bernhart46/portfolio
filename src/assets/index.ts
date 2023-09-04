import HomeIcon from "./svg/home-icon";
import ProjectsIcon from "./svg/projects-icon";
import TechsIcon from "./svg/techs-icon";
import ContactsIcon from "./svg/contacts-icon";

type menuIconsType = {
  [key: string]: () => JSX.Element;
};

const menuIcons: menuIconsType = {
  home: HomeIcon,
  projects: ProjectsIcon,
  techs: TechsIcon,
  contacts: ContactsIcon,
};

const exportObject = {
  menuIcons,
};

export default exportObject;
