describe("play game in human vs computer mode", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should play a match", () => {
    cy.get('[id="rock"]').click();
    cy.get('[id="player-one-choice"]')
      .children("span")
      .should("contain.text", "rock");
    cy.get('[id="player-two-choice"]')
      .children("span")
      .invoke("text")
      .then((value) =>
        expect(value).to.be.oneOf(["rock", "paper", "scissors"]),
      );
    cy.get('[id="player-one-score"]')
      .invoke("text")
      .then((value) => expect(value).to.be.oneOf(["0", "1", "2", "3"]));
    cy.get('[id="player-two-score"]')
      .invoke("text")
      .then((value) => expect(value).to.be.oneOf(["0", "1", "2", "3"]));
    cy.get('[id="round-result"]')
      .children("span")
      .invoke("text")
      .then((value) =>
        expect(value).to.be.oneOf([
          "IT'S A TIE",
          "PLAYER ONE WIN",
          "PLAYER TWO WIN",
        ]),
      );

    cy.get('[id="paper"]').click();
    cy.get('[id="player-one-choice"]')
      .children("span")
      .should("contain.text", "paper");
    cy.get('[id="player-two-choice"]')
      .children("span")
      .invoke("text")
      .then((value) =>
        expect(value).to.be.oneOf(["rock", "paper", "scissors"]),
      );
    cy.get('[id="player-one-score"]')
      .invoke("text")
      .then((value) => expect(value).to.be.oneOf(["0", "1", "2", "3"]));
    cy.get('[id="player-two-score"]')
      .invoke("text")
      .then((value) => expect(value).to.be.oneOf(["0", "1", "2", "3"]));
    cy.get('[id="round-result"]')
      .children("span")
      .invoke("text")
      .then((value) =>
        expect(value).to.be.oneOf([
          "IT'S A TIE",
          "PLAYER ONE WIN",
          "PLAYER TWO WIN",
        ]),
      );

    cy.get('[id="scissors"]').click();
    cy.get('[id="player-one-choice"]')
      .children("span")
      .should("contain.text", "scissors");
    cy.get('[id="player-two-choice"]')
      .children("span")
      .invoke("text")
      .then((value) =>
        expect(value).to.be.oneOf(["rock", "paper", "scissors"]),
      );
    cy.get('[id="player-one-score"]')
      .invoke("text")
      .then((value) => expect(value).to.be.oneOf(["0", "1", "2", "3"]));
    cy.get('[id="player-two-score"]')
      .invoke("text")
      .then((value) => expect(value).to.be.oneOf(["0", "1", "2", "3"]));
    cy.get('[id="round-result"]')
      .children("span")
      .invoke("text")
      .then((value) =>
        expect(value).to.be.oneOf([
          "IT'S A TIE",
          "PLAYER ONE WIN",
          "PLAYER TWO WIN",
        ]),
      );

    cy.get('[id="final-result"]')
      .children("button")
      .should("contain.text", "RETRY")
      .click();

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

    cy.get('[id="rock"]').children("img").should("be.visible");
    cy.get('[id="paper"').children("img").should("be.visible");
    cy.get('[id="scissors"').children("img").should("be.visible");
  });
});
