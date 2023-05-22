import { useState } from "react";
import "./index.scss";
import { ClosedNavComponent, OpenedNavComponent } from "./other-navs";

export default function NavComponent() {
  const [isOpenedOnMobile, setIsOpenedOnMobile] = useState(false);

  return (
    <>
      <OpenedNavComponent
        isOn={isOpenedOnMobile}
        setIsOn={setIsOpenedOnMobile}
      />
      <ClosedNavComponent
        isOn={isOpenedOnMobile}
        setIsOn={setIsOpenedOnMobile}
      />
    </>
  );
}
