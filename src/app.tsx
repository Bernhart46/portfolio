import NavComponent from "./components/nav/nav-component";
import "./app.scss";
import { togglerContext, languageContext } from "./shared/contexts";
import { LoadingScreenComponent } from "./components/loading-screen/loading-screen-component";
import { RoutesComponent } from "./components/routes/routes-component";
import {
  useFixAppHeight,
  useGetLanguage,
  useHandleSavingTogglers,
} from "./hooks";

export default function App() {
  useFixAppHeight();

  const togglerObject = useHandleSavingTogglers();
  const language = useGetLanguage(togglerObject);

  document.title = language?.nav.profile.name || "Loading...";

  return (
    <togglerContext.Provider value={togglerObject}>
      <languageContext.Provider value={language}>
        <NavComponent />
        <RoutesComponent />
        <LoadingScreenComponent />
      </languageContext.Provider>
    </togglerContext.Provider>
  );
}
