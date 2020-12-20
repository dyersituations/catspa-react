import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { createGlobalStyle } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { initApolloClient } from "./graphql/apolloClient";
import Loader from "./Loader";
import Footer from "./Footer";
import { fetchSettings } from "./redux/settings/actions";
import { RootState } from "./redux/types";
import { Setting } from "./redux/settings/types";

const StyledGlobal = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
  }
`;

const App = () => {
  const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const settings: Setting[] | undefined = useSelector(
    (state: RootState) => state.settings.data
  );
  const loading = isLoading || !settings;

  useEffect(() => {
    const getToken = async () => {
      let token;
      if (isAuthenticated) {
        token = await getAccessTokenSilently();
      }
      initApolloClient(token);
    };
    getToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchSettings());
    }
  }, [isLoading, dispatch]);

  return (
    <>
      <StyledGlobal />
      {loading && <Loader />}
      {!loading && <Footer />}
    </>
  );
};

export default App;
