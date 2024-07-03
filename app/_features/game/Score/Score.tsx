import { ScoreFrame } from "./ScoreFrame/ScoreFrame";

type ScoreProps = {
  frames: number[][];
};

export function Score({ frames }: ScoreProps) {
  const total = 0; //rolls.reduce((pins, total) => total + pins, 0);
  return (
    <div>
      <div className="flex gap-2">
        {frames.map((round) => (
          <ScoreFrame key={`${round[0]}_${round[1]}`} round={round} />
        ))}
      </div>
      <div>{JSON.stringify(frames)}</div>
      <div>
        Total score: <span aria-label="total">{total}</span>
      </div>
    </div>
  );
}
