import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import NavComponent from "./components/nav/nav-component";
import "./app.scss";
import { togglerContext, languageContext } from "./shared/contexts";
import { useHandleSavingTogglers } from "./hooks/useHandleSavingTogglers";

import english from "./assets/languages/english.json";
import hungarian from "./assets/languages/hungarian.json";

export type languageContextType = typeof english;

//This fixes the issues on Mobile, when we are rotating the phone on the side.
function setRootHeight() {
  const rootElement = document.querySelector("#root") as HTMLDivElement;
  rootElement.style.height = `${window.innerHeight}px`;
}

export default function App() {
  const togglerObject = useHandleSavingTogglers();
  const isEnglish = togglerObject.togglers["language_isEnglish"];
  const language = isEnglish ? english : hungarian;
  document.title = language.nav.profile.name;

  useEffect(() => {
    setRootHeight();

    window.addEventListener("resize", setRootHeight);

    return () => window.removeEventListener("resize", setRootHeight);
  }, []);

  return (
    <togglerContext.Provider value={togglerObject}>
      <languageContext.Provider value={language}>
        <NavComponent />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/projects" element={<h1>Projects</h1>} />
          <Route path="/techs" element={<h1>Techs</h1>} />
          <Route path="/contacts" element={<h1>Contacts</h1>} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </languageContext.Provider>
    </togglerContext.Provider>
  );
}
