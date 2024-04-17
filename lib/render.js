import { createChoicesDiv } from "../components/choice.js";
import { createFinalResultDiv } from "../components/finalResult.js";
import { createPlayButton } from "../components/playButton.js";
import { dispatch, changeGameModeAction } from "./../state/store.js";
import { COMPUTER_VC_COMPUTER, HUMAN_VS_COMPUTER } from "./constants.js";

// Caching reference to DOM elements
const player1ScoreSpan = document.getElementById("player-one-score");
const player2ScoreSpan = document.getElementById("player-two-score");
const roundResult = document.querySelector("#round-result > span");
const playerOneChoiceSpan = document.querySelector("#player-one-choice > span");
const playerTwoChoiceSpan = document.querySelector("#player-two-choice > span");
const gameSection = document.getElementById("game");

const gameModeSelect = document.getElementById("game-mode");
gameModeSelect.addEventListener("change", (e) => {
  dispatch(changeGameModeAction(e.target.value));
});

export default function render(state) {
  const choicesDiv = document.getElementById("choices");
  const finalResultDiv = document.getElementById("final-result");

  console.log(state);

  if (state.gameMode === COMPUTER_VC_COMPUTER) {
    // Check if the player was in "human vs computer" mode previously
    if (choicesDiv) {
      choicesDiv.remove();
    }
    if (finalResultDiv) {
      finalResultDiv.remove();
    }
    if (!document.getElementById("automatic-play")) {
      gameSection.appendChild(createPlayButton());
    }
  }

  if (state.gameMode === HUMAN_VS_COMPUTER) {
    // Check if the player was in "computer vs computer" mode previously
    if (!choicesDiv) {
      const playButton = document.getElementById("automatic-play");
      if (playButton) {
        playButton.remove();
      }
      if (finalResultDiv) {
        finalResultDiv.remove();
      }

      gameSection.appendChild(createChoicesDiv());
    }
  }

  if (state.round === state.maxRound) {
    const playButton = document.getElementById("automatic-play");

    if (choicesDiv) {
      choicesDiv.remove();
    }
    if (playButton) {
      playButton.remove();
    }

    gameSection.appendChild(createFinalResultDiv(state));
  }

  player1ScoreSpan.innerText = state.playerOneScore;
  player2ScoreSpan.innerText = state.playerTwoScore;
  playerOneChoiceSpan.innerText = state.playerOneChoice;
  playerTwoChoiceSpan.innerText = state.playerTwoChoice;
  roundResult.innerText = state.roundResult;
}
