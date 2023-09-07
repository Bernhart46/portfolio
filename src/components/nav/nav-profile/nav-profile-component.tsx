import { useContext, useState } from "react";
import profilePicture from "../../../assets/pictures/profile.png";
import "./nav-profile-component.scss";
import { languageContext } from "../../../shared/contexts";

export function NavProfileComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const { profile } = useContext(languageContext)?.nav || {};

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="nav__profile__component">
      <div className="nav__profile-picture__container">
        <img
          className="nav__profile-picture"
          src={profilePicture}
          alt={profile?.alt}
          onLoad={handleOnLoad}
          style={{ opacity: isLoading ? "0" : "1" }}
        />
      </div>
      <div className="nav__profile-name__container">
        <h1 className="nav__profile-name">{profile?.name}</h1>
      </div>
    </section>
  );
}
