import {
  COMPUTER_VC_COMPUTER,
  HUMAN_VS_COMPUTER,
  POSSIBLE_CHOICES,
} from "./constants.js";
import { getComputerChoice } from "./getComputerChoice.js";

/**
 * Calculate the computerChoice based on the gameMode
 *
 * @param {string} gameMode
 * @param {string | undefined} playerOneChoice
 * @return {{playerOneChoice: string | null, playerTwoChoice: string | null}} playersChoices
 */
export function play(gameMode, playerOneChoice) {
  if (gameMode === HUMAN_VS_COMPUTER) {
    return {
      playerOneChoice,
      playerTwoChoice: getComputerChoice(POSSIBLE_CHOICES),
    };
  }
  if (gameMode === COMPUTER_VC_COMPUTER) {
    return {
      playerOneChoice: getComputerChoice(POSSIBLE_CHOICES),
      playerTwoChoice: getComputerChoice(POSSIBLE_CHOICES),
    };
  }
  return {
    playerOneChoice: null,
    playerTwoChoice: null,
  };
}
