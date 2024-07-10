"use client";

import { useReducer } from "react";

function rollsReducer(
  rolls: number[],
  action: { type: "new-game" | "roll"; payload?: number }
) {
  if (action.type === "new-game") {
    return [];
  }
  if (action.type === "roll") {
    return [...rolls, action.payload!];
  }
  throw Error("Unknown action.");
}

export default function useGame() {
  const [rolls, dispatch] = useReducer(rollsReducer, []);

  function roll(pins: number) {
    dispatch({ type: "roll", payload: pins });
  }

  function startNewGame() {
    dispatch({ type: "new-game" });
  }

  const isFinished = frames.length === 10 && frames[9].length === 3;

  return { isFinished, roll, rolls, startNewGame };
}
