describe("User Role", () => {
  it("Displays loader initially", () => {
    cy.visit("/");
    cy.get("body").then(($body) => {
      assert.equal($body.find("#loader").length, 1);
    });
  });

  it("Loads settings initially", () => {
    cy.waitForSettings().then((operationName) => {
      assert.equal(operationName, "fetch_settings");
    });
  });
});
