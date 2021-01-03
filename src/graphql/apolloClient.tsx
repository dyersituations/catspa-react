import {
  ApolloClient,
  DocumentNode,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  OperationVariables,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

let storedToken: string | undefined;

const getClientLink = (token: string | undefined) => {
  const headers: { Authorization?: string } = {};
  if (token) {
    storedToken = token;
    headers.Authorization = `Bearer ${token}`;
  }
  return new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI,
    headers,
  });
};

export const initApolloClient = (token?: string) => {
  apolloClient = new ApolloClient({
    link: getClientLink(token),
    cache: new InMemoryCache(),
  });
};

export const isApolloClientAuthenticated = () => !!storedToken;

export const runQuery = (
  query: DocumentNode,
  variables: OperationVariables
) => {
  return apolloClient?.query({
    query,
    variables,
  });
};

export const runMutation = (
  mutation: DocumentNode,
  variables: OperationVariables
) => {
  return apolloClient?.mutate({
    mutation,
    variables,
  });
};
