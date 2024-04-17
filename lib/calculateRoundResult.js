/**
 * It calculates the winner of the round if the result is not tie
 *
 * @param {{playerOneChoice: string, playerTwoChoice: string}}  playersChoices
 * @return {{playerOneWin: boolean, playerTwoWin: boolean, tie: boolean}} roundResult
 */
export function calculateRoundResult({ playerOneChoice, playerTwoChoice }) {
  const result = {
    playerOneWin: false,
    playerTwoWin: false,
    tie: false,
  };

  switch (playerOneChoice + playerTwoChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      return {
        ...result,
        playerOneWin: true,
      };
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      return {
        ...result,
        playerTwoWin: true,
      };
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      return {
        ...result,
        tie: true,
      };
    default:
      return result;
  }
}
