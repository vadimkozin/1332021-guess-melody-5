import React, {PureComponent, createRef} from 'react';
import {AUDIO_PLAYER_TYPE} from '../../types/types';

export default class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = createRef();

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;

    audio.src = src;

    audio.oncanplaythrough = () => this.setState({
      isLoading: false,
    });
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;

    audio.oncanplaythrough = null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.isPlaying !== prevProps.isPlaying) {
      const audio = this._audioRef.current;

      if (this.props.isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }

  render() {
    const {isLoading} = this.state;
    const {onPlayButtonClick, isPlaying} = this.props;

    return (
      <>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={onPlayButtonClick}

        />
        <div className="track__status">
          <audio
            autoPlay={isPlaying}
            ref={this._audioRef}
          />
        </div>
      </>
    );
  }

}

AudioPlayer.propTypes = AUDIO_PLAYER_TYPE;
