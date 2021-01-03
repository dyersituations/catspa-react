declare namespace Cypress {
  interface Chainable {
    waitForSettings(token?: string): Chainable<string>;
    loginAsAdmin(): Chainable<string>;
  }
}
