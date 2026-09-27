import React from "react";

const MedicalTimeline = ({ items }) => {
  if (!items || items.length === 0) {
    return <p className="text-muted">No timeline events recorded yet.</p>;
  }
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <div className="timeline-item" key={i}>
          <div className="timeline-date">{item.date}</div>
          <div>{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default MedicalTimeline;
