import NavButtonComponent from "./nav-button/nav-button-component";
import { NavProps } from "./nav-component";

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

export function OpenedNavComponent({ isOn, setIsOn }: NavProps) {
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
