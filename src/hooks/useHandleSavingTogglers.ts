import { useEffect } from "react";
import { useToggler } from "../components/nav/nav-settings/nav-toggler/hook";

export default function useHandleSavingTogglers() {
  const togglerObject = useToggler();
  const { setValue, togglers } = togglerObject;

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

  //Loads the toggler values in.
  useEffect(() => {
    //Setting the Theme
    const themeFromLocalStorage = localStorage.getItem("theme_isDark");
    const theme = themeFromLocalStorage && JSON.parse(themeFromLocalStorage);
    setValue("theme_isDark", theme);

    //Setting the Language
    const languageFromLocalStorage = localStorage.getItem("language_isEnglish");
    const language =
      languageFromLocalStorage && JSON.parse(languageFromLocalStorage);
    setValue("language_isEnglish", language);
  }, []);

  //Checks Toggler changes (theme, language)
  useEffect(() => {
    if (togglers.theme_isDark !== undefined) {
      changeTheme();
      localStorage.setItem(
        "theme_isDark",
        JSON.stringify(togglers.theme_isDark)
      );
    } else {
      changeTheme(true);
    }
  }, [togglers.theme_isDark]);

  useEffect(() => {
    if (togglers.language_isEnglish !== undefined) {
      localStorage.setItem(
        "language_isEnglish",
        JSON.stringify(togglers.language_isEnglish)
      );
    }
  }, [togglers.language_isEnglish]);

  return togglerObject;
}
