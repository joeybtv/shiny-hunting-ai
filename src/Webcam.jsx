import Webcam from "react-webcam";

function TestWebcam() {
  return (
    <div className="container">
      <Webcam height={600} width={600} />
    </div>
  );
}

export default function TestWebcamVisual() {
  return (
    <div className="App">
      <TestWebcam />
    </div>
  );
}