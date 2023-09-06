import { NavLink } from "react-router-dom";
import "./nav-button-component.scss";
import { menuButtons } from "../nav-types";

export default function NavButtonComponent({ title, to }: menuButtons) {
  return (
    <NavLink className="nav__button" to={to}>
      {/* <img className="nav__button-icon" src={chooseMenuIcon(title)} /> */}
      <span>{title}</span>
    </NavLink>
  );
}
