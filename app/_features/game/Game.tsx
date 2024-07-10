"use client";

import { Button } from "../shared/Button";
import { Score } from "./Score/Score";
import useGame from "./useGame";

export function Game() {
  const { roll, startNewGame, rolls } = useGame();

  function roll3(): void {
    roll(3);
  }

  function roll7(): void {
    roll(7);
  }

  function rollStrike(): void {
    roll(10);
  }

  return (
    <>
      <Score rolls={rolls} />
      <div className="flex gap-4">
        <Button onClick={startNewGame}>New Game</Button>
        <Button onClick={roll3}>Roll 3</Button>
        <Button onClick={roll7}>Roll 7</Button>
        <Button onClick={rollStrike}>Roll Strike</Button>
      </div>
    </>
  );
}
