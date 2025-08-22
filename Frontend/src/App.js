import React from "react";
import Upload from "./Upload";
import "./App.css";
import bg from "./farm.png"; // ✅ Import your local background image

function App() {
  return (
    <div className="app-bg" style={{ backgroundImage: `url(${bg})` }}>
      <div className="app-container">
        <h1>🥔 Potato Disease Classifier</h1>
        <p>Upload a potato leaf image and get instant disease detection results.</p>
        <Upload />
      </div>
    </div>
  );
}

export default App;
