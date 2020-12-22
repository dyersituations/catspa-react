import {
  ApolloClient,
  DocumentNode,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  OperationVariables,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const getClientLink = (token: string | undefined) => {
  const headers: { Authorization?: string } = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI,
    headers,
  });
};

export const initApolloClient = (token: string | undefined) => {
  apolloClient = new ApolloClient({
    link: getClientLink(token),
    cache: new InMemoryCache(),
  });
};

export const runQuery = (
  query: DocumentNode,
  variables: OperationVariables
) => {
  return apolloClient?.query({
    query,
    variables,
  });
};
