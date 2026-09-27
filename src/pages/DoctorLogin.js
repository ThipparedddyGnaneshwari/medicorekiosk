import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const DoctorLogin = () => {
  const [hospitalId, setHospitalId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication — any non-empty values succeed in this prototype.
    navigate("/doctor");
  };

  return (
    <div className="login-shell card fade-in">
      <h1 className="text-center">Doctor Sign In</h1>
      <p className="text-center">Access the clinical review dashboard.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="hospitalId">Hospital ID</label>
          <input
            id="hospitalId"
            type="text"
            value={hospitalId}
            onChange={(e) => setHospitalId(e.target.value)}
            placeholder="e.g. HSP-0021"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="doctorId">Doctor ID</label>
          <input
            id="doctorId"
            type="text"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            placeholder="e.g. DOC-1042"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>
        <Button type="submit" fullWidth size="lg">Sign In</Button>
      </form>
      <p className="text-muted text-center" style={{ marginTop: 16 }}>
        This is a prototype login — no real authentication is performed.
      </p>
    </div>
  );
};

export default DoctorLogin;
