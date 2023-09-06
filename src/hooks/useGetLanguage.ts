import english from "../assets/languages/english.json";
import hungarian from "../assets/languages/hungarian.json";
import { TogglerType } from "../components/nav/nav-types";

export type languageContextType = typeof english | null;
type useGetLanguageProps = {
  setValue: (togglerId: string, newValue: boolean) => void;
  toggle: (togglerId: string) => void;
  togglers: TogglerType;
};

export function useGetLanguage(togglerObject: useGetLanguageProps) {
  //checks the languageData in the togglerOjbect (undefined, true, false)
  const isEnglish = togglerObject.togglers["language_isEnglish"];
  const language =
    isEnglish === undefined ? null : isEnglish ? english : hungarian;
  return language;
}
