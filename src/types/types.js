import {shape, func, number, string, oneOf, oneOfType, arrayOf, bool, element, node} from 'prop-types';
import {GameType} from '../const';

const QUESTION_TYPE = oneOf([GameType.ARTIST, GameType.GENRE]).isRequired;

export const WELCOME_TYPE = {
  errorsCount: number.isRequired,
  onPlayButtonClick: func.isRequired,
};

export const ARTIST_QUESTION_TYPE = shape({
  answers: arrayOf(shape({
    artist: string.isRequired,
    picture: string.isRequired,
  })).isRequired,
  song: shape({
    artist: string.isRequired,
    src: string.isRequired,
  }).isRequired,
  type: QUESTION_TYPE,
}).isRequired;

export const ARTIST_QUESTION_SCREEN_TYPE = {
  onAnswer: func.isRequired,
  question: ARTIST_QUESTION_TYPE,
  renderPlayer: func.isRequired,
  children: element.isRequired,
};

export const GENRE_QUESTION_TYPE = shape({
  answers: arrayOf(shape({
    src: string.isRequired,
    genre: string.isRequired,
  })).isRequired,
  genre: string.isRequired,
  type: QUESTION_TYPE,
}).isRequired;

export const GENRE_QUESTION_SCREEN_TYPE = {
  onAnswer: func.isRequired,
  onChange: func.isRequired,
  question: GENRE_QUESTION_TYPE,
  renderPlayer: func.isRequired,
  children: element.isRequired,
  userAnswers: arrayOf(bool).isRequired,
};

export const GAME_SCREEN_TYPE = {
  questions: arrayOf(oneOfType([ARTIST_QUESTION_TYPE, GENRE_QUESTION_TYPE]).isRequired),
  step: number.isRequired,
  onUserAnswer: func.isRequired,
  mistakes: number.isRequired,
};

export const AUDIO_PLAYER_TYPE = {
  children: oneOfType([
    arrayOf(node),
    node
  ]).isRequired,
  isLoading: bool.isRequired,
  isPlaying: bool.isRequired,
  onPlayButtonClick: func.isRequired,
};

export const MISTAKES_TYPE = {
  count: number.isRequired,
};

export const WITH_AUDIO_TYPE = {
  isPlaying: bool.isRequired,
  onPlayButtonClick: func.isRequired,
  src: string.isRequired,
};

export const WITH_USER_ANSWER = {
  question: shape({
    answers: arrayOf(shape({
      src: string.isRequired,
      genre: string.isRequired,
    })).isRequired,
    genre: string.isRequired,
    type: oneOf([GameType.GENRE]).isRequired,
  }).isRequired,
  onAnswer: func.isRequired,
};


export const GENRE_QUESTION_ITEM = {
  answer: shape({
    src: string.isRequired,
    genre: string.isRequired,
  }).isRequired,
  id: number.isRequired,
  onChange: func.isRequired,
  renderPlayer: func.isRequired,
  userAnswer: bool.isRequired,
};

export const GAME_OVER_SCREEN_TYPE = {
  onReplayButtonClick: func.isRequired,
  resetGame: func.isRequired,
};

export const WIN_SCREEN_TYPE = {
  questionsCount: number.isRequired,
  mistakesCount: number.isRequired,
  onReplayButtonClick: func.isRequired,
  resetGame: func.isRequired,
};

