import {shape, func, number, string, array, oneOf, oneOfType, arrayOf, bool} from 'prop-types';
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
  question: GENRE_QUESTION_TYPE,
};

export const APP_TYPE = {
  errorsCount: number.isRequired,
  questions: arrayOf(oneOfType([ARTIST_QUESTION_TYPE, GENRE_QUESTION_TYPE]).isRequired),
};

export const GAME_SCREEN_TYPE = {
  questions: array.isRequired,
};

export const AUDIO_PLAYER_TYPE = {
  isPlaying: bool.isRequired,
  src: string.isRequired,
  onPlayButtonClick: func.isRequired,
};
