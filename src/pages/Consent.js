import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Modal from "../components/Modal";

const Consent = () => {
  const [checked, setChecked] = useState(false);
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [announcing, setAnnouncing] = useState(false);
  const navigate = useNavigate();

  const handleListen = () => {
    setAnnouncing(true);
    setTimeout(() => setAnnouncing(false), 2500);
  };

  return (
    <div className="kiosk-shell fade-in">
      <h1 className="text-center">Your privacy matters</h1>
      <p className="text-center">Please read the points below before continuing.</p>

      <div className="text-center" style={{ marginBottom: 16 }}>
        <Button variant="secondary" onClick={handleListen}>🔊 Listen to Explanation</Button>
        {announcing && <p className="text-muted" role="status">Playing audio explanation...</p>}
      </div>

      <div className="consent-cards">
        <div className="card">
          <h3>Medical History</h3>
          <p>We will ask questions about your health to prepare your medical history.</p>
        </div>
        <div className="card">
          <h3>Medical Documents</h3>
          <p>You can upload previous prescriptions, reports, and discharge summaries.</p>
        </div>
        <div className="card">
          <h3>Sharing</h3>
          <p>Your information can be shared with your hospital and doctor after you provide consent.</p>
        </div>
      </div>

      <label className="consent-checkbox-row">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span>I understand and consent to the collection and processing of my health information.</span>
      </label>

      <div className="consent-actions">
        <Button size="lg" disabled={!checked} onClick={() => navigate("/patient")}>
          Give Consent &amp; Continue
        </Button>
        <Button size="lg" variant="secondary" onClick={() => setShowDeclineModal(true)}>
          I Don't Consent
        </Button>
      </div>

      {showDeclineModal && (
        <Modal title="Consent required" onClose={() => setShowDeclineModal(false)}>
          <p>
            We understand. Without your consent, we cannot digitally prepare your medical
            history. A hospital staff member can assist you in person instead.
          </p>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        </Modal>
      )}
    </div>
  );
};

export default Consent;
