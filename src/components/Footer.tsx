import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : isAuthenticated ? (
        <>
          <NavLink to="/admin">Admin</NavLink>
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </>
  );
};

export default Footer;
