import { useContext } from "react";
import { languageContext } from "../shared/contexts";
import "./home-page.scss";
import "./pages.scss";

export function HomePageComponent() {
  const { primary_title, secondary_title, about_me, qa } =
    useContext(languageContext)?.home_page || {};

  const homePageTitleElement = (
    <>
      <div className="page__title__background"></div>
      <div className="page__title__container">
        <h1 className="page__title__primary">{primary_title}</h1>
        <h3 className="page__title__secondary">{secondary_title}</h3>
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

  const homePageQAElement = (
    <div className="home-page__qa__container">
      <div className="home-page__aboutme__title">{qa?.title}</div>
    </div>
  );

  return (
    <section className="home-page__component">
      {homePageTitleElement}
      {homePageAboutmeElement}
      {homePageQAElement}
    </section>
  );
}
