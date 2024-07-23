type RoundsProps = { round: number[] };
type RoundValueProps = { value: number };

function First({ value }: RoundValueProps) {
  return (
    <div className="px-4 py-1 min-h-8 min-w-10" aria-label="first">
      {value}
    </div>
  );
}

function Second({ value }: RoundValueProps) {
  return (
    <div
      className="px-4 py-1 border-l-2 border-b-2 border-gray-400"
      aria-label="second"
    >
      {value}
    </div>
  );
}

function Third({ value }: RoundValueProps) {
  return (
    <div
      className="px-4 py-1 border-l-2 border-b-2 border-gray-400"
      aria-label="third"
    >
      {value}
    </div>
  );
}

type ScoreFrameProps = {
  round: number[];
  total?: number;
};

export function ScoreFrame({ round, total }: ScoreFrameProps) {
  const [first, second, third] = round;
  return (
    <div className="border-2 border-gray-400" aria-label="score-frame">
      <div className="flex">
        <First value={first} />
        <Second value={second} />
        {third !== undefined ? <Third value={third} /> : null}
      </div>
      <div className="text-center bold min-h-8 px-4 py-2" aria-label="total">
        {total}
      </div>
    </div>
  );
}
