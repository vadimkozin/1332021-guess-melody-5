import {isArtistAnswerCorrect, isGenreAnswerCorrect} from "../game";
import {GameType, Increment} from "../const";

export const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`,
};

export const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: Increment.STEP,
  }),
  resetGame: () => ({
    type: ActionType.RESET_GAME,
  }),
  incrementMistake: (question, userAnswer) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      case GameType.GENRE:
        answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? Increment.MISTAKES_ANSWER_TRUTH : Increment.MISTAKES_ANSWER_ERROR,
    };
  },
};
