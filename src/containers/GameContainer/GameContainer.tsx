import React from 'react';
import Scores from '../../components/Scores/Scores';
import useGame from './useGame';

const GameContainer: React.FC = () => {
  const [rounds, roll] = useGame();

  const doRoll = (): void => {
    // roll(Math.ceil(Math.random() * 10));
    roll(10);
    roll(2);
  };

  const doRoll2 = (): void => {
    // roll(Math.ceil(Math.random() * 10));
    roll(2);
  };

  return (
    <>
      <Scores rounds={rounds} />
      <div>
        <button type="button" onClick={doRoll}>
          Roll 10
        </button>
        <button type="button" onClick={doRoll2}>
          Roll 2
        </button>
      </div>
    </>
  );
};

export default GameContainer;
