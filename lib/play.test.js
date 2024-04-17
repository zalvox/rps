import { describe, it, expect, vi, afterAll, beforeAll } from "vitest";
import { COMPUTER_VC_COMPUTER, HUMAN_VS_COMPUTER } from "./constants";
import { play } from "./play.js";
import { getComputerChoice } from "./getComputerChoice.js";

describe("play test", () => {
  beforeAll(() => {
    vi.mock("./getComputerChoice.js");
    vi.mocked(getComputerChoice).mockReturnValue("paper");
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  it("should handle the HUMAN_VS_COMPUTER mode", () => {
    expect(play(HUMAN_VS_COMPUTER, "rock")).toMatchObject({
      playerOneChoice: "rock",
      playerTwoChoice: "paper",
    });
  });

  it("should handle the COMPUTER_VS_COMPUTER mode", () => {
    expect(play(COMPUTER_VC_COMPUTER)).toMatchObject({
      playerOneChoice: "paper",
      playerTwoChoice: "paper",
    });
  });
});
