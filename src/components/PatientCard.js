import React from "react";

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const PatientCard = ({ patient }) => {
  return (
    <div className="card patient-card">
      <div className="avatar-circle" aria-hidden="true">
        {initials(patient.name)}
      </div>
      <div className="info-grid" style={{ flex: 1 }}>
        <div className="info-item">
          <div className="label">Patient Name</div>
          <div className="value">{patient.name}</div>
        </div>
        <div className="info-item">
          <div className="label">Patient ID</div>
          <div className="value">{patient.id}</div>
        </div>
        <div className="info-item">
          <div className="label">Language</div>
          <div className="value">{patient.language}</div>
        </div>
        <div className="info-item">
          <div className="label">Department</div>
          <div className="value">{patient.department}</div>
        </div>
        <div className="info-item">
          <div className="label">Token</div>
          <div className="value">{patient.token}</div>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
