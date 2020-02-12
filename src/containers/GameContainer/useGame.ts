import { Dispatch, useState, useCallback } from 'react';

export default function useGame(): [number[][], Dispatch<number>] {
  const [rounds, setRounds] = useState<number[][]>([[]]);

  const roll = (pins: number): void => {
    console.log('start', pins);
    const newRounds = Array.from(rounds);
    const lastRound = newRounds[newRounds.length - 1];

    console.log('roll lastRound', lastRound);

    lastRound.push(pins);

    if (lastRound.length === 2) {
      newRounds.push([]);
    }

    if (pins === 10) {
      newRounds.push([]);
    }

    setRounds(newRounds);
    console.log('end', pins);
  };

  return [rounds, roll];
}
