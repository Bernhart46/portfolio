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

interface OpenedNavProps extends NavProps {
  isMobile: boolean;
}

export function OpenedNavComponent(props: OpenedNavProps) {
  const { isOn, setIsOn, isMobile } = props;
  const classes = `opened-nav-component ${!isMobile || isOn ? "" : "off"}`;

  const toggleIsOn = () => {
    if (!isMobile) return;
    setIsOn(!isOn);
  };

  return (
    <div className={classes} onClick={toggleIsOn}>
      {menuButtons.map((button) => {
        return <NavButtonComponent key={button.title} {...button} />;
      })}
    </div>
  );
}
