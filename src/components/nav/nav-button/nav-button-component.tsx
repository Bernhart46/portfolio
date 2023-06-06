import { NavLink } from "react-router-dom";
import "./nav-button-component.scss";
import { menuButtonNames } from "../opened-nav-component/opened-nav-component";

type Props = {
  title: menuButtonNames;
  to: string;
};

export default function NavButtonComponent({ title, to }: Props) {
  return (
    <NavLink className="nav__button" to={to}>
      {/* <img className="nav__button-icon" src={chooseMenuIcon(title)} /> */}
      <span>{title}</span>
    </NavLink>
  );
}
