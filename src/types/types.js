import {shape, func, number, string, array, oneOf, arrayOf} from 'prop-types';
import {GameType} from '../const';

export const appType = {
  errorsCount: number.isRequired,
  questions: array.isRequired,
};

export const welcomeType = {
  errorsCount: number.isRequired,
  onPlayButtonClick: func.isRequired,
};

export const artistQuestionType = {
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
    type: oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
};

export const genreQuestionType = {
  onAnswer: func.isRequired,
  question: shape({
    answers: arrayOf(shape({
      src: string.isRequired,
      genre: string.isRequired,
    })).isRequired,
    genre: string.isRequired,
    type: oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
};

export const gameType = {
  questions: array.isRequired,
};
