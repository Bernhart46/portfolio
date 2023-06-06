import { useLocation } from "react-router-dom";
import assets from "../../../assets";
import { NavProps } from "../nav-component";
import { menuButtonNames } from "../opened-nav-component/opened-nav-component";
import "./closed-nav-component.scss";

//Minimized Nav Component for Mobile devices.
export function ClosedNavComponent({ isOn, setIsOn }: NavProps) {
  const pathname = useLocation().pathname.substring(1);
  const firstLetter = pathname.charAt(0).toUpperCase();
  const title = (firstLetter + pathname.slice(1)) as menuButtonNames;

  return (
    <section
      className={`nav__component--closed ${
        isOn ? "nav__component--closed--off" : ""
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <div className="nav__component__icon-container">
        {assets.menuIcons[title]()}
      </div>
      <span>{title}</span>
    </section>
  );
}
