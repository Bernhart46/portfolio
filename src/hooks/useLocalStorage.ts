import { useState } from "react";

type LocalStorageType<T> = { [key: string]: T };

export const useLocalStorage = <T>() => {
  const [storage, setStorage] = useState<LocalStorageType<T>>(() => {
    const storedData: LocalStorageType<T> = {};

    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);

      if (key !== null) {
        const value = JSON.parse(window.localStorage.getItem(key) as string);
        storedData[key] = value;
      }
    }

    return storedData;
  });

  const setLocalStorageValue = (key: string, value: T) => {
    if (!key) return;

    localStorage.setItem(key, JSON.stringify(value));
    setStorage((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const getLocalStorageValue = (key: string) => {
    if (storage[key]) {
      return storage[key];
    } else {
      return null;
    }
  };

  return { getLocalStorageValue, setLocalStorageValue };
};
