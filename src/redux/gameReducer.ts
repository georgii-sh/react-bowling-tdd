import { GameAction } from './gameActions';

export interface GameState {
  rolls: number[];
  rounds: number[][];
  currentRound: number;
}

const initialState: GameState = {
  rolls: [],
  rounds: [[]],
  currentRound: 0
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
        const { currentRound, rounds } = state;
        const newRounds = Array.from(rounds);
        let newCurrentRound = currentRound;
        if (newRounds[newCurrentRound].length > 1) {
          newCurrentRound += 1;
          newRounds[newCurrentRound] = [];
        }
        newRounds[newCurrentRound].push(pins);
        return {
          ...state,
          currentRound: newCurrentRound,
          rounds: newRounds
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default gameReducer;
