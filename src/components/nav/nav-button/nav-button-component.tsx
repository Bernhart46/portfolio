import { NavLink } from "react-router-dom";
import "./nav-button-component.scss";
import { exportObject } from "../../../assets";
import { menuButtonNames } from "../opened-nav-component";

type Props = {
  title: menuButtonNames;
  to: string;
};

export default function NavButtonComponent({ title, to }: Props) {
  return (
    <NavLink className="nav-buttons" to={to}>
      {/* <img className="nav-button-icon" src={chooseMenuIcon(title)} /> */}
      <span>{title}</span>
    </NavLink>
  );
}

export function chooseMenuIcon(name: menuButtonNames) {
  switch (name) {
    case "Home":
      return exportObject.homeIcon;
    case "Projects":
      return exportObject.projectsIcon;
    case "Skills":
      return exportObject.skillsIcon;
    case "Contacts":
      return exportObject.contactsIcon;
  }
}
