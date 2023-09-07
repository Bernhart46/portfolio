import { useContext } from "react";
import { languageContext } from "../shared/contexts";
import "./home-page.scss";

export function HomePageComponent() {
  const { primary_title, secondary_title, about_me } =
    useContext(languageContext)?.home_page || {};

  const homePageTitleElement = (
    <>
      <div className="home-page__title__background"></div>
      <div className="home-page__title__container">
        <h1>{primary_title}</h1>
        <h3>{secondary_title}</h3>
      </div>
    </>
  );

  const homePageAboutmeElement = (
    <div className="home-page__aboutme__container">
      <div className="home-page__aboutme__title">
        <span>{about_me?.title}</span>
      </div>
      <div className="home-page__aboutme__text">
        {about_me?.texts.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    </div>
  );

  return (
    <section className="home-page__component">
      {homePageTitleElement}
      {homePageAboutmeElement}
    </section>
  );
}
