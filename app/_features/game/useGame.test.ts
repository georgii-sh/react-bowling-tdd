import { describe, expect, it } from "vitest";
import useGame from "./useGame";
import { renderHook } from "@testing-library/react";
import { act } from "react";

describe("useGame", () => {
  it("should return correct round with roll 2 and 3", () => {
    const { result } = renderHook(() => useGame());
    const { roll } = result.current;
    act(() => {
      roll(2);
      roll(3);
    });
    const { frames } = result.current;

    expect(frames).toStrictEqual([[2, 3]]);
  });

  it("should return correct round with roll 10 and 2", async () => {
    const { result } = renderHook(() => useGame());
    const { roll } = result.current;
    act(() => {
      roll(10);
      roll(2);
    });
    const { frames } = result.current;

    expect(frames).toStrictEqual([[10], [2]]);
  });

  it("should return correct round with roll 10, 10", async () => {
    const { result } = renderHook(() => useGame());
    const { roll } = result.current;
    act(() => {
      roll(10);
      roll(10);
    });

    const { frames } = result.current;

    expect(frames).toStrictEqual([[10], [10]]);
  });
});
