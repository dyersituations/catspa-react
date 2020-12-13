import React, { FunctionComponent } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./Loader";
import Footer from "./Footer";
import "./App.css";

interface AppProps {
  accessToken: string;
}

const createApolloClient = (isLoading: boolean, accessToken: string) => {
  const headers: { Authorization?: string } = {};
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  const getClientLink = () => {
    return new HttpLink({
      uri: "http://localhost:8080/v1/graphql",
      headers,
    });
  };

  return new ApolloClient({
    link: accessToken || !isLoading ? getClientLink() : undefined,
    cache: new InMemoryCache(),
  });
};

const App: FunctionComponent<AppProps> = ({ accessToken }) => {
  const { isLoading } = useAuth0();
  const client = createApolloClient(isLoading, accessToken);

  return (
    <ApolloProvider client={client}>
      {isLoading && <Loader />}
      {!isLoading && <Footer />}
    </ApolloProvider>
  );
};

export default App;
