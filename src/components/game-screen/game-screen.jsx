import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {GameType} from '../../const';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import Mistakes from "../mistakes/mistakes";
import {GAME_SCREEN_TYPE} from '../../types/types';

import withAudioPlayer from '../../hocs/with-audio-player/with-audio-player';
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer";

const GenreQuestionScreenWrapped = withAudioPlayer(withUserAnswer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withAudioPlayer(ArtistQuestionScreen);

const GameScreen = (props) => {
  const {questions, step, onUserAnswer, resetGame, mistakes} = props;
  const question = questions[step];

  if (step >= questions.length || !question) {
    resetGame();

    return (
      <Redirect to="/" />
    );
  }

  const Wrapper = question.type === GameType.ARTIST
    ? ArtistQuestionScreenWrapped
    : GenreQuestionScreenWrapped;

  return (
    <Wrapper question={question} onAnswer={onUserAnswer}>
      <Mistakes count={mistakes}/>
    </Wrapper>);
};

GameScreen.propTypes = GAME_SCREEN_TYPE;

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(question, answer));
  },
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);

