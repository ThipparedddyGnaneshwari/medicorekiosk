import React from "react";

const ProgressBar = ({ percent, label }) => {
  const safePercent = Math.max(0, Math.min(100, percent));
  return (
    <div className="progress-wrap">
      {label && (
        <div className="progress-label">
          <span>{label}</span>
          <span>{safePercent}%</span>
        </div>
      )}
      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={safePercent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-fill" style={{ width: `${safePercent}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
