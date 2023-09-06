import { useContext } from "react";
import { languageContext } from "../shared/contexts";
import "./projects-page.scss";

export function ProjectsPageComponent() {
  const { primary_title, secondary_title } =
    useContext(languageContext)?.projects_page || {};

  return (
    <section className="projects-page-component">
      <h1>{primary_title}</h1>
      <h3>{secondary_title}</h3>
    </section>
  );
}
