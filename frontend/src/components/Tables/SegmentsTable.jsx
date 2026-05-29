import { FiPlay } from "react-icons/fi";

const SPEAKER_COLORS = ["#cc0066", "#a855f7", "#fb7185"];

const SegmentsTable = ({ diarizationData, audioRef }) => {
  const speakers = [...new Set(diarizationData.map(s => s.speaker))];
  const speakerIndex = Object.fromEntries(speakers.map((s, i) => [s, i]));

  const playSegment = (startTime, endTime) => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    // Remove any previous segment-stop listener
    if (audio._segmentStop) {
      audio.removeEventListener("timeupdate", audio._segmentStop);
    }

    audio.currentTime = startTime;
    audio.play();

    audio._segmentStop = () => {
      if (audio.currentTime >= endTime) {
        audio.pause();
        audio.removeEventListener("timeupdate", audio._segmentStop);
        audio._segmentStop = null;
      }
    };
    audio.addEventListener("timeupdate", audio._segmentStop);
  };

  if (diarizationData.length === 0) return null;

  return (
    <section className="workspace-section">
      <h2 className="section-heading">Detected Segments</h2>

      <table>
        <thead>
          <tr>
            <th>Speaker</th>
            <th>Start</th>
            <th>End</th>
            <th>Duration</th>
            <th>Play</th>
          </tr>
        </thead>
        <tbody>
          {diarizationData.map((seg, i) => {
            const si = speakerIndex[seg.speaker] ?? 0;
            const color = SPEAKER_COLORS[si % SPEAKER_COLORS.length];
            return (
              <tr key={i} className="segment-row">
                <td>
                  <div className="speaker-cell">
                    <div className="speaker-dot" style={{ background: color }} />
                    {seg.speaker}
                  </div>
                </td>
                <td>{seg.start.toFixed(2)}s</td>
                <td>{seg.end.toFixed(2)}s</td>
                <td>{seg.duration.toFixed(2)}s</td>
                <td>
                  <button
                    className="mini-play"
                    onClick={() => playSegment(seg.start, seg.end)}
                  >
                    <FiPlay />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default SegmentsTable;
