
import { useState } from "react";

import { FiUploadCloud } from "react-icons/fi";

import API from "../../services/api";

const UploadCard = ({
  setDiarizationData,
  setAudioFile,
  setAudioName,
  fileInputRef
}) => {

  const [loading, setLoading] = useState(false);

  const [fileName, setFileName] = useState("");

  const handleUpload = async (event) => {

    const file = event.target.files[0];

    if (!file) return;

    setFileName(file.name);

    setAudioName(file.name);

    const localAudioURL = URL.createObjectURL(file);

    setAudioFile(localAudioURL);

    const formData = new FormData();

    formData.append("file", file);

    try {

      setLoading(true);

      const response = await API.post(
        "/diarize",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      setDiarizationData(
        response.data.segments
      );

    } catch (error) {

      console.error(error);

      alert("Upload failed");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="upload-card">

      <div className="upload-dropzone">

        <FiUploadCloud className="upload-icon" />

        <h3>

          {
            loading
              ? "Analyzing Audio..."
              : "Drag & Drop Audio Here"
          }

        </h3>

        <p>

          {
            fileName
              ? fileName
              : "Upload WAV or MP3 audio"
          }

        </p>

        <input
          type="file"
          accept=".wav,.mp3"
          hidden
          ref={fileInputRef}
          onChange={handleUpload}
        />

        <button
          className="upload-inside-btn"
          onClick={() => fileInputRef.current.click()}
        >

          {
            loading
              ? "Processing..."
              : "Select Audio File"
          }

        </button>

      </div>

    </div>
  );
};

export default UploadCard;

