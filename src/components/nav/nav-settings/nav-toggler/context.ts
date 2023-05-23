import { createContext } from "react";
import { NavTogglerProps } from "./nav-toggler-component";

export interface togglerContextItem extends Omit<NavTogglerProps, "label"> {
  value: boolean;
}

type togglerContextArray = togglerContextItem[];

const togglerContext = createContext<togglerContextArray>([]);

const TogglerProvider = togglerContext.Provider;

export { togglerContext, TogglerProvider };
