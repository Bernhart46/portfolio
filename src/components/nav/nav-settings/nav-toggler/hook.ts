import { useState, useContext } from "react";
import { LocalStorageContext } from "../../../../hooks/useLocalStorage";
import { NavTogglerProps } from "./nav-toggler-component";

export type TogglerType = {
  [id: NavTogglerProps["id"]]: boolean;
};

export const useToggler = () => {
  const { getLocalStorageValue, setLocalStorageValue } =
    useContext(LocalStorageContext);
  const [togglers, setToggler] = useState<TogglerType>(() => {
    const object = getLocalStorageValue("togglers") as TogglerType;

    if (!object) return {} as TogglerType;
    return object;
  });

  const getValue = (togglerId: NavTogglerProps["id"]) => {
    return togglers[togglerId];
  };

  const toggle = (togglerId: NavTogglerProps["id"]) => {
    setToggler((prev) => {
      const updatedTogglers = {
        ...prev,
        [togglerId]: prev[togglerId] ? false : true,
      };
      setLocalStorageValue("togglers", updatedTogglers);
      return updatedTogglers;
    });
  };

  return { getValue, toggle };
};
