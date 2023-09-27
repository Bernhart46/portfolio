import { useContext } from "react";
import { languageContext } from "../shared/contexts";
import "./projects-page.scss";
import "./pages.scss";
import { ProjectComponent } from "../components/project/project-component";
import ProjectDatas from "../assets/project-datas.json";

export function ProjectsPageComponent() {
  const { primary_title, secondary_title } =
    useContext(languageContext)?.projects_page || {};

  console.log(typeof ProjectDatas);
  const projectsPageTitleElement = (
    <div className="projects-page-component">
      <div className="page__title__background"></div>
      <div className="page__title__container">
        <h1 className="page__title__primary">{primary_title}</h1>
        <h3 className="page__title__secondary">{secondary_title}</h3>
      </div>
      <div className="projects-page__project-list">
        {ProjectDatas.map((project, index) => {
          return <ProjectComponent key={index} {...project} />;
        })}
      </div>
    </div>
  );

  return projectsPageTitleElement;
}
