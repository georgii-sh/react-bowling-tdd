import React from 'react';
import { render } from '@testing-library/react';
import Scores from './Scores';

describe('Scores', () => {
  it('should render one store frame', () => {
    const { getAllByLabelText } = render(<Scores rounds={[[2, 3]]} />);
    expect(getAllByLabelText('score-frame')).toHaveLength(1);
  });

  it('should render three store frame', () => {
    const { getAllByLabelText } = render(
      <Scores rounds={[[2, 3], [10], [5, 5]]} />
    );
    expect(getAllByLabelText('score-frame')).toHaveLength(3);
  });
});
