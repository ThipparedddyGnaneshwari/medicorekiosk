import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const faqs = [
  { q: "What if I don't speak any of the listed languages?", a: "Tap 'I Need Language Help' and a staff member will assist you in person." },
  { q: "Can I stop and come back later?", a: "Yes. Your progress is saved and you can resume from the Patient Dashboard." },
  { q: "Will the AI diagnose me?", a: "No. MediKiosk only organizes your information for your doctor — it never provides a diagnosis." },
  { q: "Is my information shared with anyone else?", a: "Your information is only shared with your hospital and treating doctor, after your consent." },
];

const Help = () => {
  const [modal, setModal] = useState(null);

  return (
    <div className="page">
      <Header />
      <main className="main">
        <div className="container section">
          <h1 className="text-center">Help &amp; Support</h1>
          <p className="text-center" style={{ maxWidth: 520, margin: "0 auto 32px" }}>
            If you're stuck at any point, choose an option below.
          </p>

          <div className="help-buttons-grid">
            <button className="help-btn" onClick={() => setModal("tech")}>🛠 I Need Technical Help</button>
            <button className="help-btn" onClick={() => setModal("lang")}>🌐 I Need Language Help</button>
            <button className="help-btn" onClick={() => setModal("staff")}>🧑‍⚕️ Call Hospital Staff</button>
            <button className="help-btn" onClick={() => setModal("restart")}>🔄 Restart Session</button>
          </div>

          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((f) => (
              <div className="card" key={f.q}>
                <h3>{f.q}</h3>
                <p style={{ margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {modal && (
        <Modal
          title={
            modal === "tech" ? "Technical Help" :
            modal === "lang" ? "Language Help" :
            modal === "staff" ? "Calling Staff" : "Restart Session"
          }
          onClose={() => setModal(null)}
        >
          <p>
            {modal === "tech" && "A technical support member has been notified and will assist you shortly."}
            {modal === "lang" && "A staff member who speaks your language has been notified."}
            {modal === "staff" && "Hospital staff have been alerted to come to your kiosk."}
            {modal === "restart" && "Your session progress will be cleared and you'll return to the Home screen."}
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Help;
