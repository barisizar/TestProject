import React from "react";
import Main from "./Main";
import Landing from "./Landing";
import Fsd from "./fsd";
import General from "./general";
import Random from "./random";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "landing", element: <Landing /> },
    { path: "fsd", element: <Fsd /> },
    { path: "random", element: <Random /> },
    { path: "general", element: <General /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
