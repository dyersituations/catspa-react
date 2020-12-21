import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./redux/rootReducer";
import rootSaga from "./redux/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Auth0Provider
          domain={process.env.REACT_APP_AUTH_PROVIDER_DOMAIN || ""}
          clientId={process.env.REACT_APP_AUTH_PROVIDER_CLIENT_ID || ""}
          redirectUri={window.location.origin}
          audience={process.env.REACT_APP_AUTH_PROVIDER_AUDIENCE}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
