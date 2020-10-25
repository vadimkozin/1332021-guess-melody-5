import React from 'react';
import {AUDIO_PLAYER_TYPE} from '../../types/types';

const AudioPlayer = (props) => {
  const {isLoading, onPlayButtonClick, isPlaying, children} = props;

  return (
    <>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={isLoading}
        onClick={onPlayButtonClick}

      />
      <div className="track__status">
        {children}
      </div>
    </>
  );
};

AudioPlayer.propTypes = AUDIO_PLAYER_TYPE;

export default AudioPlayer;
