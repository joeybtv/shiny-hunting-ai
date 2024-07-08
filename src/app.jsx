import React from "react";

// Import the Home page component
import Home from "./pages/home.jsx";

// Import Webcam.js component
import Webcam from "./Webcam.jsx";

// Import and apply CSS stylesheet
import "./styles/styles.css";

export default function App() {
  return (
    <>
     <Home />
      <Webcam />
    </>
  );
}
