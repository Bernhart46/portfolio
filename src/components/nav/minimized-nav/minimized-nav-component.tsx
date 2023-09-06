import { useLocation } from "react-router-dom";
import { useContext } from "react";
import assets from "../../../assets";
import { NavProps } from "../nav-component";
import "./minimized-nav-component.scss";
import { languageContext } from "../../../shared/contexts";

//Minimized Nav Component for Mobile devices.
export function MinimizedNavComponent({ isOn, setIsOn }: NavProps) {
  const { buttons } = useContext(languageContext)?.nav || {};
  const pathname = useLocation().pathname.substring(1) as
    | "home"
    | "projects"
    | "techs"
    | "contacts";

  const title = buttons ? buttons[pathname] : "...";

  //Checks if the pathname is correct.
  if (!assets.menuIcons[pathname]) return <div></div>;

  const Icon = assets.menuIcons[pathname];

  return (
    <section
      className={`nav__component--minimized ${
        isOn ? "nav__component--minimized--off" : ""
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <div className="nav__component__icon-container">
        <Icon />
      </div>
      <span className="nav__component__title">{title}</span>
    </section>
  );
}
