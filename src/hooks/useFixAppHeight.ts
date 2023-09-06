import { useEffect } from "react";

//This fixes the issues on Mobile, when we are rotating the phone on the side.
function setRootHeight() {
  const rootElement = document.querySelector("#root") as HTMLDivElement;
  rootElement.style.height = `${window.innerHeight}px`;
}

export default function useFixAppHeight() {
  useEffect(() => {
    setRootHeight();
    window.addEventListener("resize", setRootHeight);

    return () => window.removeEventListener("resize", setRootHeight);
  }, []);
}
