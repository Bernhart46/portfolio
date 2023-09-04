import { createContext } from "react";
import { useToggler } from "../components/nav/nav-settings/nav-toggler/hook";

export const togglerContext = createContext(
  {} as ReturnType<typeof useToggler>
);
