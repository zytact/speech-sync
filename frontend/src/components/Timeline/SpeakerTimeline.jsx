
const SpeakerTimeline = ({ diarizationData }) => {
  const speakers = [

    ...new Set(
      diarizationData.map(
        item => item.speaker
      )
    )

  ];
  const totalDuration =
    diarizationData.length
      ? diarizationData[diarizationData.length - 1].end
      : 1;
  const colors = [

    "#ff4fa3",
    "#a855f7",
    "#fb7185",
    "#ec4899",
    "#d946ef"

  ];

  return (

    <div className="glass-card timeline-card">
      <div className="timeline-top">

        <div>

          <h2 className="timeline-title">

            Speaker Timeline

          </h2>

          <p className="timeline-subtitle">

            SpeechSync detected conversational segments

          </p>

        </div>

      </div>
      <div className="timeline-wrapper">

        {

          speakers.map((speaker,speakerIndex)=>(

            <div
              className="timeline-row"
              key={speaker}
            >
              <div className="timeline-speaker">

                {speaker}

              </div>
              <div className="timeline-track">

                {

                  diarizationData

                    .filter(
                      item => item.speaker === speaker
                    )

                    .map((segment,index)=>{

                      const left =
                        (segment.start / totalDuration) * 100;

                      const width =
                        (segment.duration / totalDuration) * 100;

                      return (

                        <div
                          key={index}
                          className="timeline-segment"
                          style={{

                            left:`${left}%`,

                            width:`${width}%`,

                            background:
                              colors[
                                speakerIndex % colors.length
                              ]

                          }}
                        ></div>
                      );
                    })

                }

              </div>

            </div>

          ))

        }

      </div>

    </div>
  );
};

export default SpeakerTimeline;

