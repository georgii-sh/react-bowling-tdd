type RoundsProps = { round: number[] };

function First({ round }: RoundsProps) {
  if (round[0] === 10) {
    return "";
  }
  return round[0];
}

function Second({ round }: RoundsProps) {
  if (round[0] === 10) {
    return "X";
  }
  if (round[1] && round[0] + round[1] === 10) {
    return "/";
  }
  return round[1];
}

type ScoreFrameProps = {
  round: number[];
  total?: number;
};

export function ScoreFrame({ round, total }: ScoreFrameProps) {
  return (
    <div
      className="inline-flex flex-col border-2 border-gray-400	"
      aria-label="score-frame"
    >
      <div className="flex">
        <div className="px-4 py-2" aria-label="first">
          <First round={round} />
        </div>
        <div
          className="px-4 py-2 border-l-2 border-b-2 border-gray-400"
          aria-label="second"
        >
          <Second round={round} />
        </div>
      </div>
      <div className="text-center px-4 py-2" aria-label="total">
        {total}
      </div>
    </div>
  );
}
