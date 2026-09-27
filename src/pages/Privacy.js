import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const items = [
  { title: "Data Privacy", text: "Your health information is stored securely and only used to prepare your medical history." },
  { title: "Consent", text: "Nothing is collected or shared without your explicit consent, given in simple language before you begin." },
  { title: "Secure Processing", text: "Documents and answers are processed in a protected environment designed for healthcare data." },
  { title: "Session Termination", text: "You can end your session at any time, and your kiosk session closes automatically after you finish." },
  { title: "Patient Control", text: "You can review, edit, or withdraw information you've provided before it is sent to your doctor." },
  { title: "ABDM Integration", text: "MediKiosk is designed to be compatible with India's Ayushman Bharat Digital Mission (ABDM) framework." },
  { title: "Physician Verification", text: "Every AI-generated summary is reviewed and verified by a licensed physician before being used clinically." },
];

const Privacy = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <div className="container section">
          <h1 className="text-center">Privacy &amp; Data Protection</h1>
          <p className="text-center" style={{ maxWidth: 560, margin: "0 auto 32px" }}>
            We explain how your information is collected, used and protected — in plain language.
          </p>
          <div className="privacy-grid">
            {items.map((item) => (
              <div className="card card-hover" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
