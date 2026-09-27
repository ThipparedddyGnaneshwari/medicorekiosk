import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import AlertCard from "../components/AlertCard";
import MedicalTimeline from "../components/MedicalTimeline";
import Modal from "../components/Modal";
import { doctorQueue, patientRecords } from "../data/patients";

const DoctorPatientView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(null);

  const patient = doctorQueue.find((p) => p.id === id);
  const record = patientRecords[id];

  if (!patient || !record) {
    return (
      <div className="doctor-shell">
        <Sidebar />
        <div className="doctor-content">
          <h2>Patient not found</h2>
          <Button onClick={() => navigate("/doctor")}>Back to Dashboard</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="doctor-shell">
      <Sidebar />
      <div className="doctor-content">
        <div className="section-title-row">
          <div>
            <h1>{patient.name}</h1>
            <p>
              Token {patient.token} · Age {patient.age} · {patient.gender} · {patient.department}
            </p>
          </div>
          <span className="badge badge-verify">AI-generated draft — Physician verification required</span>
        </div>

        {record.priorityAlert && (
          <div style={{ marginBottom: 20 }}>
            <AlertCard type="priority" title="Priority Alert">
              This patient's intake responses were flagged for priority review. This is a
              triage flag, not a diagnosis.
            </AlertCard>
          </div>
        )}

        <div className="patient-view-grid">
          <div className="flex-col gap-4">
            <div className="card">
              <h3>Chief Complaint</h3>
              <p>{record.chiefComplaint}</p>
            </div>

            <div className="card">
              <h3>History of Present Illness</h3>
              <p>{record.hpi}</p>
            </div>

            <div className="card">
              <h3>Past Medical History</h3>
              {record.pastMedicalHistory.map((h, i) => <span className="tag-pill" key={i}>{h}</span>)}
              <h3 style={{ marginTop: 16 }}>Past Surgical History</h3>
              {record.pastSurgicalHistory.map((h, i) => <span className="tag-pill" key={i}>{h}</span>)}
            </div>

            <div className="card">
              <h3>Medications</h3>
              <div className="med-list">
                {record.medications.map((m, i) => (
                  <div className="med-row" key={i}>
                    <span>{m.name}</span>
                    <span className="text-muted">{m.dose} · {m.frequency}</span>
                  </div>
                ))}
              </div>
              <h3 style={{ marginTop: 16 }}>Allergies</h3>
              {record.allergies.map((a, i) => <span className="tag-pill" key={i}>{a}</span>)}
            </div>

            <div className="card">
              <h3>Family History</h3>
              {record.familyHistory.map((f, i) => <span className="tag-pill" key={i}>{f}</span>)}
              <h3 style={{ marginTop: 16 }}>Personal History</h3>
              {record.personalHistory.map((p, i) => <span className="tag-pill" key={i}>{p}</span>)}
            </div>

            <div className="card">
              <h3>Review of Systems</h3>
              <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
                {record.reviewOfSystems.map((r, i) => (
                  <li key={i} style={{ marginBottom: 6 }}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>Previous Investigations</h3>
              {record.investigations.length === 0 ? (
                <p className="text-muted">No investigation reports available.</p>
              ) : (
                <table className="data-table">
                  <thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead>
                  <tbody>
                    {record.investigations.map((inv, i) => (
                      <tr key={i}>
                        <td>{inv.test}</td>
                        <td className={inv.abnormal ? "abnormal" : ""}>{inv.result}</td>
                        <td>{inv.reference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className="card">
              <h3>Medical Timeline</h3>
              <MedicalTimeline items={record.timeline} />
            </div>
          </div>

          <div className="flex-col gap-4">
            <div className="card">
              <h3>AI Notes</h3>
              <span className="badge badge-ai" style={{ marginBottom: 10, display: "inline-block" }}>
                AI-generated summary
              </span>
              <p>{record.aiNotes}</p>
              <p className="text-muted" style={{ marginBottom: 0 }}>
                Information provided by patient. Clinical verification required.
              </p>
            </div>

            <div className="card">
              <h3>Physician Actions</h3>
              <div className="physician-actions" style={{ flexDirection: "column" }}>
                <Button fullWidth variant="secondary" onClick={() => setModal("edit")}>Edit</Button>
                <Button fullWidth variant="success" onClick={() => setModal("confirm")}>Confirm History</Button>
                <Button fullWidth variant="secondary" onClick={() => setModal("clarify")}>Request Clarification</Button>
                <Button fullWidth onClick={() => setModal("reviewed")}>Mark Reviewed</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <Modal
          title={
            modal === "edit" ? "Edit History" :
            modal === "confirm" ? "Confirm History" :
            modal === "clarify" ? "Request Clarification" : "Mark Reviewed"
          }
          onClose={() => setModal(null)}
        >
          <p>
            {modal === "edit" && "In the full product, this would open an editable version of the patient's history for you to amend directly."}
            {modal === "confirm" && "This history has been marked as confirmed by the reviewing physician."}
            {modal === "clarify" && "A clarification request has been sent back to the patient's kiosk session."}
            {modal === "reviewed" && "This patient's record has been marked as reviewed."}
          </p>
          <Button onClick={() => setModal(null)}>Close</Button>
        </Modal>
      )}
    </div>
  );
};

export default DoctorPatientView;
