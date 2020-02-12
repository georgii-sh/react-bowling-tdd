import React from 'react';
import { useDispatch } from 'react-redux';

import { roll } from '../../redux/gameActions';

const Roll: React.FC = () => {
  const dispatch = useDispatch();

  const doRoll = (): void => {
    dispatch(roll(5));
  };

  return (
    <div>
      <button type="button" onClick={doRoll}>
        Roll
      </button>
    </div>
  );
};

export default Roll;
