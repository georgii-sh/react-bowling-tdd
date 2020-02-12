export interface GameAction {
  type: string;
  payload?: {
    pins: number;
  };
}

export const startNewGame = (): GameAction => ({
  type: 'START_NEW_GAME'
});

export const roll = (pins: number): GameAction => ({
  type: 'ROLL',
  payload: {
    pins
  }
});
