import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./loading-screen-component.scss";

export function LoadingScreenComponent() {
  const [isLoading, setIsLoading] = useState(true);

  const LOADING_TIME_SECONDS = 3;

  useEffect(() => {
    const loadingTimeout = setTimeout(
      () => setIsLoading(false),
      LOADING_TIME_SECONDS * 1000
    );

    return () => clearTimeout(loadingTimeout);
  }, []);

  return createPortal(
    isLoading && (
      <section className="loading-screen-component">
        <div className="loading-ring">
          <div className="outer-ring">
            <div className="inner-ring"></div>
          </div>
          <span>Loading...</span>
        </div>
      </section>
    ),
    document.getElementById("loading-screen") as HTMLElement
  );
}
