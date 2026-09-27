import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ClinicalSummary from "../components/ClinicalSummary";
import { patientRecords } from "../data/patients";

const Summary = () => {
  const navigate = useNavigate();
  const record = patientRecords["1042"];

  return (
    <div className="summary-shell fade-in">
      <h1>Your medical history is ready</h1>
      <p>Please review the information before sending it to your healthcare team.</p>

      <div className="card">
        <ClinicalSummary record={record} onEditSection={() => navigate("/history")} />
      </div>

      <p className="privacy-note" style={{ marginTop: 20 }}>
        This summary is generated from the information you provided and must be reviewed by a
        healthcare professional.
      </p>

      <div className="text-center" style={{ marginTop: 24 }}>
        <Button size="lg" onClick={() => navigate("/complete")}>Submit to Doctor</Button>
      </div>
    </div>
  );
};

export default Summary;
