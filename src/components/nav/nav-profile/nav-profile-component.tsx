import profilePicture from "../../../assets/profile.png";
import "./nav-profile-component.scss";

export function NavProfileComponent() {
  return (
    <div className="nav-profile-component">
      <div className="picture-container">
        <img
          className="nav-profile-picture"
          src={profilePicture}
          alt="Profile Picture"
        />
      </div>
      <div className="name-container">
        <h1 className="nav-profile-name">Hegyi Ferenc</h1>
      </div>
    </div>
  );
}
