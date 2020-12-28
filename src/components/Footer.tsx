import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const StyledFooter = styled.div`
  height: 50px;
`;

const Footer = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  return (
    <StyledFooter>
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
    </StyledFooter>
  );
};

export default Footer;
