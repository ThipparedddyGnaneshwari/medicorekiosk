import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="site-header">
      <div className="container inner">
        <Link to="/" className="brand">
          <span className="brand-mark" aria-hidden="true">M</span>
          MediKiosk
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link to="/#how-it-works">How It Works</Link>
          <Link to="/#for-patients">For Patients</Link>
          <Link to="/doctor/login">For Doctors</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/help">Help</Link>
        </nav>
        <div className="header-actions">
          <Button variant="secondary" onClick={() => navigate("/doctor/login")}>
            Doctor Login
          </Button>
          <Button variant="primary" onClick={() => navigate("/language")}>
            Start Consultation
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
