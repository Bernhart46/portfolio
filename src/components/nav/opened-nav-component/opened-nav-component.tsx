import { useContext } from "react";
import NavButtonComponent from "../nav-button/nav-button-component";
import { NavProps } from "../nav-component";
import { NavProfileComponent } from "../nav-profile/nav-profile-component";
import { NavSettingsComponent } from "../nav-settings/nav-settings-component";
import "./opened-nav-component.scss";
import { languageContext } from "../../../shared/contexts";

export function OpenedNavComponent({ isOn, setIsOn }: NavProps) {
  const { home, projects, techs, contacts } =
    useContext(languageContext).nav.buttons;

  const classes = `nav__component--opened ${
    isOn ? "" : "nav__component--opened--off"
  }`;

  const menuButtons: { title: string; to: string }[] = [
    {
      title: home,
      to: "/home",
    },
    {
      title: projects,
      to: "/projects",
    },
    {
      title: techs,
      to: "/techs",
    },
    {
      title: contacts,
      to: "/contacts",
    },
  ];

  const toggleIsOn = () => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;
    setIsOn(!isOn);
  };

  return (
    <section className={classes}>
      <NavProfileComponent />
      <hr className="nav__line" />
      <div
        onClick={toggleIsOn}
        className="nav__component--opened__button-container"
      >
        {menuButtons.map((button) => {
          return <NavButtonComponent key={button.title} {...button} />;
        })}
      </div>
      <hr className="nav__line" />
      <NavSettingsComponent />
    </section>
  );
}
