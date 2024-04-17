import { describe, expect, it } from "vitest";
import { calculateRoundResult } from "./calculateRoundResult";

describe("calculateRoundResult test", () => {
  it("should set playerOneWin to true", () => {
    const expectedResult = {
      playerOneWin: true,
      playerTwoWin: false,
      tie: false,
    };
    expect(
      calculateRoundResult({
        playerOneChoice: "rock",
        playerTwoChoice: "scissors",
      }),
    ).toMatchObject(expectedResult);

    expect(
      calculateRoundResult({
        playerOneChoice: "paper",
        playerTwoChoice: "rock",
      }),
    ).toMatchObject(expectedResult);

    expect(
      calculateRoundResult({
        playerOneChoice: "scissors",
        playerTwoChoice: "paper",
      }),
    ).toMatchObject(expectedResult);
  });

  it("should set playerTwoWin to true", () => {
    const expectedResult = {
      playerOneWin: false,
      playerTwoWin: true,
      tie: false,
    };
    expect(
      calculateRoundResult({
        playerOneChoice: "scissors",
        playerTwoChoice: "rock",
      }),
    ).toMatchObject(expectedResult);

    expect(
      calculateRoundResult({
        playerOneChoice: "rock",
        playerTwoChoice: "paper",
      }),
    ).toMatchObject(expectedResult);

    expect(
      calculateRoundResult({
        playerOneChoice: "paper",
        playerTwoChoice: "scissors",
      }),
    ).toMatchObject(expectedResult);
  });

  it("should set tie to true", () => {
    const expectedResult = {
      playerOneWin: false,
      playerTwoWin: false,
      tie: true,
    };
    expect(
      calculateRoundResult({
        playerOneChoice: "rock",
        playerTwoChoice: "rock",
      }),
    ).toMatchObject(expectedResult);

    expect(
      calculateRoundResult({
        playerOneChoice: "paper",
        playerTwoChoice: "paper",
      }),
    ).toMatchObject(expectedResult);

    expect(
      calculateRoundResult({
        playerOneChoice: "scissors",
        playerTwoChoice: "scissors",
      }),
    ).toMatchObject(expectedResult);
  });

  it("should return the default result if the provided choice are not recognized", () => {
    expect(calculateRoundResult({})).toMatchObject({
      playerOneWin: false,
      playerTwoWin: false,
      tie: false,
    });
  });
});
