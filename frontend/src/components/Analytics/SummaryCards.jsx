

const SummaryCards = ({ diarizationData }) => {
  const totalSegments = diarizationData.length;
  const speakers = [

    ...new Set(
      diarizationData.map(
        item => item.speaker
      )
    )

  ];

  const totalSpeakers = speakers.length;
  const totalDuration =
    diarizationData.length
      ? diarizationData[diarizationData.length - 1].end
      : 0;

  return (

    <>
      <div className="summary-card">

        <div className="summary-label">

          Total Duration

        </div>

        <div className="summary-value">

          {totalDuration.toFixed(1)}s

        </div>

      </div>
      <div className="summary-card">

        <div className="summary-label">

          Total Speakers

        </div>

        <div className="summary-value">

          {totalSpeakers}

        </div>

      </div>
      <div className="summary-card">

        <div className="summary-label">

          Total Segments

        </div>

        <div className="summary-value">

          {totalSegments}

        </div>

      </div>
      <div className="summary-card chart-card">

        <h3 className="chart-title">

          Speaker Distribution

        </h3>

        <p className="chart-subtitle">

          Conversational dominance

        </p>
        <div className="donut-wrapper">

          <div
            className="donut-chart"
            style={{

              background: `conic-gradient(

                #ff4fa3 0% 38%,

                #a855f7 38% 70%,

                #fb7185 70% 100%

              )`

            }}
          >

            <div className="donut-center">

              {totalSpeakers}

            </div>

          </div>

        </div>
        <div className="chart-legend">

          {

            speakers.map((speaker,index)=>(

              <div
                className="legend-item"
                key={index}
              >

                <div className="legend-left">

                  <div
                    className={`legend-dot ${
                      index === 0
                      ? "pink"
                      : index === 1
                      ? "purple"
                      : "orange"
                    }`}
                  ></div>

                  {speaker}

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </>

  );
};

export default SummaryCards;

