import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

const steps = [
  { title: "Identify & Consent", text: "Verify your identity with ABHA and give informed consent to continue." },
  { title: "AI-Guided Interview", text: "Answer simple questions by voice or touch, in your preferred language." },
  { title: "Digitize Documents", text: "Scan or upload previous prescriptions, reports and discharge summaries." },
  { title: "Doctor Review", text: "Your doctor reviews and verifies your history before your consultation." },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <Header />
      <main className="main">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <h1>Your medical history. Captured before your consultation.</h1>
              <p style={{ fontSize: "1.1rem" }}>
                Answer a few simple questions, speak in your preferred language, and upload your
                previous medical records. MediKiosk prepares your history for your doctor before
                you enter the consultation room.
              </p>
              <div className="hero-actions">
                <Button size="lg" onClick={() => navigate("/language")}>Start Your History</Button>
                <Button size="lg" variant="secondary" onClick={() => {
                  const el = document.getElementById("how-it-works");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}>
                  How It Works
                </Button>
              </div>
              <div className="trust-row">
                <div className="trust-item">🔒 Secure &amp; Private</div>
                <div className="trust-item">🌐 Multilingual</div>
                <div className="trust-item">🎙 Voice + Touch</div>
                <div className="trust-item">🩺 Doctor Verified</div>
                <div className="trust-item">✅ ABDM Ready</div>
              </div>
            </div>
            <div className="kiosk-illustration" aria-hidden="true">
              <div className="kiosk-frame">
                <div className="kiosk-screen">
                  <div style={{ fontWeight: 700, color: "var(--primary-dark)", marginBottom: 8 }}>
                    MediKiosk
                  </div>
                  <div style={{ background: "var(--primary-light)", borderRadius: 10, padding: 14, marginBottom: 10 }}>
                    "What brings you to the hospital today?"
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    <span className="doc-type-pill">Pain</span>
                    <span className="doc-type-pill">Fever</span>
                    <span className="doc-type-pill">Cough</span>
                  </div>
                </div>
              </div>
              <p className="text-muted" style={{ marginTop: 16 }}>Hospital OPD Kiosk</p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="container">
            <h2 className="text-center">How It Works</h2>
            <p className="text-center" style={{ maxWidth: 560, margin: "0 auto 32px" }}>
              A simple four-step journey designed for every patient, including elderly and
              low-literacy users.
            </p>
            <div className="how-it-works-grid">
              {steps.map((step, i) => (
                <div className="card card-hover" key={step.title}>
                  <div className="step-number">{i + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="for-patients" className="section" style={{ background: "var(--surface-alt)" }}>
          <div className="container text-center">
            <h2>Ready when you are</h2>
            <p style={{ maxWidth: 520, margin: "0 auto 24px" }}>
              Your session is private, can be paused at any time, and everything you share is
              reviewed by a real physician before any decisions are made.
            </p>
            <Button size="lg" onClick={() => navigate("/language")}>Start Your History</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
