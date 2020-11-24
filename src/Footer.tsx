import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./auth/LogoutButton";
import LoginButton from "./auth/LoginButton";

const Footer = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (isAuthenticated ? <LogoutButton /> : <LoginButton />)}
    </div>
  );
};

export default Footer;
