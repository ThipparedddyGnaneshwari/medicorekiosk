import React from "react";
import { useNavigate } from "react-router-dom";
import PatientCard from "../components/PatientCard";
import ProgressBar from "../components/ProgressBar";
import { currentPatient } from "../data/patients";

const PatientDashboard = () => {
  const navigate = useNavigate();

  const actions = [
    { icon: "📝", title: "Continue History", desc: "Resume your clinical interview", path: "/history" },
    { icon: "📄", title: "Upload Medical Documents", desc: "Add prescriptions and reports", path: "/documents" },
    { icon: "🔍", title: "Review My Information", desc: "See your summary so far", path: "/summary" },
    { icon: "❓", title: "Need Help?", desc: "Get assistance at any time", path: "/help" },
  ];

  return (
    <div className="kiosk-shell fade-in">
      <div className="dashboard-header">
        <h1>Good morning, {currentPatient.name.split(" ")[0]}</h1>
        <p>Let's prepare your medical history.</p>
      </div>

      <div className="dashboard-grid">
        <div className="flex-col gap-5">
          <div className="action-cards">
            {actions.map((a) => (
              <div key={a.title} className="card card-hover action-card" onClick={() => navigate(a.path)}>
                <div className="icon-circle" aria-hidden="true">{a.icon}</div>
                <div>
                  <h3 style={{ marginBottom: 4 }}>{a.title}</h3>
                  <p style={{ margin: 0 }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <PatientCard patient={currentPatient} />
        </div>

        <div className="card completion-card">
          <h3>History Completion</h3>
          <div className="completion-percent">{currentPatient.historyCompletion}%</div>
          <ProgressBar percent={currentPatient.historyCompletion} />
          <p className="privacy-note" style={{ marginTop: 20, textAlign: "left" }}>
            Please answer as accurately as possible. Your doctor will review the information
            before using it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
