import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LanguageSelection from "./pages/LanguageSelection";
import PatientIdentification from "./pages/PatientIdentification";
import Consent from "./pages/Consent";
import PatientDashboard from "./pages/PatientDashboard";
import HistoryInterview from "./pages/HistoryInterview";
import Documents from "./pages/Documents";
import DocumentProcessing from "./pages/DocumentProcessing";
import DocumentReview from "./pages/DocumentReview";
import AyushMode from "./pages/AyushMode";
import Summary from "./pages/Summary";
import Complete from "./pages/Complete";
import DoctorLogin from "./pages/DoctorLogin";
import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorPatientView from "./pages/DoctorPatientView";
import Privacy from "./pages/Privacy";
import Help from "./pages/Help";

function App() {
  return (
    <HashRouter>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/language" element={<LanguageSelection />} />
          <Route path="/identify" element={<PatientIdentification />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/history" element={<HistoryInterview />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/documents/processing" element={<DocumentProcessing />} />
          <Route path="/documents/review" element={<DocumentReview />} />
          <Route path="/ayush" element={<AyushMode />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="/doctor/login" element={<DoctorLogin />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/doctor/patient/:id" element={<DoctorPatientView />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
