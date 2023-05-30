import { useEffect, useState } from "react";

export const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const setMobileStatus = () => {
      const condition = window.innerWidth < 768;
      setIsMobile(condition);
    };
    window.addEventListener("load", setMobileStatus);
    window.addEventListener("resize", setMobileStatus);

    return () => window.removeEventListener("resize", setMobileStatus);
  }, []);

  return isMobile;
};
