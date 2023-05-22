import { useState } from "react";
import "./nav-component.scss";
import { useMobileDetect } from "../../hooks/useMobileDetect";
import { ClosedNavComponent } from "./closed-nav-component";
import { OpenedNavComponent } from "./opened-nav-component";

export type NavProps = {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
};

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
