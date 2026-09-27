// Mock clinical-interview question tree for the MediKiosk demo.
// This is a simplified, simulated branching structure — not real
// clinical decision logic and not connected to any AI model.

// Symptoms that trigger the simulated "red flag" priority alert.
export const RED_FLAG_SYMPTOMS = ["Difficulty Breathing", "Chest Pain"];

export const TOTAL_QUESTIONS_ESTIMATE = 18;

// The interview starts here and branches based on the patient's answer.
export const interviewFlow = {
  start: {
    id: "start",
    question: "What brings you to the hospital today?",
    subtitle: "You can speak naturally or choose an option below.",
    options: ["Chest Pain", "Fever", "Cough", "Difficulty Breathing", "Weakness", "Other"],
    next: {
      "Chest Pain": "chest_onset",
      "Difficulty Breathing": "chest_onset",
      Fever: "fever_duration",
      Cough: "cough_duration",
      Weakness: "weakness_duration",
      Other: "other_detail",
    },
  },

  chest_onset: {
    id: "chest_onset",
    question: "When did the pain start?",
    options: ["Today", "Yesterday", "A few days ago", "More than a week ago", "I don't remember"],
    next: { default: "chest_location" },
  },
  chest_location: {
    id: "chest_location",
    question: "Where exactly do you feel the pain?",
    options: ["Center of chest", "Left side", "Right side", "Across the whole chest"],
    next: { default: "chest_radiation" },
  },
  chest_radiation: {
    id: "chest_radiation",
    question: "Does the pain spread anywhere?",
    options: ["No", "Left arm", "Jaw", "Back", "Not sure"],
    next: { default: "chest_modifiers" },
  },
  chest_modifiers: {
    id: "chest_modifiers",
    question: "What makes the pain better or worse?",
    options: ["Worse with activity", "Worse when breathing", "Better with rest", "No clear pattern"],
    next: { default: "past_conditions" },
  },

  fever_duration: {
    id: "fever_duration",
    question: "How long have you had the fever?",
    options: ["1 day", "2-3 days", "More than 3 days", "More than a week"],
    next: { default: "fever_associated" },
  },
  fever_associated: {
    id: "fever_associated",
    question: "Do you have any of these along with the fever?",
    options: ["Chills", "Body ache", "Rash", "None of these"],
    next: { default: "past_conditions" },
  },

  cough_duration: {
    id: "cough_duration",
    question: "How long have you had the cough?",
    options: ["A few days", "About a week", "More than 2 weeks", "More than a month"],
    next: { default: "cough_type" },
  },
  cough_type: {
    id: "cough_type",
    question: "What kind of cough is it?",
    options: ["Dry cough", "Cough with mucus", "Cough with blood", "Not sure"],
    next: { default: "past_conditions" },
  },

  weakness_duration: {
    id: "weakness_duration",
    question: "How long have you been feeling weak?",
    options: ["A few days", "About a week", "Several weeks", "Ongoing for months"],
    next: { default: "past_conditions" },
  },

  other_detail: {
    id: "other_detail",
    question: "Please describe your main concern in your own words.",
    options: [],
    allowFreeText: true,
    next: { default: "past_conditions" },
  },

  past_conditions: {
    id: "past_conditions",
    question: "Do you have any long-term health conditions?",
    options: ["Diabetes", "High Blood Pressure", "Heart Disease", "Asthma", "None"],
    next: { default: "current_medications" },
  },
  current_medications: {
    id: "current_medications",
    question: "Are you currently taking any medicines regularly?",
    options: ["Yes", "No", "Not sure"],
    next: { default: "allergies" },
  },
  allergies: {
    id: "allergies",
    question: "Do you have any known allergies to medicines?",
    options: ["Yes", "No", "Not sure"],
    next: { default: "surgical_history" },
  },
  surgical_history: {
    id: "surgical_history",
    question: "Have you had any surgeries in the past?",
    options: ["Yes", "No"],
    next: { default: "family_history" },
  },
  family_history: {
    id: "family_history",
    question: "Does anyone in your immediate family have a major illness?",
    options: ["Diabetes", "Heart Disease", "Cancer", "None known"],
    next: { default: "lifestyle" },
  },
  lifestyle: {
    id: "lifestyle",
    question: "Do you smoke or drink alcohol?",
    options: ["Smoke", "Drink alcohol", "Both", "Neither"],
    next: { default: "closing" },
  },
  closing: {
    id: "closing",
    question: "Thank you. Is there anything else you'd like your doctor to know?",
    options: ["No, that's all", "Yes, I'll type it"],
    allowFreeText: true,
    next: { default: "end" },
  },
};

export const getNextQuestionId = (currentId, answer) => {
  const node = interviewFlow[currentId];
  if (!node) return "end";
  return node.next[answer] || node.next.default || "end";
};
