import { useState, createContext } from "react";

type LocalStorageType = { [key: string]: any };

type contextType = {
  getLocalStorageValue: (key: string) => any | null;
  setLocalStorageValue: (key: string, value: any) => void;
};
export const LocalStorageContext = createContext({} as contextType);
export const LocalStorageProvider = LocalStorageContext.Provider;

export const useLocalStorage = () => {
  const [storage, setStorage] = useState<LocalStorageType>(() => {
    const storedData: LocalStorageType = {};

    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);

      if (key !== null) {
        const value = JSON.parse(window.localStorage.getItem(key) as string);
        storedData[key] = value;
      }
    }

    return storedData;
  });

  const setLocalStorageValue = (key: string, value: any) => {
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

  return {
    getLocalStorageValue,
    setLocalStorageValue,
  };
};
