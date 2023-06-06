import "./nav-toggler-component.scss";

export type NavTogglerProps = {
  id: string;
  label: string;
  toggler: {
    getValue: (togglerId: string) => boolean;
    toggle: (togglerId: string) => void;
  };
};

export function NavTogglerComponent(props: NavTogglerProps) {
  const { id, label, toggler } = props;

  const togglerValue = toggler.getValue(id);

  const circleClasses = `nav__toggler__circle ${
    togglerValue ? "nav__toggler__circle--right" : "nav__toggler__circle--left"
  }`;

  return (
    <section className="nav__toggler__container">
      <div className="nav__toggler__label">{label}</div>
      <div className="nav__toggler__box" onClick={() => toggler.toggle(id)}>
        <div className={circleClasses}></div>
      </div>
    </section>
  );
}
