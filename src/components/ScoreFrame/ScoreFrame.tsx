import React from 'react';

import { css, InterpolationWithTheme } from '@emotion/core';

interface Props {
  round: number[];
  total?: number;
}

const styles = {
  frame: {
    border: '1px solid',
    display: 'inline-block',
    textAlign: 'center'
  } as InterpolationWithTheme<any>,
  first: {
    paddingTop: 10,
    width: 30,
    height: 20
  },
  second: {
    width: 30,
    height: 20,
    paddingTop: 10,
    borderBottom: '1px solid',
    borderLeft: '1px solid'
  },
  total: {
    padding: 10,
    fontWeight: 500
  },
  triangle: {
    width: 0,
    height: 0,
    borderBottom: '30px solid black',
    borderLeft: '30px solid transparent'
  },
  spare: {
    width: 30,
    height: 30,
    borderBottom: '1px solid',
    borderLeft: '1px solid'
  },
  strike: {
    width: 30,
    height: 30,
    background: '#000'
  }
};

const Second: React.FC<{ round: number[] }> = ({ round }) => {
  if (round[0] === 10) {
    return <div css={styles.strike} aria-label="strike" />;
  }
  if (round[1] && round[0] + round[1] === 10) {
    return (
      <div css={styles.spare} aria-label="spare">
        <div css={styles.triangle} />
      </div>
    );
  }
  return (
    <div css={styles.second} aria-label="second">
      {round[1]}
    </div>
  );
};

const ScoreFrame: React.FC<Props> = ({ round, total }) => {
  return (
    <div css={styles.frame} aria-label="score-frame">
      <div css={{ display: 'flex' }}>
        <div css={styles.first} aria-label="first">
          {round[0]}
        </div>
        <Second round={round} />
      </div>
      <div css={styles.total} aria-label="total">
        {total}
      </div>
    </div>
  );
};

export default ScoreFrame;
