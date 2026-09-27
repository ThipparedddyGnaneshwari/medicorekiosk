import React from "react";

const ProcessingStatus = ({ steps, currentIndex }) => {
  return (
    <div className="process-steps">
      {steps.map((step, i) => {
        const done = i < currentIndex;
        const active = i === currentIndex;
        return (
          <div
            key={step}
            className={`process-step ${done ? "done" : ""} ${active ? "active" : ""}`}
          >
            {done ? (
              <span className="step-check" aria-hidden="true">✓</span>
            ) : active ? (
              <span className="spinner" aria-hidden="true"></span>
            ) : (
              <span className="step-check pending" aria-hidden="true">•</span>
            )}
            <span>{step}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProcessingStatus;
