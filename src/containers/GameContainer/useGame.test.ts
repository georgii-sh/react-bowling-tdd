import { renderHook, act } from '@testing-library/react-hooks';
import useGame from './useGame';

describe('useGame', () => {
  test('should return correct round with roll 2 and 3', () => {
    const { result } = renderHook(() => useGame());
    const [rounds, roll] = result.current;

    act(() => {
      roll(2);
      roll(3);
    });

    expect(rounds).toStrictEqual([[2, 3]]);
  });

  test('should return correct round with roll 10 and 2', () => {
    const { result } = renderHook(() => useGame());
    const [rounds, roll] = result.current;

    act(() => {
      roll(10);
    });

    act(() => {
      roll(2);
    });

    console.log('rounds', rounds);

    expect(rounds).toStrictEqual([[10], [2]]);
  });
});
