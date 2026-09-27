import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import MedicalTimeline from "../components/MedicalTimeline";
import { extractedDocumentData } from "../data/documents";

const DocumentReview = () => {
  const navigate = useNavigate();
  const data = extractedDocumentData;

  return (
    <div className="review-shell fade-in">
      <h1>Review extracted information</h1>
      <p>Please check that the details below were read correctly from your documents.</p>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3>Diagnoses</h3>
        {data.diagnoses.map((d) => (
          <span className="tag-pill" key={d}>{d}</span>
        ))}
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3>Medications</h3>
        <div className="med-list">
          {data.medications.map((m) => (
            <div className="med-row" key={m.name}>
              <span>{m.name}</span>
              <span className="text-muted">{m.dose}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3>Investigations</h3>
        <table className="data-table">
          <thead>
            <tr><th>Test</th><th>Result</th><th>Reference</th></tr>
          </thead>
          <tbody>
            {data.investigations.map((inv) => (
              <tr key={inv.test}>
                <td>{inv.test}</td>
                <td className={inv.abnormal ? "abnormal" : ""}>{inv.result}</td>
                <td>{inv.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3>Medical Timeline</h3>
        <MedicalTimeline items={data.timeline} />
      </div>

      <p className="privacy-note">
        This information was extracted automatically and must be reviewed by your healthcare team.
      </p>

      <div className="text-center">
        <Button size="lg" onClick={() => navigate("/summary")}>Confirm Information</Button>
      </div>
    </div>
  );
};

export default DocumentReview;
