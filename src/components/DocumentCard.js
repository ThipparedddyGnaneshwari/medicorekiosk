import React from "react";

const DocumentCard = ({ document }) => {
  return (
    <div className="card document-card">
      <div className="document-icon" aria-hidden="true">
        {document.type === "Lab Report" ? "LAB" : "DOC"}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600 }}>{document.name}</div>
        <div className="text-muted" style={{ fontSize: "0.9rem" }}>{document.type}</div>
      </div>
      <span className={`doc-status ${document.status}`}>
        {document.status === "processed" ? "Processed" : "Processing..."}
      </span>
    </div>
  );
};

export default DocumentCard;
