import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import NavComponent from "./components/nav/nav-component";
import "./app.scss";
import { useToggler } from "./components/nav/nav-settings/nav-toggler/hook";
import { useState } from "react";
import { togglerContext } from "./shared/contexts";

//This fixes the issues on Mobile, when we are rotating the phone on the side.
function setRootHeight() {
  const rootElement = document.querySelector("#root") as HTMLDivElement;
  rootElement.style.height = `${window.innerHeight}px`;
}

export default function App() {
  const togglerObject = useToggler();
  const { setValue, togglers } = togglerObject;
  const [prevTogglers, setPrevTogglers] = useState(togglers);

  const changeTheme = (noThemeSaved?: true) => {
    if (noThemeSaved) {
      document.body.style.setProperty("--theme-mode", "light");
      return;
    }

    document.body.style.setProperty(
      "--theme-mode",
      togglers.theme_isDark ? "dark" : "light"
    );
  };

  useEffect(() => {
    setRootHeight();

    window.addEventListener("resize", setRootHeight);

    return () => window.removeEventListener("resize", setRootHeight);
  }, []);

  //Handles localStorage
  useEffect(() => {
    const setTheme = () => {
      const themeFromLocalStorage = localStorage.getItem("theme_isDark");
      const theme = themeFromLocalStorage && JSON.parse(themeFromLocalStorage);
      setValue("theme_isDark", theme);
    };

    setTheme();
  }, []);

  //Checks Toggler changes (theme, language)
  useEffect(() => {
    //If the theme changed
    if (togglers.theme_isDark !== undefined) {
      if (togglers.theme_isDark !== prevTogglers.theme_isDark) {
        changeTheme();
        localStorage.setItem(
          "theme_isDark",
          JSON.stringify(togglers.theme_isDark)
        );
      }
    } else {
      changeTheme(true);
    }

    //If the language changed
    if (togglers.language_isEnglish !== undefined) {
    }

    setPrevTogglers(togglers);
  }, [togglers]);

  return (
    <togglerContext.Provider value={togglerObject}>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/skills" element={<h1>Skills</h1>} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </togglerContext.Provider>
  );
}
