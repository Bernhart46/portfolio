import { useLocation } from "react-router-dom";
import { chooseMenuIcon } from "./nav-button/nav-button-component";
import { NavProps } from "./nav-component";
import { menuButtonNames } from "./opened-nav-component";

//Minimized Nav Component for Mobile devices.
export function ClosedNavComponent({ isOn, setIsOn }: NavProps) {
  const pathname = useLocation().pathname.substring(1);
  const firstLetter = pathname.charAt(0).toUpperCase();
  const title = (firstLetter + pathname.slice(1)) as menuButtonNames;

  return (
    <div
      className={`closed-nav-component ${isOn ? "off" : ""}`}
      onClick={() => setIsOn(!isOn)}
    >
      <img src={chooseMenuIcon(title)} />
      <span>{title}</span>
    </div>
  );
}
