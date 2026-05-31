
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

const EmptyWorkspace = () => (
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
      <svg className="signal-diagram" viewBox="0 0 720 150" role="img" aria-label="Audio signal separated into speaker segments">
        <path className="signal-diagram-axis" d="M28 76H692" />
        <path className="signal-diagram-wave" d="M28 76C48 76 48 45 68 45S88 107 108 107S128 56 148 56S168 93 188 93S208 40 228 40S248 112 268 112S288 68 308 68S328 88 348 88S368 51 388 51S408 102 428 102S448 61 468 61S488 89 508 89S528 45 548 45S568 110 588 110S608 70 628 70S648 92 668 92S688 76 692 76" />
        <g className="signal-diagram-segments">
          <rect x="62" y="30" width="116" height="18" rx="0" />
          <rect x="212" y="102" width="142" height="18" rx="0" />
          <rect x="402" y="44" width="126" height="18" rx="0" />
          <rect x="562" y="98" width="92" height="18" rx="0" />
        </g>
        <g className="signal-diagram-labels">
          <text x="62" y="24">SPEAKER A</text>
          <text x="212" y="138">SPEAKER B</text>
          <text x="402" y="38">SPEAKER C</text>
          <text x="562" y="134">SPEAKER A</text>
        </g>
      </svg>
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
              ? <EmptyWorkspace />
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

