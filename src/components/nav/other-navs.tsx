import { useLocation } from "react-router-dom";
import "./index.scss";
import NavButtonComponent, {
  chooseMenuIcon,
} from "./nav-button/nav-button-component";

type Props = {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
};

//Mobile Only
export function ClosedNavComponent({ isOn, setIsOn }: Props) {
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
export type menuButtonNames = "Home" | "Projects" | "Skills" | "Contacts";
const menuButtons: { title: menuButtonNames; to: string }[] = [
  {
    title: "Home",
    to: "/home",
  },
  {
    title: "Projects",
    to: "/projects",
  },
  {
    title: "Skills",
    to: "/skills",
  },
  {
    title: "Contacts",
    to: "/contacts",
  },
];

export function OpenedNavComponent({ isOn, setIsOn }: Props) {
  return (
    <div
      className={`opened-nav-component ${!isOn ? "off" : ""}`}
      onClick={() => setIsOn(!isOn)}
    >
      {menuButtons.map((button) => {
        return <NavButtonComponent key={button.title} {...button} />;
      })}
    </div>
  );
}
