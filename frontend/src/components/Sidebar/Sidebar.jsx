
import {
  FiGrid,
  FiUpload,
  FiFolder,
  FiBarChart2,
  FiCpu
} from "react-icons/fi";

import SignalMark from "../Brand/SignalMark";

import "../../styles/sidebar.css";

const Sidebar = ({ openFilePicker }) => {

  return (

    <div className="sidebar">

      <div>
        <div className="logo-container">

          <div className="logo-icon">

            <SignalMark />

          </div>

          <div>

            <h1 className="logo">

              SpeechSync

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

    </div>

  );
};

export default Sidebar;

