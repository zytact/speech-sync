
import { useState } from "react";

import {
  FiPlay,
  FiPause,
  FiMusic
} from "react-icons/fi";

const MainCard = ({
  audioFile,
  audioName,
  audioRef
}) => {

  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {

    if (!audioRef.current) return;

    if (playing) {

      audioRef.current.pause();

    } else {

      audioRef.current.play();

    }

    setPlaying(!playing);
  };

  return (

    <div className="glass-card main-audio-card">
      <div className="audio-top">

        <div className="audio-left">

          <div className="audio-icon">

            <FiMusic />

          </div>

          <div>

            <h2 className="audio-title">

              {
                audioName
                ? audioName
                : "Meeting_Recording.wav"
              }

            </h2>

            <p className="audio-subtitle">

             SpeechSync Speaker Analysis

            </p>

          </div>

        </div>

      </div>
      <div className="waveform-box">

        <svg
          width="100%"
          height="120"
          viewBox="0 0 800 120"
          fill="none"
        >

          <path
            d="M0 60 
            L20 40 L40 80 L60 30
            L80 90 L100 35 L120 85
            L140 45 L160 70 L180 40
            L200 85 L220 50 L240 78
            L260 35 L280 80 L300 45
            L320 60 L340 30 L360 85
            L380 40 L400 70 L420 35
            L440 90 L460 45 L480 78
            L500 30 L520 85 L540 50
            L560 70 L580 35 L600 80
            L620 45 L640 90 L660 35
            L680 75 L700 40 L720 85
            L740 30 L760 78 L780 45
            L800 60"
            stroke="url(#paint0_linear)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <defs>

            <linearGradient
              id="paint0_linear"
              x1="0"
              y1="0"
              x2="800"
              y2="0"
            >

              <stop stopColor="#ff4fa3" />

              <stop
                offset="0.5"
                stopColor="#a855f7"
              />

              <stop
                offset="1"
                stopColor="#fb7185"
              />

            </linearGradient>

          </defs>

        </svg>

      </div>
      <div className="audio-controls">

        <button
          className="play-btn"
          onClick={toggleAudio}
        >

          {
            playing
            ? <FiPause />
            : <FiPlay />
          }

        </button>
        <audio
          ref={audioRef}
          src={audioFile}
        />

      </div>

    </div>
  );
};

export default MainCard;

