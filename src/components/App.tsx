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
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const isLoading: boolean = useSelector(
    (state: RootState) => state.global.isLoading
  );
  const settings: Setting[] = useSelector(
    (state: RootState) => state.settings.data
  );
  const routing = useRoutes(routes(isAuthenticated));

  useEffect(() => {
    initApolloClient();
    dispatch(fetchSettings());
  }, [dispatch]);

  useEffect(() => {
    const getToken = async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        initApolloClient(token);
      }
    };
    getToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <>
      <StyledGlobal settingsCss={createSettingsCss(settings)} />
      {!settings ? (
        <Loader />
      ) : (
        <>
          {isLoading && <Loader />}
          {routing}
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
