import * as auth0 from "auth0-js";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("waitForSettings", (token: string) => {
  Cypress.log({
    name: "waitForSettings",
  });
  cy.intercept({
    url: /^http:\/\/localhost:8080\/v1\/graphql/,
  }).as("getSettings");
  cy.visit(token ? `/login/${token}` : "/")
    .wait("@getSettings")
    .then((xhr) => {
      return xhr.request.body.operationName;
    });
});

Cypress.Commands.add("loginAsAdmin", () => {
  Cypress.log({
    name: "loginAsAdmin",
  });
  const webAuth = new auth0.WebAuth({
    domain: Cypress.env("auth0Domain"),
    clientID: Cypress.env("auth0ClientId"),
    responseType: "token id_token",
  });
  return new Promise((resolve, reject) => {
    webAuth.client.login(
      {
        realm: "Username-Password-Authentication",
        username: Cypress.env("auth0Username"),
        password: Cypress.env("auth0Password"),
        audience: "hasura",
        scope: "openid email profile",
      },
      (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          resolve(authResult.accessToken);
        } else {
          console.error("Problem logging into Auth0", err);
          reject(err);
        }
      }
    );
  });
});
