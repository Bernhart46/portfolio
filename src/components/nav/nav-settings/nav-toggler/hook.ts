import { useState } from "react";
import { NavTogglerProps } from "./nav-toggler-component";

export type TogglerType = {
  [id: NavTogglerProps["id"]]: boolean;
};

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
