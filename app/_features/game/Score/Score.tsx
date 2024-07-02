import { ScoreFrame } from "./ScoreFrame/ScoreFrame";

type ScoreProps = {
  rounds: number[][];
};

export function Score({ rounds }: ScoreProps) {
  const total = 0; //rolls.reduce((pins, total) => total + pins, 0);
  return (
    <div>
      <div>
        {rounds.map((round) => (
          <ScoreFrame key={`${round[0]}_${round[1]}`} round={round} />
        ))}
      </div>
      <div>{JSON.stringify(rounds)}</div>
      <div>
        Total score: <span aria-label="total">{total}</span>
      </div>
    </div>
  );
}
