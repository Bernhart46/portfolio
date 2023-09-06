import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import NavComponent from "./components/nav/nav-component";
import "./app.scss";
import { togglerContext, languageContext } from "./shared/contexts";
import { useHandleSavingTogglers } from "./hooks/useHandleSavingTogglers";

import english from "./assets/languages/english.json";
import hungarian from "./assets/languages/hungarian.json";
import { HomePageComponent } from "./pages/home-page";
import { ProjectsPageComponent } from "./pages/projects-page";

export type languageContextType = typeof english | null;

//This fixes the issues on Mobile, when we are rotating the phone on the side.
function setRootHeight() {
  const rootElement = document.querySelector("#root") as HTMLDivElement;
  rootElement.style.height = `${window.innerHeight}px`;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const togglerObject = useHandleSavingTogglers();
  //checks the languageData in the togglerOjbect (undefined, true, false)
  const isEnglish = togglerObject.togglers["language_isEnglish"];
  const language =
    isEnglish === undefined ? null : isEnglish ? english : hungarian;

  document.title = language?.nav.profile.name || "Portfolio";

  useEffect(() => {
    setRootHeight();
    window.addEventListener("resize", setRootHeight);

    const loadingTimeout = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener("resize", setRootHeight);
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <togglerContext.Provider value={togglerObject}>
      <languageContext.Provider value={language}>
        <NavComponent />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePageComponent />} />
          <Route path="/projects" element={<ProjectsPageComponent />} />
          <Route path="/techs" element={<h1>Techs</h1>} />
          <Route path="/contacts" element={<h1>Contacts</h1>} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        {createPortal(
          isLoading && (
            <div
              style={{
                position: "absolute",
                background: "blue",
                height: "100vh",
                width: "100vw",
                top: "0",
              }}
            >
              LOADING
            </div>
          ),
          document.getElementById("loading-screen") as HTMLElement
        )}
      </languageContext.Provider>
    </togglerContext.Provider>
  );
}
