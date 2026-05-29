
import { FiPlay } from "react-icons/fi";

const SegmentsTable = ({
  diarizationData,
  audioRef
}) => {

  const playSegment = (startTime) => {

    if (!audioRef.current) return;

    audioRef.current.currentTime = startTime;

    audioRef.current.play();
  };

  return (

    <div className="glass-card table-card">

      <div className="table-top">

        <h2 className="table-title">

          Detected Segments

        </h2>

        <p className="table-subtitle">

          Real-time diarization output

        </p>

      </div>

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

          {

            diarizationData.map((segment,index)=>(

              <tr
                key={index}
                className="segment-row"
              >

                <td>

                  <div className="speaker-cell">

                    <div className="speaker-dot pink"></div>

                    {segment.speaker}

                  </div>

                </td>

                <td>
                  {segment.start}s
                </td>

                <td>
                  {segment.end}s
                </td>

                <td>
                  {segment.duration}s
                </td>

                <td>

                  <button
                    className="mini-play"
                    onClick={() =>
                      playSegment(segment.start)
                    }
                  >

                    <FiPlay />

                  </button>

                </td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>
  );
};

export default SegmentsTable;

