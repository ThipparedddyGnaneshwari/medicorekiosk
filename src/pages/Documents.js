import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import DocumentUploader from "../components/DocumentUploader";
import DocumentCard from "../components/DocumentCard";
import { sampleUploadedDocuments } from "../data/documents";

const Documents = () => {
  const [docs, setDocs] = useState(sampleUploadedDocuments);
  const navigate = useNavigate();

  const handleFilesAdded = (newFiles) => {
    const withStatus = newFiles.map((f) => ({ ...f, status: "processing" }));
    setDocs((prev) => [...withStatus, ...prev]);
    // Simulate OCR completion after a delay
    withStatus.forEach((f) => {
      setTimeout(() => {
        setDocs((prev) =>
          prev.map((d) => (d.id === f.id ? { ...d, status: "processed" } : d))
        );
      }, 2200);
    });
  };

  return (
    <div className="documents-shell fade-in">
      <h1 className="text-center">Add your previous medical documents</h1>
      <p className="text-center">
        Upload prescriptions, laboratory reports, discharge summaries, or other medical records.
      </p>

      <DocumentUploader onFilesAdded={handleFilesAdded} />

      {docs.length > 0 && (
        <div className="document-list">
          {docs.map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))}
        </div>
      )}

      <div className="text-center" style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center" }}>
        <Button variant="secondary" onClick={() => navigate("/summary")}>Skip for Now</Button>
        <Button onClick={() => navigate("/documents/processing")}>Continue</Button>
      </div>
    </div>
  );
};

export default Documents;
