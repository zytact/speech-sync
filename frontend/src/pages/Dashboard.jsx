
import { useRef, useState } from "react";

import "../styles/dashboard.css";

import Sidebar from "../components/Sidebar/Sidebar";

import UploadCard from "../components/Upload/UploadCard";
import MainCard from "../components/Cards/MainCard";
import SpeakerTimeline from "../components/Timeline/SpeakerTimeline";
import SegmentsTable from "../components/Tables/SegmentsTable";
import SummaryCards from "../components/Analytics/SummaryCards";

const GHOST_ROWS = [
  { color: "#cc0066", segs: [{l:3,w:18},{l:34,w:12},{l:60,w:20}] },
  { color: "#a855f7", segs: [{l:12,w:24},{l:52,w:10},{l:74,w:14}] },
  { color: "#fb7185", segs: [{l:6,w:10},{l:40,w:16},{l:68,w:18}] },
];

const EmptyWorkspace = ({ onUpload }) => (
  <div className="empty-workspace">
    <div className="empty-prompt">
      <p className="empty-heading">Upload a recording to begin.</p>
      <p className="empty-body">
        SpeechSync identifies who speaks when, segments the conversation,
        and returns a structured transcript.
      </p>
    </div>
    <div className="empty-ghost-section">
      <span className="empty-ghost-label">Output preview</span>
      <div className="empty-ghost-timeline">
        {GHOST_ROWS.map((row, i) => (
          <div className="ghost-row" key={i}>
            <div className="ghost-label" />
            <div className="ghost-track">
              {row.segs.map((s, j) => (
                <div
                  key={j}
                  className="ghost-segment"
                  style={{
                    left: `${s.l}%`,
                    width: `${s.w}%`,
                    background: row.color,
                    animationDelay: `${(i * 0.3 + j * 0.15).toFixed(2)}s`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Dashboard = () => {

  const [diarizationData, setDiarizationData] = useState([]);

  const [audioFile, setAudioFile] = useState(null);

  const [audioName, setAudioName] = useState("");

  const audioRef = useRef();

  const fileInputRef = useRef();

  const openFilePicker = () => {

    if (fileInputRef.current) {

      fileInputRef.current.click();
    }
  };

  return (

    <div className="dashboard-layout">
      <Sidebar
        openFilePicker={openFilePicker}
      />
      <main className="dashboard-main">
        <div className="workspace">

          <div className="workspace-left">

            <UploadCard
              setDiarizationData={setDiarizationData}
              setAudioFile={setAudioFile}
              setAudioName={setAudioName}
              fileInputRef={fileInputRef}
            />

            <MainCard
              audioFile={audioFile}
              audioName={audioName}
              audioRef={audioRef}
            />

            <SummaryCards
              diarizationData={diarizationData}
            />

          </div>

          <div className="workspace-right">

            {diarizationData.length === 0
              ? <EmptyWorkspace onUpload={openFilePicker} />
              : <>
                  <SpeakerTimeline diarizationData={diarizationData} />
                  <SegmentsTable diarizationData={diarizationData} audioRef={audioRef} />
                </>
            }

          </div>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;

