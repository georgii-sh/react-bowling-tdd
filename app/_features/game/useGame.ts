import { useReducer, useState } from "react";

function roundsReducer(
  rounds: number[][],
  action: { type: "new-game" | "roll"; payload?: number }
) {
  if (action.type === "new-game") {
    return [[]];
  }
  if (action.type === "roll") {
    const newRounds = Array.from(rounds);
    const lastRound = newRounds[newRounds.length - 1];
    if (
      rounds.length >= 10 &&
      (lastRound.length === 2 || lastRound[0] === 10)
    ) {
      return rounds;
    }

    lastRound.push(action.payload ?? 0);
    if (lastRound.length === 2) {
      newRounds.push([]);
    } else if (action.payload === 10) {
      newRounds.push([]);
    }
    return newRounds;
  }
  throw Error("Unknown action.");
}

export default function useGame() {
  const [rounds, dispatch] = useReducer(roundsReducer, [[]]);

  function roll(pins: number) {
    dispatch({ type: "roll", payload: pins });
  }

  function startNewGame() {
    dispatch({ type: "new-game" });
  }

  return { rounds, roll, startNewGame };
}
