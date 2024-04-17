import { POSSIBLE_CHOICES } from "../lib/constants.js";
import { play } from "../lib/play.js";
import { createElement } from "../lib/util/createElement.js";
import { dispatch, getState, playRoundAction } from "../state/store.js";

export function createChoiceElement(choice) {
  const img = createElement("img", {
    src: `assets/${choice}.png`,
    alt: choice,
    heigth: 199,
    width: 199,
  });
  const div = createElement(
    "div",
    {
      class: "choice",
      id: choice,
      onClick: () => {
        const { gameMode } = getState();
        dispatch(playRoundAction(play(gameMode, choice)));
      },
    },
    img,
  );

  return div;
}

export const createChoicesDiv = () =>
  createElement(
    "div",
    {
      id: "choices",
    },
    POSSIBLE_CHOICES.map(createChoiceElement),
  );
