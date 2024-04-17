/**
 * Utility function used to return a pseudo-random choice from the computer
 *
 * @param {Array} possibleChoices
 * @return String
 */
export const getComputerChoice = (possibleChoices) =>
  possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
