import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ProcessingStatus from "../components/ProcessingStatus";
import { processingSteps } from "../data/documents";

const DocumentProcessing = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (stepIndex >= processingSteps.length) {
      setDone(true);
      return;
    }
    const timer = setTimeout(() => setStepIndex((i) => i + 1), 700);
    return () => clearTimeout(timer);
  }, [stepIndex]);

  return (
    <div className="processing-shell fade-in">
      <h1>Processing your documents</h1>
      <p>Our system is reading and organizing the information from your uploaded files.</p>

      <div className="doc-preview-box">
        <div style={{ fontSize: "2.4rem" }} aria-hidden="true">📄</div>
        <p style={{ margin: "8px 0 0" }}>Blood_Test_Report.pdf</p>
      </div>

      <ProcessingStatus steps={processingSteps} currentIndex={stepIndex} />

      {done && (
        <Button size="lg" onClick={() => navigate("/documents/review")}>
          Continue to Review
        </Button>
      )}
    </div>
  );
};

export default DocumentProcessing;
