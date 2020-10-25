import React from 'react';
import {GENRE_QUESTION_SCREEN_TYPE} from '../../types/types';

const GenreQuestionScreen = (props) => {
  const {
    onAnswer,
    onChange,
    question,
    renderPlayer,
    children,
    userAnswers
  } = props;

  const {answers, genre} = question;

  const trackList = answers.map((answer, i) => (
    <div key={`${i}-${answer.src}`} className="track">
      {renderPlayer(answer.src, i)}
      <div className="game__answer">
        <input className="game__input visually-hidden" type="checkbox" name="answer"
          value={`answer-${i}`}
          id={`answer-${i}`}
          checked={userAnswers[i]}
          onChange={(evt) => {
            const value = evt.target.checked;
            onChange(i, value);
          }}
        />
        <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
      </div>
    </div>
  ));

  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>
        {children}
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer();
          }}
        >
          {trackList}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
};

GenreQuestionScreen.propTypes = GENRE_QUESTION_SCREEN_TYPE;

export default GenreQuestionScreen;
