export type menuButtons = {
  title: string | undefined;
  to: string;
};

export type NavProps = {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
};

export type NavTogglerProps = {
  id: string;
  label: string | undefined;
};

export type TogglerType = {
  [id: NavTogglerProps["id"]]: boolean;
};
