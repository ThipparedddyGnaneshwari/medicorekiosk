import React from "react";
import MicrophoneButton from "./MicrophoneButton";

const VoiceAssistant = ({ question, subtitle, listening, onMicClick, disabled }) => {
  return (
    <div className="ai-message-box fade-in">
      <h3>{question}</h3>
      {subtitle && <p>{subtitle}</p>}
      <div className="mic-wrap">
        <MicrophoneButton listening={listening} onClick={onMicClick} disabled={disabled} />
        {listening ? (
          <>
            <div className="mic-status">Listening...</div>
            <div className="sound-wave" aria-hidden="true">
              <span style={{ height: "10px" }}></span>
              <span style={{ height: "24px" }}></span>
              <span style={{ height: "32px" }}></span>
              <span style={{ height: "18px" }}></span>
              <span style={{ height: "26px" }}></span>
            </div>
          </>
        ) : (
          <div className="mic-status">Tap to Speak</div>
        )}
      </div>
    </div>
  );
};

export default VoiceAssistant;
