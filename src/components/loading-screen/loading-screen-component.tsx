import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./loading-screen-component.scss";

export function LoadingScreenComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const loadingRingRef = useRef(null);
  const [isBigForShowText, setIsBigForShowText] = useState(false);

  const LOADING_TIME_SECONDS = 3;

  useEffect(() => {
    const loadingTimeout = setTimeout(
      () => setIsLoading(false),
      LOADING_TIME_SECONDS * 1000
    );

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    const resizeWhileLoading = () => {
      if (loadingRingRef.current) {
        const loadingRingDiv = loadingRingRef.current as HTMLDivElement;

        const isBig = loadingRingDiv.offsetWidth > 150;

        if (isBig !== isBigForShowText) {
          setIsBigForShowText(isBig);
        }
      }
    };

    resizeWhileLoading();

    window.addEventListener("resize", resizeWhileLoading);

    return () => {
      window.removeEventListener("resize", resizeWhileLoading);
    };
  }, [isBigForShowText]);

  return createPortal(
    isLoading && (
      <section className="loading-screen-component">
        <div className="loading-ring-container" ref={loadingRingRef}>
          <div className="outer-ring">
            <div className="inner-ring"></div>
          </div>
          {isBigForShowText && <span>Loading...</span>}
        </div>
      </section>
    ),
    document.getElementById("loading-screen") as HTMLElement
  );
}
