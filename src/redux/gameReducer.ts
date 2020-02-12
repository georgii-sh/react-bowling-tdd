import { GameAction } from './gameActions';

export interface GameState {
  rolls: number[];
}

const initialState: GameState = {
  rolls: []
};

const gameReducer = (
  state: GameState = initialState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case 'START_NEW_GAME':
      return initialState;
    case 'ROLL': {
      if (action.payload) {
        const { pins } = action.payload;
        const newRolls = Array.from(state.rolls);
        newRolls.push(pins);
        return {
          ...state,
          rolls: newRolls
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default gameReducer;
