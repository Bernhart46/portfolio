import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HomePageComponent } from "../../pages/home-page";
import { ProjectsPageComponent } from "../../pages/projects-page";
import { TechsPageComponent } from "../../pages/techs-page";
import "./routes-component.scss";

import { SwitchTransition, CSSTransition } from "react-transition-group";

export function RoutesComponent() {
  let location = useLocation();
  const timeoutValue = 200;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              classNames="page"
              timeout={timeoutValue}
            >
              <Navigate to="/home" />
            </CSSTransition>
          </SwitchTransition>
        }
      />
      <Route
        path="/home"
        element={
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              classNames="page"
              timeout={timeoutValue}
            >
              <HomePageComponent />
            </CSSTransition>
          </SwitchTransition>
        }
      />
      <Route
        path="/projects"
        element={
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              classNames="page"
              timeout={timeoutValue}
            >
              <ProjectsPageComponent />
            </CSSTransition>
          </SwitchTransition>
        }
      />
      <Route
        path="/techs"
        element={
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              classNames="page"
              timeout={timeoutValue}
            >
              <TechsPageComponent />
            </CSSTransition>
          </SwitchTransition>
        }
      />
      <Route
        path="/contacts"
        element={
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              classNames="page"
              timeout={timeoutValue}
            >
              <h1>Contacts</h1>
            </CSSTransition>
          </SwitchTransition>
        }
      />
      <Route
        path="*"
        element={
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              classNames="page"
              timeout={timeoutValue}
            >
              <Navigate to="/" />
            </CSSTransition>
          </SwitchTransition>
        }
      />
    </Routes>
  );
}
