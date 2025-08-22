import React, { useState } from "react";
import axios from "axios";

function Upload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setPreview(URL.createObjectURL(uploadedFile));
  };

  const handleUpload = async () => {
    if (!file) return alert("Please upload an image first.");

    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("http://localhost:8000/predict", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setResult(response.data);
  };

  // ✅ Clear function
  const handleClear = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
  };

  return (
    <div className="upload-box">
      <input type="file" onChange={handleFileChange} />
      <br />
      <button onClick={handleUpload}>Predict</button>
      <button
        onClick={handleClear}
        style={{
          marginLeft: "10px",
          background: "#d32f2f",
          backgroundImage: "linear-gradient(90deg, #e57373, #c62828)",
        }}
      >
        Clear
      </button>

      {preview && (
        <div className="preview-box">
          <img src={preview} alt="preview" />
        </div>
      )}

      {result && (
        <div className="result-box">
          <h3>Prediction: {result.class}</h3>
          <p>Confidence: {(result.confidence * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}

export default Upload;
