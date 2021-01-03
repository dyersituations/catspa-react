import React from "react";
import { Navigate } from "react-router";
import Admin from "./components/Admin";
import LoginNavigate from "./components/LoginNavigate";
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
  {
    path: "/login/:token",
    element: <LoginNavigate />,
  },
];

export default routes;
