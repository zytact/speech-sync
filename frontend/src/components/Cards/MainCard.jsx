import { useState, useEffect, useRef } from "react";
import { FiPlay, FiPause, FiMusic } from "react-icons/fi";

const MainCard = ({ audioFile, audioName, audioRef }) => {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const seekbarRef = useRef();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, [audioFile]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleSeek = (e) => {
    if (!audioRef.current || !duration) return;
    const bar = seekbarRef.current;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audioRef.current.currentTime = ratio * duration;
    setCurrentTime(ratio * duration);
  };

  const formatTime = (t) => {
    if (!t || isNaN(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (!audioFile) return null;

  return (
    <div className="glass-card main-audio-card">
      <div className="audio-top">
        <div className="audio-left">
          <div className="audio-icon">
            <FiMusic />
          </div>
          <div style={{ minWidth: 0 }}>
            <h2 className="audio-title">{audioName}</h2>
            <p className="audio-subtitle">Loaded for analysis</p>
          </div>
        </div>
      </div>

      <div className="waveform-box">
        <svg width="100%" height="70" viewBox="0 0 800 70" fill="none">
          <path
            d="M0 35 L20 22 L40 48 L60 15 L80 55 L100 18 L120 52
            L140 25 L160 42 L180 20 L200 52 L220 28 L240 46
            L260 18 L280 50 L300 26 L320 35 L340 15 L360 52
            L380 22 L400 42 L420 18 L440 55 L460 25 L480 46
            L500 15 L520 52 L540 28 L560 42 L580 18 L600 50
            L620 26 L640 55 L660 18 L680 46 L700 22 L720 52
            L740 15 L760 46 L780 26 L800 35"
            stroke="url(#waveGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="800" y2="0">
              <stop stopColor="#cc0066" />
              <stop offset="0.5" stopColor="#a855f7" />
              <stop offset="1" stopColor="#fb7185" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="audio-controls">
        <button className="play-btn" onClick={toggleAudio}>
          {playing ? <FiPause /> : <FiPlay />}
        </button>

        <div className="seekbar-wrapper">
          <div
            ref={seekbarRef}
            className="seekbar"
            onClick={handleSeek}
            role="slider"
            aria-label="Audio position"
            aria-valuemin={0}
            aria-valuemax={duration}
            aria-valuenow={currentTime}
          >
            <div className="seekbar-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="seekbar-times">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={audioFile} />
    </div>
  );
};

export default MainCard;
