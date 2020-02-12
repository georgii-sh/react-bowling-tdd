import React from 'react';
import { useDispatch } from 'react-redux';

import { roll } from '../../redux/gameActions';

const Roll: React.FC = () => {
  const dispatch = useDispatch();

  const doRoll = (): void => {
    dispatch(roll(Math.ceil(Math.random() * 10)));
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
