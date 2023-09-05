import { useState } from "react";
import "./nav-component.scss";
import { MinimizedNavComponent } from "./minimized-nav-component/minimized-nav-component";
import { MaximizedNavComponent } from "./maximized-nav-component/maximized-nav-component";

export type NavProps = {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
};

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
