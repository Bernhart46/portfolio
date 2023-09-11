import { useContext } from "react";
import { languageContext } from "../shared/contexts";
import "./projects-page.scss";

export function ProjectsPageComponent() {
  const { primary_title, secondary_title } =
    useContext(languageContext)?.projects_page || {};

  const projectsPageTitleElement = (
    <div className="projects-page-component">
      <div className="projects-page__title__background"></div>
      <div className="projects-page__title__container">
        <h1>{primary_title}</h1>
        <h3>{secondary_title}</h3>
      </div>
    </div>
  );

  return projectsPageTitleElement;
}
