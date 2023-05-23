import NavButtonComponent from "../nav-button/nav-button-component";
import { NavProps } from "../nav-component";
import { NavProfileComponent } from "../nav-profile/nav-profile-component";
import { NavSettingsComponent } from "../nav-settings/nav-settings-component";
import "./opened-nav-component.scss";

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
  const classes = `nav__component--opened ${
    !isMobile || isOn ? "" : "nav__component--opened--off"
  }`;

  const toggleIsOn = () => {
    if (!isMobile) return;
    setIsOn(!isOn);
  };

  return (
    <div className={classes} onClick={toggleIsOn}>
      {!isMobile && (
        <>
          <NavProfileComponent />
          <hr className="nav__line" />
        </>
      )}
      {menuButtons.map((button) => {
        return <NavButtonComponent key={button.title} {...button} />;
      })}
      <hr className="nav__line" />
      <NavSettingsComponent />
    </div>
  );
}
