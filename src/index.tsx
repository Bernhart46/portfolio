import { createRoot } from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.querySelector("#root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
