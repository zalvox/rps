import { describe, expect, it } from "vitest";
import { createStore } from "./createStore";

describe("createStore test", () => {
  it("should return dispatch and getState function", () => {
    const store = createStore();
    expect(store).toMatchObject({
      dispatch: expect.any(Function),
      getState: expect.any(Function),
    });
  });

  it("should return return the initial state", () => {
    const initialState = {
      user: "Giovanni",
      age: 32,
    };

    const store = createStore({}, initialState);
    expect(store.getState()).toMatchObject(initialState);
  });

  it("should apply the reducer", () => {
    const initialState = {
      point: 0,
    };

    const addAction = () => ({
      type: "ADD_ACTION",
      payload: 1,
    });
    const reducer = (initialState, action) => {
      switch (action.type) {
        case "ADD_ACTION":
          return {
            point: initialState.point + action.payload,
          };
        default:
          return initialState;
      }
    };
    const store = createStore(reducer, initialState);

    store.dispatch(addAction());

    expect(store.getState()).toMatchObject({
      point: 1,
    });
  });
});
