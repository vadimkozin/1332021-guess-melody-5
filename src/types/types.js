import {shape, func, number, string, array, oneOf, arrayOf} from 'prop-types';
import {GameType} from '../const';

const QUESTION_TYPE = oneOf([GameType.ARTIST, GameType.GENRE]).isRequired;

export const APP_TYPE = {
  errorsCount: number.isRequired,
  questions: array.isRequired,
};

export const WELCOME_TYPE = {
  errorsCount: number.isRequired,
  onPlayButtonClick: func.isRequired,
};

export const ARTIST_QUESTION_TYPE = {
  onAnswer: func.isRequired,
  question: shape({
    answers: arrayOf(shape({
      artist: string.isRequired,
      picture: string.isRequired,
    })).isRequired,
    song: shape({
      artist: string.isRequired,
      src: string.isRequired,
    }).isRequired,
    type: QUESTION_TYPE,
  }).isRequired,
};

export const GENRE_QUESTION_TYPE = {
  onAnswer: func.isRequired,
  question: shape({
    answers: arrayOf(shape({
      src: string.isRequired,
      genre: string.isRequired,
    })).isRequired,
    genre: string.isRequired,
    type: QUESTION_TYPE,
  }).isRequired,
};

export const GAME_SCREEN_TYPE = {
  questions: array.isRequired,
};
