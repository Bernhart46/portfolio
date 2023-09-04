import { useContext } from "react";
import "./nav-toggler-component.scss";
import { togglerContext } from "../../../../shared/contexts";

export type NavTogglerProps = {
  id: string;
  label: string;
};

export function NavTogglerComponent(props: NavTogglerProps) {
  const { id, label } = props;
  const { toggle, togglers } = useContext(togglerContext);

  const togglerValue = togglers[id];

  const circleClasses = `nav__toggler__circle ${
    togglerValue ? "nav__toggler__circle--right" : "nav__toggler__circle--left"
  }`;

  return (
    <section className="nav__toggler__container">
      <div className="nav__toggler__label">{label}</div>
      <div className="nav__toggler__box" onClick={() => toggle(id)}>
        <div className={circleClasses}></div>
      </div>
    </section>
  );
}
