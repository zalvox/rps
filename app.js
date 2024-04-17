import { getState } from "./state/store.js";
import render from "./lib/render.js";

window.addEventListener("appstatechange", () => render(getState()));

render(getState());
