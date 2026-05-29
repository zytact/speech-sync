
import { useRef, useState } from "react";

import "../styles/dashboard.css";

import Sidebar from "../components/Sidebar/Sidebar";

import UploadCard from "../components/Upload/UploadCard";
import MainCard from "../components/Cards/MainCard";
import SpeakerTimeline from "../components/Timeline/SpeakerTimeline";
import SegmentsTable from "../components/Tables/SegmentsTable";
import SummaryCards from "../components/Analytics/SummaryCards";

import waveBg from "../assets/wave-bg.jpg";

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
        <div className="hero-section">

          <div>

            <h1 className="hero-title">

              SpeechSync

            </h1>

            <p className="hero-subtitle">

              Transforming Audio into Structured Conversations

            </p>

          </div>

          <button
            className="hero-upload-btn"
            onClick={openFilePicker}
          >

            Upload New Audio

          </button>

        </div>
        <div className="dashboard-grid">
          <div className="left-column">

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

            <SpeakerTimeline
              diarizationData={diarizationData}
            />

            <SegmentsTable
              diarizationData={diarizationData}
              audioRef={audioRef}
            />

          </div>
          <div className="right-column">

            <SummaryCards
              diarizationData={diarizationData}
            />

            <div className="floating-wave">

              <img
                src={waveBg}
                alt="wave"
              />

            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;

