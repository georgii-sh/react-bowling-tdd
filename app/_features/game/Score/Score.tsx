import { getFrames } from "./getFrames";
import { ScoreFrame } from "./ScoreFrame/ScoreFrame";
import { calculateScore } from "./calculateScore";

type ScoreProps = {
  rolls: number[];
};

export function Score({ rolls }: ScoreProps) {
  const frames = getFrames(rolls);
  const total = calculateScore(rolls);
  return (
    <div>
      <div className="flex gap-2">
        {frames.map((round, index) => {
          const totalToFrame = calculateScore(rolls.slice(0, index + 1));
          return (
            <ScoreFrame
              key={`${round[0]}_${round[1]}`}
              round={round}
              total={totalToFrame}
            />
          );
        })}
      </div>
      <div>{JSON.stringify(frames)}</div>
      <div>
        Total score: <span aria-label="total">{total}</span>
      </div>
    </div>
  );
}
