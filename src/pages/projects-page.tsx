import { useContext, useState } from "react";
import { languageContext } from "../shared/contexts";
import "./projects-page.scss";
import "./pages.scss";
import { ProjectComponent } from "../components/project/project-component";
import ProjectDatas from "../assets/project-datas.json";

export function ProjectsPageComponent() {
  const { primary_title, secondary_title } =
    useContext(languageContext)?.projects_page || {};

  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const selectTag = (input: string) => {
    if (input === selectedTag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(input);
    }
  };

  const projectsPageTitleElement = (
    <div className="projects-page-component">
      <div className="page__title__background"></div>
      <div className="page__title__container">
        <h1 className="page__title__primary">{primary_title}</h1>
        <h3 className="page__title__secondary">{secondary_title}</h3>
      </div>
      <div className="projects-page__project-list">
        {ProjectDatas.map((project, index) => {
          if (selectedTag) {
            if (project.tags.includes(selectedTag)) {
              return (
                <ProjectComponent
                  key={index}
                  project={project}
                  selectFunction={selectTag}
                  selectedTag={selectedTag}
                />
              );
            }
          } else {
            return (
              <ProjectComponent
                key={index}
                project={project}
                selectFunction={selectTag}
              />
            );
          }
        })}
      </div>
    </div>
  );

  return projectsPageTitleElement;
}
