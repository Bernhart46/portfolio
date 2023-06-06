import HomeIcon from "./svg/home-icon";
import ProjectsIcon from "./svg/projects-icon";
import SkillsIcon from "./svg/skills-icon";
import ContactsIcon from "./svg/contacts-icon";

type menuIconsType = {
  [key: string]: () => JSX.Element;
};

const menuIcons: menuIconsType = {
  Home: HomeIcon,
  Projects: ProjectsIcon,
  Skills: SkillsIcon,
  Contacts: ContactsIcon,
};

const exportObject = {
  menuIcons,
};

export default exportObject;
