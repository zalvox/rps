/**
 * A super simple version of a state manager
 * Idea borrowed from redux
 *
 * @param {Function} reducer
 * @param {Object} initialState
 * @returns
 */
export const createStore = (reducer, initialState) => {
  let state = initialState;
  const appStateChangeEvent = new Event("appstatechange", {
    view: window,
    bubbles: true,
  });

  return {
    dispatch: (action) => {
      state = reducer(state, action);
      document.dispatchEvent(appStateChangeEvent);
    },
    getState: () => state,
  };
};
