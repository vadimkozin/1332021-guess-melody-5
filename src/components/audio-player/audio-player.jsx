import React, {PureComponent, createRef} from 'react';
import {AUDIO_PLAYER_TYPE} from '../../types/types';

export default class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = createRef();

    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;

    audio.src = src;

    audio.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    audio.onplay = () => this.setState({
      isPlaying: true,
    });

    audio.onpause = () => this.setState({
      isPlaying: false,
    });
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;

    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
  }

  componentDidUpdate() {
    const audio = this._audioRef.current;

    if (this.state.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  render() {
    const {isLoading, isPlaying} = this.state;

    return (
      <>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={() => this.setState((prevState) => {
            return {isPlaying: !prevState.isPlaying};
          })}

        />
        <div className="track__status">
          <audio
            ref={this._audioRef}
          />
        </div>
      </>
    );
  }

}

AudioPlayer.propTypes = AUDIO_PLAYER_TYPE;
