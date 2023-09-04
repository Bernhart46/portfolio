import "./nav-settings-component.scss";
import { NavTogglerComponent } from "./nav-toggler/nav-toggler-component";

export function NavSettingsComponent() {
  return (
    <section className="nav__settings__component">
      <NavTogglerComponent id="theme_isDark" label="Theme" />
      <NavTogglerComponent id="language_isEnglish" label="English" />
    </section>
  );
}
