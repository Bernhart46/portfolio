import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HomePageComponent } from "../../pages/home-page";
import { ProjectsPageComponent } from "../../pages/projects-page";
import { TechsPageComponent } from "../../pages/techs-page";
import "./routes-component.scss";

import { SwitchTransition, CSSTransition } from "react-transition-group";

export function RoutesComponent() {
  let location = useLocation();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              classNames="page"
              timeout={300}
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
              timeout={300}
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
              timeout={300}
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
              timeout={300}
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
              timeout={300}
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
              timeout={300}
            >
              <Navigate to="/" />
            </CSSTransition>
          </SwitchTransition>
        }
      />
    </Routes>
  );
}
