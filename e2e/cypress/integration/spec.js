describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit(Cypress.config().baseUrl);
    expect(true).to.equal(true);
  });
});
