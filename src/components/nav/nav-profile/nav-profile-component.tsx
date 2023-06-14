import { useState } from "react";
import profilePicture from "../../../assets/profile.png";
import "./nav-profile-component.scss";

export function NavProfileComponent() {
  const [isLoading, setIsLoading] = useState(true);

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="nav__profile__component">
      <div className="nav__profile-picture__container">
        <img
          className="nav__profile-picture"
          src={profilePicture}
          alt="Profile Picture"
          onLoad={handleOnLoad}
          style={{ opacity: isLoading ? "0" : "1" }}
        />
      </div>
      <div className="nav__profile-name__container">
        <h1 className="nav__profile-name">Hegyi Ferenc</h1>
      </div>
    </section>
  );
}
