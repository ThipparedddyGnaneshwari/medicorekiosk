import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import LanguageCard from "../components/LanguageCard";

const languages = [
  { code: "en", native: "English", name: "English" },
  { code: "hi", native: "हिन्दी", name: "Hindi" },
  { code: "bn", native: "বাংলা", name: "Bengali" },
  { code: "mr", native: "मराठी", name: "Marathi" },
  { code: "ta", native: "தமிழ்", name: "Tamil" },
  { code: "te", native: "తెలుగు", name: "Telugu" },
  { code: "kn", native: "ಕನ್ನಡ", name: "Kannada" },
  { code: "gu", native: "ગુજરાતી", name: "Gujarati" },
  { code: "ml", native: "മലയാളം", name: "Malayalam" },
  { code: "pa", native: "ਪੰਜਾਬੀ", name: "Punjabi" },
];

const LanguageSelection = () => {
  const [selected, setSelected] = useState("en");
  const [announcing, setAnnouncing] = useState(false);
  const navigate = useNavigate();

  const handleHearInstructions = () => {
    setAnnouncing(true);
    setTimeout(() => setAnnouncing(false), 2500);
  };

  return (
    <div className="kiosk-shell fade-in">
      <h1 className="text-center">Choose your preferred language</h1>
      <p className="text-center">You can change your language at any time.</p>

      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <Button variant="secondary" onClick={handleHearInstructions}>
          🔊 Hear Instructions
        </Button>
        {announcing && (
          <p className="text-muted" role="status" style={{ marginTop: 10 }}>
            Playing audio instructions in {languages.find((l) => l.code === selected)?.name}...
          </p>
        )}
      </div>

      <div className="language-grid">
        {languages.map((lang) => (
          <LanguageCard
            key={lang.code}
            language={lang.name}
            native={lang.native}
            selected={selected === lang.code}
            onSelect={() => setSelected(lang.code)}
          />
        ))}
      </div>

      <div className="text-center" style={{ marginTop: 32 }}>
        <Button size="lg" onClick={() => navigate("/identify")}>Continue</Button>
      </div>
    </div>
  );
};

export default LanguageSelection;
