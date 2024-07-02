"use client";

import { Button } from "../shared/Button";
import { Score } from "./Score/Score";
import useGame from "./useGame";

export function Game() {
  const { roll, startNewGame, rounds } = useGame();

  function roll3(): void {
    roll(3);
  }

  function rollSpare(): void {
    roll(6);
    roll(4);
  }

  function rollStrike(): void {
    roll(10);
  }

  return (
    <>
      <Score rounds={rounds} />
      <div className="flex gap-4">
        <Button onClick={startNewGame}>New Game</Button>
        <Button onClick={roll3}>Roll 3</Button>
        <Button onClick={rollSpare}>Roll Spare</Button>
        <Button onClick={rollStrike}>Roll Strike</Button>
      </div>
    </>
  );
}
