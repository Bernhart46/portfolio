import { useState } from "react";
import "./index.scss";
import { ClosedNavComponent, OpenedNavComponent } from "./other-navs";
import { useMobileDetect } from "../../hooks/useMobileDetect";

export default function NavComponent() {
  const [isOpenedOnMobile, setIsOpenedOnMobile] = useState(false);
  const isMobile = useMobileDetect();

  return (
    <>
      <OpenedNavComponent
        isOn={isMobile ? isOpenedOnMobile : true}
        setIsOn={setIsOpenedOnMobile}
      />
      {isMobile && (
        <ClosedNavComponent
          isOn={isOpenedOnMobile}
          setIsOn={setIsOpenedOnMobile}
        />
      )}
    </>
  );
}
