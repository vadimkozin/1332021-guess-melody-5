import {STEP_DEFAULT} from '../const';

export const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`,
};

export const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: STEP_DEFAULT,
  }),
  resetGame: () => ({
    type: ActionType.RESET_GAME,
  })
};
