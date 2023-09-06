import { useContext } from "react";
import NavButtonComponent from "../nav-button/nav-button-component";
import { NavProps } from "../nav-types";
import { NavProfileComponent } from "../nav-profile/nav-profile-component";
import { NavSettingsComponent } from "../nav-settings/nav-settings-component";
import "./maximized-nav-component.scss";
import { languageContext } from "../../../shared/contexts";
import { menuButtons } from "../nav-types";

export function MaximizedNavComponent({ isOn, setIsOn }: NavProps) {
  const { home, projects, techs, contacts } =
    useContext(languageContext)?.nav.buttons || {};

  const classes = `nav__component--maximized ${
    isOn ? "" : "nav__component--maximized--off"
  }`;

  const menuButtons: menuButtons[] = [
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
        className="nav__component--maximized__button-container"
      >
        {menuButtons.map((button, index) => {
          return <NavButtonComponent key={index} {...button} />;
        })}
      </div>
      <hr className="nav__line" />
      <NavSettingsComponent />
    </section>
  );
}
