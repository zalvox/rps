import { HUMAN_VS_COMPUTER } from "../lib/constants.js";
import { createStore } from "../lib/util/createStore.js";
import { calculateRoundResult } from "../lib/calculateRoundResult.js";

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

export const CHANGE_GAME_MODE_ACTION = "CHANGE_GAME_MODE";
export const changeGameModeAction = (payload) => ({
  type: CHANGE_GAME_MODE_ACTION,
  payload,
});

export const PLAY_ROUND_ACTION = "PLAY_ROUND";
export const playRoundAction = (payload) => ({
  type: PLAY_ROUND_ACTION,
  payload,
});

export const RESET_GAME_ACTION = "RESET_GAME";
export const resetGameAction = () => ({
  type: RESET_GAME_ACTION,
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GAME_MODE_ACTION:
      return {
        ...initialState,
        gameMode: action.payload,
      };

    case PLAY_ROUND_ACTION: {
      const result = calculateRoundResult(action.payload);
      if (result.playerOneWin) {
        return {
          ...state,
          ...action.payload,
          playerOneScore: state.playerOneScore + 1,
          roundResult: "PLAYER ONE WIN",
          round: state.round + 1,
        };
      }
      if (result.playerTwoWin) {
        return {
          ...state,
          ...action.payload,
          playerTwoScore: state.playerTwoScore + 1,
          roundResult: "PLAYER TWO WIN",
          round: state.round + 1,
        };
      }
      if (result.tie) {
        return {
          ...state,
          ...action.payload,
          roundResult: "IT'S A TIE",
          round: state.round + 1,
        };
      }
      return state;
    }

    case RESET_GAME_ACTION: {
      return {
        ...initialState,
        gameMode: state.gameMode,
      };
    }

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export const dispatch = store.dispatch;
export const getState = store.getState;
