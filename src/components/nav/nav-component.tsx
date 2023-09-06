import { useState } from "react";
import "./nav-component.scss";
import { MinimizedNavComponent } from "./minimized-nav/minimized-nav-component";
import { MaximizedNavComponent } from "./maximized-nav/maximized-nav-component";

export default function NavComponent() {
  const [isOpenedOnMobile, setIsOpenedOnMobile] = useState(false);

  return (
    <>
      <MaximizedNavComponent
        isOn={isOpenedOnMobile}
        setIsOn={setIsOpenedOnMobile}
      />
      <MinimizedNavComponent
        isOn={isOpenedOnMobile}
        setIsOn={setIsOpenedOnMobile}
      />
    </>
  );
}
