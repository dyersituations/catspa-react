import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { initApolloClient } from "../graphql/apolloClient";

const LoginNavigate = () => {
  const { token } = useParams();
  if (token) {
    initApolloClient(token);
  }

  return <Navigate to="/" />;
};

export default LoginNavigate;
