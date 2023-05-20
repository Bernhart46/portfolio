import { createRoot } from "react-dom/client";

const rootElement = document.querySelector("#root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(<h1>Hello World</h1>);
