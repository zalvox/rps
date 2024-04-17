import { play } from "../lib/play.js";
import { createElement } from "../lib/util/createElement.js";
import { dispatch, getState, playRoundAction } from "../state/store.js";

export function createPlayButton() {
  const button = createElement("button", {
    type: "button",
    id: "automatic-play",
    onClick: () => {
      const { gameMode } = getState();
      dispatch(playRoundAction(play(gameMode)));
    },
  });
  button.innerText = "PLAY";
  return button;
}
