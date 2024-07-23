import { describe, expect, it } from "vitest";
import { calculateScore } from "./calculateScore";

describe("calculateScore", () => {
  it("should return 0 for an empty array", () => {
    expect(calculateScore([])).toBe(0);
  });
  it("should return 1 for a single roll of 1", () => {
    expect(calculateScore([1])).toBe(1);
  });
  it("should return 3 for 3 roll of 1", () => {
    expect(calculateScore([1, 1, 1])).toBe(3);
  });
  it("should return 12 for spare and 1", () => {
    expect(calculateScore([9, 1, 1])).toBe(12);
  });
  it("should return 60 for triple strike", () => {
    expect(calculateScore([10, 10, 10])).toBe(60);
  });

  it("should return 300 for perfect game", () => {
    expect(calculateScore(Array(12).fill(10))).toBe(300);
  });
});
