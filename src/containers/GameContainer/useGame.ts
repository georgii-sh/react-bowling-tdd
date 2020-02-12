import { Dispatch, useState, useCallback } from 'react';

export default function useGame(): [number[][], Dispatch<number>] {
  const [rounds, setRounds] = useState<number[][]>([[]]);

  const roll = useCallback(
    (pins: number): void => {
      setRounds(prevRounds => {
        const newRounds = Array.from(prevRounds);
        const lastRound = newRounds[newRounds.length - 1];

        lastRound.push(pins);

        if (lastRound.length === 2) {
          newRounds.push([]);
        } else if (pins === 10) {
          newRounds.push([]);
        }
        return newRounds;
      });
    },
    [setRounds]
  );

  return [rounds, roll];
}
