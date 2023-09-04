import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import NavComponent from "./components/nav/nav-component";
import "./app.scss";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { LocalStorageProvider } from "./hooks/useLocalStorage";

//This fixes the issues on Mobile, when we are rotating the phone on the side.
function setRootHeight() {
  const rootElement = document.querySelector("#root") as HTMLDivElement;
  rootElement.style.height = `${window.innerHeight}px`;
}

export default function App() {
  const { setLocalStorageValue, getLocalStorageValue } = useLocalStorage();
  const togglers = getLocalStorageValue("togglers");

  if (togglers) {
    if (togglers.theme !== undefined) {
      document.body.style.setProperty(
        "--theme-mode",
        togglers.theme ? "dark" : "light"
      );
    }
  } else {
    document.body.style.setProperty("--theme-mode", "light");
  }

  useEffect(() => {
    setRootHeight();

    window.addEventListener("resize", setRootHeight);

    return () => window.removeEventListener("resize", setRootHeight);
  }, []);

  return (
    <LocalStorageProvider
      value={{
        setLocalStorageValue,
        getLocalStorageValue,
      }}
    >
      <NavComponent />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/skills" element={<h1>Skills</h1>} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </LocalStorageProvider>
  );
}
