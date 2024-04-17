import { describe, it, expect } from "vitest";
import { COMPUTER_VC_COMPUTER, HUMAN_VS_COMPUTER } from "../lib/constants";
import {
  reducer,
  resetGameAction,
  playRoundAction,
  changeGameModeAction,
  RESET_GAME_ACTION,
  CHANGE_GAME_MODE_ACTION,
  PLAY_ROUND_ACTION,
} from "./store";

describe("resetGameAction test", () => {
  it("should return an action object", () => {
    expect(resetGameAction()).toMatchObject({
      type: RESET_GAME_ACTION,
    });
  });
});

describe("playRoundAction test", () => {
  it("should return a match action", () => {
    const payload = {
      playerOne: "player1",
      playerTwo: "playerTwo",
    };
    expect(playRoundAction(payload)).toMatchObject({
      type: PLAY_ROUND_ACTION,
      payload,
    });
  });
});

describe("changeGameModeAction test", () => {
  it("should return a changeGameMode action", () => {
    const payload = "newMode";
    expect(changeGameModeAction(payload)).toMatchObject({
      type: CHANGE_GAME_MODE_ACTION,
      payload,
    });
  });
});

describe("reducer test", () => {
  it("should apply the playRoundAction", () => {
    const initialState = {
      gameMode: HUMAN_VS_COMPUTER,
      playerOneScore: 0,
      playerTwoScore: 0,
      playerOneChoice: null,
      playerTwoChoice: null,
      round: 0,
      maxRound: 3,
      roundResult: null,
    };

    const newState = reducer(
      initialState,
      playRoundAction({
        playerOneChoice: "rock",
        playerTwoChoice: "paper",
      }),
    );

    expect(newState).toMatchObject({
      ...initialState,
      playerOneChoice: "rock",
      playerTwoChoice: "paper",
      round: 1,
      roundResult: "PLAYER TWO WIN",
      playerTwoScore: 1,
    });
  });

  it("should apply the resetGameAction", () => {
    const initialState = {
      gameMode: HUMAN_VS_COMPUTER,
      playerOneScore: 0,
      playerTwoScore: 0,
      playerOneChoice: null,
      playerTwoChoice: null,
      round: 0,
      maxRound: 3,
      roundResult: null,
    };

    const newState = reducer(
      initialState,
      playRoundAction({
        playerOneChoice: "rock",
        playerTwoChoice: "paper",
      }),
    );

    expect(reducer(newState, resetGameAction())).toMatchObject(initialState);
  });

  it("should apply the changeGameModeAction", () => {
    const initialState = {
      gameMode: HUMAN_VS_COMPUTER,
      playerOneScore: 0,
      playerTwoScore: 0,
      playerOneChoice: null,
      playerTwoChoice: null,
      round: 0,
      maxRound: 3,
      roundResult: null,
    };

    const newState = reducer(
      initialState,
      changeGameModeAction(COMPUTER_VC_COMPUTER),
    );
    expect(newState).toMatchObject({
      ...initialState,
      gameMode: COMPUTER_VC_COMPUTER,
    });
  });
});
