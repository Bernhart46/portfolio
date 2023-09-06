import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./loading-screen-component.scss";

export function LoadingScreenComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return createPortal(
    isLoading && (
      <section className="loading-screen-component">LOADING</section>
    ),
    document.getElementById("loading-screen") as HTMLElement
  );
}
