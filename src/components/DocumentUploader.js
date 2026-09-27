import React, { useRef, useState } from "react";
import Button from "./Button";
import { documentTypes } from "../data/documents";

const DocumentUploader = ({ onFilesAdded }) => {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = (fileList) => {
    const files = Array.from(fileList || []).map((f, i) => ({
      id: `upload-${Date.now()}-${i}`,
      name: f.name,
      type: documentTypes[0],
    }));
    if (files.length > 0) onFilesAdded(files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const simulateScan = () => {
    onFilesAdded([
      { id: `scan-${Date.now()}`, name: "Scanned_Document.jpg", type: "Prescription" },
    ]);
  };

  return (
    <div
      className={`upload-area ${dragging ? "dragging" : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
    >
      <div className="upload-icon" aria-hidden="true">⬆</div>
      <h3>Drag &amp; drop your documents here</h3>
      <p>Prescriptions, lab reports, discharge summaries, imaging reports, or other records.</p>
      <div className="upload-actions">
        <Button variant="primary" onClick={() => inputRef.current.click()}>
          Browse Files
        </Button>
        <Button variant="secondary" onClick={simulateScan}>
          Camera / Scan Document
        </Button>
      </div>
      <input
        ref={inputRef}
        type="file"
        multiple
        style={{ display: "none" }}
        onChange={(e) => handleFiles(e.target.files)}
        aria-hidden="true"
      />
      <div className="doc-type-row">
        {documentTypes.map((t) => (
          <span key={t} className="doc-type-pill">{t}</span>
        ))}
      </div>
    </div>
  );
};

export default DocumentUploader;
