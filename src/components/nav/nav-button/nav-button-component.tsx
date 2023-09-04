import { NavLink } from "react-router-dom";
import "./nav-button-component.scss";

type Props = {
  title: string;
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
