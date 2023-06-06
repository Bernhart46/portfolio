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

export function OpenedNavComponent({ isOn, setIsOn }: NavProps) {
  const classes = `nav__component--opened ${
    isOn ? "" : "nav__component--opened--off"
  }`;

  const toggleIsOn = () => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;
    setIsOn(!isOn);
  };

  return (
    <section className={classes}>
      <NavProfileComponent />
      <hr className="nav__line" />
      <div onClick={toggleIsOn}>
        {menuButtons.map((button) => {
          return <NavButtonComponent key={button.title} {...button} />;
        })}
      </div>
      <hr className="nav__line" />
      <NavSettingsComponent />
    </section>
  );
}
