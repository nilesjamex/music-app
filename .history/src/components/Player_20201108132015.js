import React from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faplay } from '@fortawesome/free-solid-svg-icons';


const Player = () => {
    return (
        <div className="player">
          <div className="time-control">
              <p>Start Time</p>
              <input type="range" />
              <p>End Time</p>
          </div>
          <div className="play-control">
              <FontAwesomeIcon className="play" icon={faplay} />

          </div>
        </div>
    )
}


export default Player