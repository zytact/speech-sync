
import {
  FiGrid,
  FiUpload,
  FiFolder,
  FiBarChart2,
  FiCpu
} from "react-icons/fi";

import "../../styles/sidebar.css";

const Sidebar = ({ openFilePicker }) => {

  return (

    <div className="sidebar">

      <div>
        <div className="logo-container">

          <div className="logo-icon waveform-logo">

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

          </div>

          <div>

            <h1 className="logo">

              DIAREASE

            </h1>

            <p className="logo-subtitle">

              Speaker Diarization

            </p>

          </div>

        </div>
        <button
          className="upload-new-btn"
          onClick={openFilePicker}
        >

          Upload New Audio

        </button>
        <ul className="nav-links">

          <li className="nav-item active">

            <FiGrid className="nav-icon" />

            Dashboard

          </li>

          <li className="nav-item">

            <FiUpload className="nav-icon" />

            Upload

          </li>

          <li className="nav-item">

            <FiFolder className="nav-icon" />

            Files

          </li>

          <li className="nav-item">

            <FiBarChart2 className="nav-icon" />

            Analytics

          </li>

          <li className="nav-item">

            <FiCpu className="nav-icon" />

            Models

          </li>

        </ul>

      </div>
      <div className="sidebar-signature">

        <div className="signature-line"></div>

        <h3>

          SpeechSync

        </h3>

        <p>

          Transforming Audio into
          Structured Conversations

        </p>

      </div>

    </div>

  );
};

export default Sidebar;

