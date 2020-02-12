import React from 'react';
import ScoreFrame from '../ScoreFrame/ScoreFrame';

interface Props {
  rounds: number[][];
}

const Scores: React.FC<Props> = ({ rounds }) => {
  const total = 0; //rolls.reduce((pins, total) => total + pins, 0);
  return (
    <div>
      <div>
        {rounds.map((round, key) => (
          <ScoreFrame key={`score-frame-${key}`} round={round} />
        ))}
      </div>
      <div>{JSON.stringify(rounds)}</div>
      <div>
        Total score: <span aria-label="total">{total}</span>
      </div>
    </div>
  );
};

export default Scores;
