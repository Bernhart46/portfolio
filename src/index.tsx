import { createRoot } from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { TogglerProvider } from "./components/nav/nav-settings/nav-toggler/context";

const rootElement = document.querySelector("#root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <TogglerProvider value={[]}>
      <App />
    </TogglerProvider>
  </BrowserRouter>
);
