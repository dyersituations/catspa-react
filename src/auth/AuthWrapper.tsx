import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "../App";

const AuthWrapper = () => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_PROVIDER_DOMAIN || ""}
      clientId={process.env.REACT_APP_AUTH_PROVIDER_CLIENT_ID || ""}
      redirectUri={window.location.origin}
      audience={process.env.REACT_APP_AUTH_PROVIDER_AUDIENCE}
    >
      <App />
    </Auth0Provider>
  );
};

export default AuthWrapper;
