import { describe, expect, it } from "vitest";
import { getFrames } from "./getFrames";

describe("getFrames", () => {
  it("should return an empty array when there are no rolls", () => {
    expect(getFrames([])).toEqual([[]]);
  });
  it("should return a single frame when there is one roll", () => {
    expect(getFrames([1])).toEqual([[1]]);
  });
  it("should return one frame with 2 rolls when there are two rolls", () => {
    expect(getFrames([1, 2])).toEqual([[1, 2]]);
  });
  it("should return two frames when there are three rolls", () => {
    expect(getFrames([1, 2, 3])).toEqual([[1, 2], [3]]);
  });
  it("should return 2 frames for 2 strikes", () => {
    expect(getFrames([10, 10])).toEqual([[10], [10]]);
  });
  it("should return correct frames for perfect game", () => {
    expect(getFrames(Array(12).fill(10))).toEqual([
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10, 10, 10],
    ]);
  });
});
