import { useContext } from "react";
import { languageContext } from "../shared/contexts";
import "./home-page.scss";

export function HomePageComponent() {
  const { primary_title, secondary_title } =
    useContext(languageContext).home_page;
  return (
    <section className="home-page-component">
      <h1>{primary_title}</h1>
      <h3>{secondary_title}</h3>
    </section>
  );
}
