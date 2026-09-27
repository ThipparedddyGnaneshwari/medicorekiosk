import React from "react";

const MicrophoneButton = ({ listening, onClick, disabled }) => {
  return (
    <button
      type="button"
      className={`mic-button ${listening ? "listening" : ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={listening}
      aria-label={listening ? "Stop listening" : "Tap to speak"}
    >
      {listening ? "●" : "🎤"}
    </button>
  );
};

export default MicrophoneButton;
