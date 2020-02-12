import React from 'react';
import { useSelector } from 'react-redux';

import Scores from '../../components/Scores/Scores';
import { GameState } from '../../redux/gameReducer';

const ScoresContainer: React.FC = () => {
  const rounds = useSelector<{ gameReducer: GameState }, number[][]>(
    state => state.gameReducer.rounds
  );

  return <Scores rounds={rounds} />;
};

export default ScoresContainer;
