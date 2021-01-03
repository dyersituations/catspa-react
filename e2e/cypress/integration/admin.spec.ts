describe("Admin Role", () => {
  it("Displays Admin form when clicking Admin link", () => {
    cy.loginAsAdmin().then((token) => {
      cy.waitForSettings(token)
        .get("#adminLink")
        .click()
        .get("#adminForm")
        .then(($adminForm) => {
          assert.equal($adminForm.length, 1);
        });
    });
  });
});
