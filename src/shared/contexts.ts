import { createContext } from "react";
import { useToggler } from "../components/nav/nav-settings/nav-toggler/hook";
import { languageContextType } from "../app";
import english from "../assets/languages/english.json";

export const togglerContext = createContext(
  {} as ReturnType<typeof useToggler>
);

export const languageContext = createContext<languageContextType>(english);
