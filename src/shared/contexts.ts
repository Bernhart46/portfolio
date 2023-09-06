import { createContext } from "react";
import { useToggler } from "../hooks/useToggler";
import english from "../assets/languages/english.json";

export type languageContextType = typeof english | null;

export const togglerContext = createContext(
  {} as ReturnType<typeof useToggler>
);

export const languageContext = createContext<languageContextType>(english);
