// Mock document / OCR data used to simulate the document digitization workflow.

export const documentTypes = ["Prescription", "Lab Report", "Discharge Summary", "Imaging Report", "Other"];

export const sampleUploadedDocuments = [
  {
    id: "doc-1",
    name: "Blood_Test_Report.pdf",
    type: "Lab Report",
    status: "processed",
    uploadedAt: "09:05 AM",
  },
  {
    id: "doc-2",
    name: "Discharge_Summary_Jan2026.pdf",
    type: "Discharge Summary",
    status: "processed",
    uploadedAt: "09:06 AM",
  },
];

export const processingSteps = [
  "Document uploaded",
  "OCR text extraction",
  "Medical information detected",
  "Dates identified",
  "Medications identified",
  "Investigation values identified",
  "Timeline created",
];

export const extractedDocumentData = {
  diagnoses: ["Hypertension", "Type 2 Diabetes"],
  medications: [
    { name: "Amlodipine", dose: "5 mg" },
    { name: "Metformin", dose: "500 mg" },
  ],
  investigations: [
    { test: "Hb", result: "11.2", reference: "12–16", abnormal: true },
    { test: "Glucose", result: "142", reference: "70–140", abnormal: true },
    { test: "Total Cholesterol", result: "190", reference: "<200", abnormal: false },
  ],
  timeline: [
    { date: "12 Jan 2026", label: "Blood Test" },
    { date: "25 Jan 2026", label: "Doctor Consultation" },
    { date: "02 Feb 2026", label: "Prescription" },
  ],
};
