import React, {PureComponent} from 'react';
import Player from "../../components/audio-player/audio-player";
import withAudio from "../with-audio/with-audio";

const AudioPlayer = withAudio(Player);
import {PlayerSettings} from '../../const';


const withAudioPlayer = (Component) => {
  class WithAudioPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };
    }

    render() {
      const {activePlayerId} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(src, id) => {
          return (
            <AudioPlayer
              src={src}
              isPlaying={id === activePlayerId}
              onPlayButtonClick={() => this.setState({
                activePlayerId: activePlayerId === id ? PlayerSettings.EMPTY_ID : id
              })}
            />
          );
        }}
      />;
    }
  }

  WithAudioPlayer.propTypes = {};

  return WithAudioPlayer;
};

export default withAudioPlayer;
