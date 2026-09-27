import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand" style={{ color: "#fff" }}>
            <span className="brand-mark" aria-hidden="true">M</span>
            MediKiosk
          </div>
          <p style={{ color: "#BFD8DE", marginTop: 12, maxWidth: 320 }}>
            Complete your medical history before you meet your doctor.
          </p>
        </div>
        <div>
          <h3 style={{ color: "#fff", fontSize: "1rem" }}>Patients</h3>
          <ul>
            <li><Link to="/language">Start Consultation</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </div>
        <div>
          <h3 style={{ color: "#fff", fontSize: "1rem" }}>Clinical Staff</h3>
          <ul>
            <li><Link to="/doctor/login">Doctor Login</Link></li>
            <li><Link to="/doctor">Doctor Dashboard</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; 2026 MediKiosk. Prototype for demonstration only.</span>
        <span>Not a substitute for professional medical judgment.</span>
      </div>
    </footer>
  );
};

export default Footer;
