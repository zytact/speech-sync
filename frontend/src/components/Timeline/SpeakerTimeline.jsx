const SPEAKER_COLORS = ["#cc0066", "#a855f7", "#fb7185"];

const SpeakerTimeline = ({ diarizationData }) => {
  const speakers = [...new Set(diarizationData.map(item => item.speaker))];
  const totalDuration = diarizationData.length
    ? diarizationData[diarizationData.length - 1].end
    : 1;

  const tickCount = 5;
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) =>
    (totalDuration * i) / tickCount
  );

  if (diarizationData.length === 0) return null;

  return (
    <section className="workspace-section">
      <h2 className="section-heading">Speaker Timeline</h2>

      <div className="time-axis">
        {ticks.map((t, i) => (
          <span
            key={i}
            className="time-tick"
            style={{ left: `${(i / tickCount) * 100}%` }}
          >
            {t.toFixed(1)}s
          </span>
        ))}
      </div>

      <div className="timeline-wrapper">
        {speakers.map((speaker, si) => (
          <div className="timeline-row" key={speaker}>
            <div className="timeline-speaker">
              <span
                className="speaker-color-bar"
                style={{ background: SPEAKER_COLORS[si % SPEAKER_COLORS.length] }}
              />
              {speaker}
            </div>
            <div className="timeline-track">
              {diarizationData
                .filter(item => item.speaker === speaker)
                .map((seg, idx) => (
                  <div
                    key={idx}
                    className="timeline-segment"
                    style={{
                      left: `${(seg.start / totalDuration) * 100}%`,
                      width: `${(seg.duration / totalDuration) * 100}%`,
                      background: SPEAKER_COLORS[si % SPEAKER_COLORS.length],
                    }}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpeakerTimeline;
