import "./nav-settings-component.scss";
import { NavTogglerComponent } from "./nav-toggler/nav-toggler-component";

export function NavSettingsComponent() {
  return (
    <div className="nav__settings__component">
      <NavTogglerComponent id="theme" label="Theme" />
      <NavTogglerComponent id="english" label="English" />
    </div>
  );
}
