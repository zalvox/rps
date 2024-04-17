describe("first render", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should contain header section", () => {
    cy.get("header");
  });

  it("should contain a page title", () => {
    cy.get("h1")
      .should("have.id", "page-title")
      .should("have.text", "Rock Paper Scissors");
  });

  it("should contain a selection with and the default value is human vs computer", () => {
    cy.get("select")
      .should("exist")
      .should("have.id", "game-mode")
      .should("have.value", "human-computer");
  });

  it("should select the computer vs computer mode", () => {
    cy.get('[id="game-mode"]')
      .select("Computer vs Computer")
      .should("have.value", "computer-computer");
  });

  it("should containe a game section", () => {
    cy.get('[id="game"]');
  });

  it("should contain a score-board", () => {
    cy.get('[id="score-board"]').should("exist");
    cy.get('[id="player-one-choice"]')
      .should("contain.text", "Player One choice:")
      .should("contain.html", "<span></span>");

    cy.get('[id="score-board"]').should("exist");
    cy.get('[id="player-two-choice"]')
      .should("contain.text", "Player Two choice:")
      .should("contain.html", "<span></span>");

    cy.get('[id="score"]').should("contain.text", "Score:");
    cy.get('[id="player-one-score"]').should("contain.text", "0");
    cy.get('[id="player-two-score"]').should("contain.text", "0");
    cy.get('[id="round-result"')
      .should("contain.text", "Round Result:")
      .should("contain.html", "<span></span>");
  });

  it("should contain a choices section", () => {
    cy.get('[id="choices"]');

    cy.get('[id="rock"]').children("img").should("be.visible");
    cy.get('[id="paper"]').children("img").should("be.visible");
    cy.get('[id="scissors"]').children("img").should("be.visible");
  });

  it("should show a play button in computervs computer mode", () => {
    cy.get('[id="game-mode"]').select("Computer vs Computer");

    cy.get('[id="automatic-play"]').should("have.text", "PLAY");
  });
});
