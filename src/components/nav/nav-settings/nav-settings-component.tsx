import "./nav-settings-component.scss";
import { useToggler } from "./nav-toggler/hook";
import { NavTogglerComponent } from "./nav-toggler/nav-toggler-component";

export function NavSettingsComponent() {
  const toggler = useToggler();

  return (
    <div className="nav__settings__component">
      <NavTogglerComponent id="theme" label="Theme" toggler={toggler} />
      <NavTogglerComponent id="english" label="English" toggler={toggler} />
    </div>
  );
}
