import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Complete = () => {
  const navigate = useNavigate();
  return (
    <div className="complete-shell fade-in">
      <div className="success-check" aria-hidden="true">✓</div>
      <h1>Your history has been submitted.</h1>
      <p>Your healthcare team can now review your information before your consultation.</p>

      <div className="card" style={{ textAlign: "left", margin: "24px 0" }}>
        <div className="info-grid">
          <div className="info-item">
            <div className="label">Session ID</div>
            <div className="value">MK-2026-00124</div>
          </div>
          <div className="info-item">
            <div className="label">Department</div>
            <div className="value">General Medicine</div>
          </div>
          <div className="info-item">
            <div className="label">Status</div>
            <div className="value">Ready for Doctor Review</div>
          </div>
        </div>
      </div>

      <div className="flex gap-3" style={{ justifyContent: "center" }}>
        <Button variant="secondary" onClick={() => navigate("/summary")}>View Summary</Button>
        <Button onClick={() => navigate("/")}>Return Home</Button>
      </div>
    </div>
  );
};

export default Complete;
