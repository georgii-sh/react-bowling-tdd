import React from 'react';
import { useSelector } from 'react-redux';

import Scores from '../../components/Scores/Scores';
import { GameState } from '../../redux/gameReducer';

const ScoresContainer: React.FC = () => {
  const rolls = useSelector<{ gameReducer: GameState }, number[]>(
    state => state.gameReducer.rolls
  );

  return <Scores rolls={rolls} />;
};

export default ScoresContainer;
