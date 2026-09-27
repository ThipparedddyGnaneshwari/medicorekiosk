import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import QuestionOption from "../components/QuestionOption";

const ayushItems = [
  {
    key: "prakriti",
    title: "Prakriti",
    explain: "Your natural, lifelong body constitution.",
    question: "Which description best matches your natural body constitution?",
    options: ["Light, quick, dry (Vata)", "Warm, sharp, medium build (Pitta)", "Steady, heavy, calm (Kapha)"],
  },
  {
    key: "vikriti",
    title: "Vikriti",
    explain: "Your current state of imbalance, if any.",
    question: "Which of these best describes how you feel lately?",
    options: ["Anxious or restless", "Irritable or overheated", "Sluggish or heavy", "Balanced"],
  },
  {
    key: "sara",
    title: "Sara",
    explain: "The quality and strength of your body tissues.",
    question: "How would you describe your skin, hair and nails?",
    options: ["Dry and rough", "Soft and warm", "Smooth and thick", "Not sure"],
  },
  {
    key: "samhanana",
    title: "Samhanana",
    explain: "Your body's overall compactness and build.",
    question: "How would you describe your body build?",
    options: ["Thin and light", "Medium and firm", "Broad and sturdy"],
  },
  {
    key: "pramana",
    title: "Pramana",
    explain: "Measurements and proportion of the body.",
    question: "How would you rate your overall physical proportion?",
    options: ["Slight", "Moderate", "Well-proportioned"],
  },
  {
    key: "satmya",
    title: "Satmya",
    explain: "What suits your body — foods, climate and habits.",
    question: "Which environment do you feel most comfortable in?",
    options: ["Warm and dry", "Cool and moist", "Any climate"],
  },
  {
    key: "sattva",
    title: "Sattva",
    explain: "Your mental strength and clarity.",
    question: "How would you describe your mental resilience?",
    options: ["Easily affected by stress", "Balanced most of the time", "Very calm and steady"],
  },
  {
    key: "aharaShakti",
    title: "Ahara Shakti",
    explain: "Your digestive capacity.",
    question: "How would you describe your digestion?",
    options: ["Irregular / variable", "Strong / sharp", "Slow but steady"],
  },
  {
    key: "vyayamaShakti",
    title: "Vyayama Shakti",
    explain: "Your physical exercise capacity.",
    question: "How much physical activity can you comfortably do?",
    options: ["Tire quickly", "Moderate stamina", "High stamina"],
  },
  {
    key: "vaya",
    title: "Vaya",
    explain: "Your age-related constitution stage.",
    question: "Which age group best applies to you?",
    options: ["Under 18", "18–45", "45–60", "Above 60"],
  },
];

const AyushMode = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const item = ayushItems[activeIndex];

  const handleSelect = (option) => {
    setAnswers((a) => ({ ...a, [item.key]: option }));
  };

  return (
    <div className="ayush-shell fade-in">
      <div className="ayush-header">
        <h1>AYUSH Health Assessment</h1>
        <p>A traditional Ayurvedic constitution assessment, alongside your clinical history.</p>
      </div>

      <div className="ayush-item-nav">
        {ayushItems.map((it, i) => (
          <button
            key={it.key}
            className={i === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(i)}
          >
            {it.title}
          </button>
        ))}
        <button
          className={activeIndex === ayushItems.length ? "active" : ""}
          onClick={() => setActiveIndex(ayushItems.length)}
        >
          Ahara-Vihara
        </button>
      </div>

      {activeIndex < ayushItems.length ? (
        <div className="card">
          <h2>{item.title}</h2>
          <p className="text-muted">{item.explain}</p>
          <h3>{item.question}</h3>
          <div className="option-grid">
            {item.options.map((opt) => (
              <QuestionOption
                key={opt}
                label={opt}
                selected={answers[item.key] === opt}
                onClick={() => handleSelect(opt)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="card">
          <h2>Ahara-Vihara</h2>
          <p className="text-muted">Your diet (Ahara) and lifestyle (Vihara) habits.</p>
          <h3>How would you describe your typical daily diet and lifestyle?</h3>
          <div className="option-grid">
            {["Mostly vegetarian, active lifestyle", "Mixed diet, moderate activity", "Irregular meals, sedentary lifestyle"].map(
              (opt) => (
                <QuestionOption
                  key={opt}
                  label={opt}
                  selected={answers.aharaVihara === opt}
                  onClick={() => setAnswers((a) => ({ ...a, aharaVihara: opt }))}
                />
              )
            )}
          </div>
        </div>
      )}

      <div className="flex justify-between" style={{ marginTop: 24 }}>
        <Button
          variant="ghost"
          onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
          disabled={activeIndex === 0}
        >
          Previous
        </Button>
        {activeIndex < ayushItems.length ? (
          <Button onClick={() => setActiveIndex((i) => i + 1)}>Next</Button>
        ) : (
          <Button onClick={() => navigate("/summary")}>Finish AYUSH Assessment</Button>
        )}
      </div>
    </div>
  );
};

export default AyushMode;
