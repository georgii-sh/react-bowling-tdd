import { describe, expect, it } from "vitest";
import { calculateScore } from "./calculateScore";

describe("calculateScore", () => {
  it("should return the total score for [1, 2]", () => {
    expect(calculateScore([1, 2])).toBe(3);
  });
  it("should return the total score for [1, 2, 1, 2]", () => {
    expect(calculateScore([1, 2, 1, 2])).toBe(6);
  });
  it("should return the total score for spare [9, 1, 1, 2]", () => {
    expect(calculateScore([9, 1, 1, 2])).toBe(14);
  });
  it("should return the total score for double spare [9, 1, 9, 1]", () => {
    expect(calculateScore([9, 1, 9, 1])).toBe(29);
  });
  it("should return the total score for spare and strike after [9, 1, 10]", () => {
    expect(calculateScore([9, 1, 10])).toBe(30);
  });
  it("should return the total score for strike [10, 1, 2]", () => {
    expect(calculateScore([10, 1, 2])).toBe(16);
  });
  it("should return the total score for 3 strikes [10, 10, 10]", () => {
    expect(calculateScore([10, 10, 10])).toBe(60);
  });
  it("should return the total score for 10 strikes [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]", () => {
    expect(
      calculateScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
    ).toBe(300);
  });
});
