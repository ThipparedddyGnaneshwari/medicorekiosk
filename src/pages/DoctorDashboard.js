import React from "react";
import Sidebar from "../components/Sidebar";
import DoctorPatientCard from "../components/DoctorPatientCard";
import { doctorQueue } from "../data/patients";

const DoctorDashboard = () => {
  const stats = [
    { label: "Today's Patients", value: doctorQueue.length },
    { label: "Waiting", value: doctorQueue.filter((p) => p.status === "waiting").length },
    { label: "History Ready", value: doctorQueue.filter((p) => p.status === "ready").length },
    { label: "Priority Alerts", value: doctorQueue.filter((p) => p.status === "priority").length },
  ];

  return (
    <div className="doctor-shell">
      <Sidebar />
      <div className="doctor-content">
        <div className="section-title-row">
          <div>
            <h1>Doctor Dashboard</h1>
            <p>General Medicine — Today's patient queue</p>
          </div>
          <span className="badge badge-ai">AI-generated drafts — physician verification required</span>
        </div>

        <div className="stat-grid">
          {stats.map((s) => (
            <div className="card stat-card" key={s.label}>
              <div className="stat-number">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="card">
          <h3>Patient Queue</h3>
          <table className="queue-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Patient</th>
                <th>Age</th>
                <th>Complaint</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {doctorQueue.map((p) => (
                <DoctorPatientCard key={p.id} patient={p} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
