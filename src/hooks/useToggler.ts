import { useState } from "react";
import { NavTogglerProps, TogglerType } from "../components/nav/nav-types";

export const useToggler = () => {
  const [togglers, setToggler] = useState<TogglerType>({} as TogglerType);

  const setValue = (togglerId: NavTogglerProps["id"], newValue: boolean) => {
    setToggler((prev) => {
      return {
        ...prev,
        [togglerId]: newValue,
      };
    });
  };

  const toggle = (togglerId: NavTogglerProps["id"]) => {
    setToggler((prev) => {
      return {
        ...prev,
        [togglerId]: prev[togglerId] ? false : true,
      };
    });
  };

  return { setValue, toggle, togglers };
};
