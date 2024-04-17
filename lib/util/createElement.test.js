import { describe, it, expect, vi } from "vitest";
import { createElement } from "./createElement";

describe("createElement test", () => {
  it("should build a div element with the provided event handler and attributes", async () => {
    const div = createElement("div", {
      class: "example",
      "data-testid": "test-example",
      onClick: () => {
        console.log("Hello, world!");
      },
    });

    const consoleSpy = vi
      .spyOn(console, "log")
      .mockImplementation((arg) => arg);

    expect(div.tagName).toStrictEqual("DIV");
    expect(div.attributes.length).toBe(2);
    expect(div.getAttribute("class")).toStrictEqual("example");
    expect(div.getAttribute("data-testid")).toStrictEqual("test-example");
    div.click();
    expect(consoleSpy).toHaveBeenCalledOnce();
    expect(consoleSpy).toBeCalledWith("Hello, world!");
  });
});
