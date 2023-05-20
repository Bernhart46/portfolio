import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <>
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
