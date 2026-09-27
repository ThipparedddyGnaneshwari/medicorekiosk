import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const PatientIdentification = () => {
  const [abhaId, setAbhaId] = useState("");
  const navigate = useNavigate();

  return (
    <div className="kiosk-shell fade-in">
      <h1 className="text-center">Let's identify you</h1>
      <p className="text-center">Choose any one option below to continue.</p>

      <div className="id-options-grid">
        <div className="card id-option-card">
          <div className="icon-circle" aria-hidden="true">ID</div>
          <h3>ABHA ID</h3>
          <div className="form-field">
            <label htmlFor="abha">Enter your ABHA ID</label>
            <input
              id="abha"
              type="text"
              placeholder="e.g. 14-1234-5678-9012"
              value={abhaId}
              onChange={(e) => setAbhaId(e.target.value)}
            />
          </div>
          <Button fullWidth onClick={() => navigate("/consent")}>Continue</Button>
        </div>

        <div className="card id-option-card">
          <div className="icon-circle" aria-hidden="true">QR</div>
          <h3>Scan ABHA QR</h3>
          <div className="qr-box" aria-hidden="true">▦</div>
          <Button fullWidth variant="secondary" onClick={() => navigate("/consent")}>
            Simulate Scan
          </Button>
        </div>

        <div className="card id-option-card">
          <div className="icon-circle" aria-hidden="true">+</div>
          <h3>New Patient</h3>
          <p className="text-muted">Don't have an ABHA ID? Register in a few quick steps.</p>
          <Button fullWidth variant="secondary" onClick={() => navigate("/consent")}>
            Register as New Patient
          </Button>
        </div>
      </div>

      <p className="privacy-note text-center">
        Your information is protected and will only be used with your consent.
      </p>
    </div>
  );
};

export default PatientIdentification;
