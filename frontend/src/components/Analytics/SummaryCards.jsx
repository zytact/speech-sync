const SPEAKER_COLORS = ["#cc0066", "#a855f7", "#fb7185"];

const SummaryCards = ({ diarizationData }) => {
  const totalSegments = diarizationData.length;

  const speakers = [...new Set(diarizationData.map(item => item.speaker))];
  const totalSpeakers = speakers.length;

  const totalDuration =
    diarizationData.length
      ? diarizationData[diarizationData.length - 1].end
      : 0;

  const speakerDurations = speakers.map(speaker =>
    diarizationData
      .filter(s => s.speaker === speaker)
      .reduce((acc, s) => acc + s.duration, 0)
  );

  return (
    <div className="stats-strip">
      <div className="stats-row">
        <span className="stats-label">Duration</span>
        <span className="stats-value">{totalDuration > 0 ? `${totalDuration.toFixed(1)}s` : "—"}</span>
      </div>
      <div className="stats-row">
        <span className="stats-label">Speakers</span>
        <span className="stats-value">{totalSpeakers > 0 ? totalSpeakers : "—"}</span>
      </div>
      <div className="stats-row">
        <span className="stats-label">Segments</span>
        <span className="stats-value">{totalSegments > 0 ? totalSegments : "—"}</span>
      </div>

      {totalSpeakers > 0 && (
        <div className="distribution-section">
          <div className="distribution-heading">Distribution</div>
          <div className="distribution-bar-track">
            {speakerDurations.map((dur, i) => (
              <div
                key={i}
                className="distribution-bar-segment"
                style={{
                  width: `${(dur / totalDuration) * 100}%`,
                  background: SPEAKER_COLORS[i % SPEAKER_COLORS.length],
                }}
              />
            ))}
          </div>
          <div className="distribution-legend">
            {speakers.map((speaker, i) => (
              <div className="dist-legend-item" key={speaker}>
                <div
                  className="dist-legend-dot"
                  style={{ background: SPEAKER_COLORS[i % SPEAKER_COLORS.length] }}
                />
                <span>{speaker}</span>
                <span style={{ marginLeft: "auto", color: "#636366", fontWeight: 500 }}>
                  {totalDuration > 0
                    ? `${Math.round((speakerDurations[i] / totalDuration) * 100)}%`
                    : "—"}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryCards;
