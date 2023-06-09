import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import NavComponent from "./components/nav/nav-component";
import "./app.scss";

function setRootHeight() {
  const rootElement = document.querySelector("#root") as HTMLDivElement;
  rootElement.style.height = `${window.innerHeight}px`;
}

export default function App() {
  useEffect(() => {
    setRootHeight();

    window.addEventListener("resize", setRootHeight);

    return () => window.removeEventListener("resize", setRootHeight);
  }, []);

  return (
    <>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/skills" element={<h1>Skills</h1>} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}
