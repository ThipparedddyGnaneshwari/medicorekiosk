import React from "react";
import MedicalTimeline from "./MedicalTimeline";

const Section = ({ title, children, onEdit }) => (
  <div className="summary-section">
    <div className="summary-section-head">
      <h3 style={{ margin: 0 }}>{title}</h3>
      {onEdit && (
        <button type="button" className="btn btn-ghost" onClick={onEdit}>
          Edit
        </button>
      )}
    </div>
    {children}
  </div>
);

const ClinicalSummary = ({ record, onEditSection }) => {
  if (!record) return null;
  return (
    <div>
      <Section title="Chief Complaint" onEdit={() => onEditSection && onEditSection("chiefComplaint")}>
        <p>{record.chiefComplaint}</p>
      </Section>

      <Section title="History of Present Illness" onEdit={() => onEditSection && onEditSection("hpi")}>
        <p>{record.hpi}</p>
      </Section>

      <Section title="Past Medical History" onEdit={() => onEditSection && onEditSection("pmh")}>
        {record.pastMedicalHistory.map((item, i) => (
          <span className="tag-pill" key={i}>{item}</span>
        ))}
      </Section>

      <Section title="Past Surgical History" onEdit={() => onEditSection && onEditSection("psh")}>
        {record.pastSurgicalHistory.map((item, i) => (
          <span className="tag-pill" key={i}>{item}</span>
        ))}
      </Section>

      <Section title="Current Medications" onEdit={() => onEditSection && onEditSection("meds")}>
        <div className="med-list">
          {record.medications.map((m, i) => (
            <div className="med-row" key={i}>
              <span>{m.name}</span>
              <span className="text-muted">{m.dose} · {m.frequency}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Drug Allergies" onEdit={() => onEditSection && onEditSection("allergies")}>
        {record.allergies.map((a, i) => (
          <span className="tag-pill" key={i}>{a}</span>
        ))}
      </Section>

      <Section title="Family History" onEdit={() => onEditSection && onEditSection("family")}>
        {record.familyHistory.map((f, i) => (
          <span className="tag-pill" key={i}>{f}</span>
        ))}
      </Section>

      <Section title="Personal History" onEdit={() => onEditSection && onEditSection("personal")}>
        {record.personalHistory.map((p, i) => (
          <span className="tag-pill" key={i}>{p}</span>
        ))}
      </Section>

      <Section title="Review of Systems" onEdit={() => onEditSection && onEditSection("ros")}>
        <ul style={{ paddingLeft: 20, listStyle: "disc" }}>
          {record.reviewOfSystems.map((r, i) => (
            <li key={i} style={{ marginBottom: 6 }}>{r}</li>
          ))}
        </ul>
      </Section>

      <Section title="Previous Investigations" onEdit={() => onEditSection && onEditSection("investigations")}>
        {record.investigations.length === 0 ? (
          <p className="text-muted">No investigation reports uploaded.</p>
        ) : (
          <table className="data-table">
            <thead>
              <tr><th>Test</th><th>Result</th><th>Reference</th></tr>
            </thead>
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
      </Section>

      <Section title="Medical Timeline">
        <MedicalTimeline items={record.timeline} />
      </Section>
    </div>
  );
};

export default ClinicalSummary;
