import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import App from "../App";

const AppWithAuth = () => {
  const [token, setToken] = useState("");
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getToken = async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        setToken(token);
      }
    };
    getToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  return <App accessToken={token} />;
};

export default AppWithAuth;
