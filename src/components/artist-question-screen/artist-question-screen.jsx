import React, {PureComponent} from 'react';
import AudioPlayer from "../audio-player/audio-player";
import {ARTIST_QUESTION_SCREEN_TYPE} from '../../types/types';

class ArtistQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: true,
    };
  }

  render() {
    const {isPlaying} = this.state;
    const {onAnswer, question} = this.props;
    const {answers, song} = question;

    const artistList = answers.map((answer, i) => (
      <div key={answer.artist} className="artist">
        <input className="artist__input visually-hidden" type="radio" name="answer"
          value={`answer-${i}`}
          id={`answer-${i}`}
          onChange={(evt) => {
            evt.preventDefault();
            onAnswer(question, answer);
          }}
        />
        <label className="artist__name" htmlFor={`answer-${i}`}>
          <img className="artist__picture" src={answer.picture} alt={answer.artist} />
          {answer.artist}
        </label>
      </div>
    ));

    return (
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
          </svg>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <AudioPlayer
                src={song.src}
                isPlaying={isPlaying}
                onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}
              />
            </div>
          </div>
          <form className="game__artist">
            {artistList}
          </form>
        </section>
      </section>
    );
  }
}

ArtistQuestionScreen.propTypes = ARTIST_QUESTION_SCREEN_TYPE;

export default ArtistQuestionScreen;

