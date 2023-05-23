import { useToggler } from "./hook";
import "./nav-toggler-component.scss";

export type NavTogglerProps = {
  id: number | string;
  label: string;
};

export function NavTogglerComponent(props: NavTogglerProps) {
  const { id, label } = props;

  const { toggle, value } = useToggler(id);

  const togglerValue = value;

  const circleClasses = `nav__toggler__circle ${
    togglerValue ? "nav__toggler__circle--right" : "nav__toggler__circle--left"
  }`;

  return (
    <div className="nav__toggler__container">
      <div className="nav__toggler__label">{label}</div>
      <div className="nav__toggler__box" onClick={toggle}>
        <div className={circleClasses}></div>
      </div>
    </div>
  );
}
