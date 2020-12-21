import React from "react";
import { Navigate } from "react-router";
import Admin from "./components/Admin";
import Main from "./components/Main";

const routes = (isAuthenticated: boolean) => [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/admin",
    element: isAuthenticated ? <Admin /> : <Navigate to="/" />,
  },
];

export default routes;
