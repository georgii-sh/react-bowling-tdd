import React from 'react';
import { render } from '@testing-library/react';
import ScoreFrame from './ScoreFrame';

describe('ScoreFrame', () => {
  it('should renders correct values for normal state ', () => {
    const { getByLabelText, queryByLabelText } = render(
      <ScoreFrame round={[5, 2]} total={7} />
    );
    expect(getByLabelText('first')).toBeInTheDocument();
    expect(getByLabelText('first').textContent).toEqual('5');
    expect(getByLabelText('second')).toBeInTheDocument();
    expect(getByLabelText('second').textContent).toEqual('2');
    expect(queryByLabelText('spare')).not.toBeInTheDocument();
    expect(queryByLabelText('strike')).not.toBeInTheDocument();
    expect(getByLabelText('total')).toBeInTheDocument();
    expect(getByLabelText('total').textContent).toEqual('7');
  });

  it('should renders correct values for spare ', () => {
    const { getByLabelText, queryByLabelText } = render(
      <ScoreFrame round={[6, 4]} total={10} />
    );
    expect(getByLabelText('first')).toBeInTheDocument();
    expect(getByLabelText('first').textContent).toEqual('6');
    expect(queryByLabelText('second')).not.toBeInTheDocument();
    expect(getByLabelText('spare')).toBeInTheDocument();
    expect(getByLabelText('total')).toBeInTheDocument();
    expect(getByLabelText('total').textContent).toEqual('10');
  });

  it('should renders correct values for strike ', () => {
    const { getByLabelText, queryByLabelText } = render(
      <ScoreFrame round={[10]} total={10} />
    );
    expect(getByLabelText('first')).toBeInTheDocument();
    expect(getByLabelText('first').textContent).toEqual('10');
    expect(queryByLabelText('second')).not.toBeInTheDocument();
    expect(queryByLabelText('spare')).not.toBeInTheDocument();
    expect(getByLabelText('strike')).toBeInTheDocument();
    expect(getByLabelText('total')).toBeInTheDocument();
    expect(getByLabelText('total').textContent).toEqual('10');
  });
});
