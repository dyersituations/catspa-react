import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import {
  createGlobalStyle,
  FlattenSimpleInterpolation,
} from "styled-components";
import { initApolloClient } from "../graphql/apolloClient";
import Loader from "./Loader";
import Footer from "./Footer";
import { fetchSettings } from "../redux/settings/actions";
import { RootState } from "../redux/types";
import { Setting } from "../redux/settings/types";
import routes from "../routes";
import { createSettingsCss } from "../util";

interface SettingsGlobalProps {
  settingsCss: FlattenSimpleInterpolation | undefined;
}

const StyledGlobal = createGlobalStyle<SettingsGlobalProps>`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    ${(props) => props.settingsCss}
  }
`;

const App = () => {
  const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const settings: Setting[] | undefined = useSelector(
    (state: RootState) => state.settings.data
  );
  const loading = isLoading || !settings;
  const routing = useRoutes(routes(isAuthenticated));

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
      <StyledGlobal settingsCss={createSettingsCss(settings)} />
      {loading && <Loader />}
      {!loading && (
        <>
          {routing}
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
