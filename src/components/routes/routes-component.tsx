import { Routes, Route, Navigate } from "react-router-dom";
import { HomePageComponent } from "../../pages/home-page";
import { ProjectsPageComponent } from "../../pages/projects-page";
import { TechsPageComponent } from "../../pages/techs-page";

export function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePageComponent />} />
      <Route path="/projects" element={<ProjectsPageComponent />} />
      <Route path="/techs" element={<TechsPageComponent />} />
      <Route path="/contacts" element={<h1>Contacts</h1>} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
