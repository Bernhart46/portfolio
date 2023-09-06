import { useContext } from "react";
import "./nav-settings-component.scss";
import { NavTogglerComponent } from "./nav-toggler/nav-toggler-component";
import { languageContext } from "../../../shared/contexts";

export function NavSettingsComponent() {
  const { english, theme } = useContext(languageContext)?.nav.settings || {};

  return (
    <section className="nav__settings__component">
      <NavTogglerComponent id="theme_isDark" label={theme || "..."} />
      <NavTogglerComponent id="language_isEnglish" label={english || "..."} />
    </section>
  );
}
