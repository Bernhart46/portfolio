import { useContext, useState } from "react";
import { togglerContext, togglerContextItem } from "./context";

export const useToggler = (id: togglerContextItem["id"]) => {
  const context = useContext(togglerContext);
  const [value, setValue] = useState(false);

  const getItem = () => {
    const item = context.find((item) => item.id === id);
    if (!item) return;

    setValue((prev) => {
      return !prev;
    });

    return item;
  };

  const toggle = () => {
    let item = getItem();
    if (!item) {
      createToggler();
      item = getItem();
      if (!item) return;
    }

    item.value = !value;
  };

  const createToggler = () => {
    context.push({ id, value: false });
  };

  return { value, toggle };
};
