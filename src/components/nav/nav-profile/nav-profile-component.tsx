import { useContext } from "react";
import "./nav-profile-component.scss";
import { languageContext } from "../../../shared/contexts";

export function NavProfileComponent() {
  const { profile } = useContext(languageContext)?.nav || {};

  return (
    <section className="nav__profile__component">
      <div className="nav__profile-picture__container">
        <div className="nav__profile-picture"></div>
      </div>
      <div className="nav__profile-name__container">
        <h1 className="nav__profile-name">{profile?.name}</h1>
      </div>
    </section>
  );
}
