import { createElement } from "../lib/util/createElement.js";
import { dispatch, resetGameAction } from "../state/store.js";

export function createFinalResultDiv(state) {
  const button = createElement("button", {
    onClick: () => {
      dispatch(resetGameAction());
    },
  });
  button.innerText = "RETRY";

  const finalResultDiv = createElement("div");
  finalResultDiv.innerText = state.roundResult;

  const div = createElement(
    "div",
    {
      id: "final-result",
    },
    [button, finalResultDiv],
  );

  return div;
}
