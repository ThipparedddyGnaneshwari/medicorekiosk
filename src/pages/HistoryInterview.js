import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import VoiceAssistant from "../components/VoiceAssistant";
import ChatMessage from "../components/ChatMessage";
import QuestionOption from "../components/QuestionOption";
import AlertCard from "../components/AlertCard";
import {
  interviewFlow,
  getNextQuestionId,
  RED_FLAG_SYMPTOMS,
  TOTAL_QUESTIONS_ESTIMATE,
} from "../data/questions";

const HistoryInterview = () => {
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState("start");
  const [history, setHistory] = useState([
    { sender: "ai", text: interviewFlow.start.question },
  ]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [listening, setListening] = useState(false);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [redFlag, setRedFlag] = useState(false);
  const [path, setPath] = useState(["start"]);

  const currentNode = interviewFlow[currentId];
  const isEnd = currentId === "end" || !currentNode;

  const advance = (answerLabel) => {
    if (RED_FLAG_SYMPTOMS.includes(answerLabel)) {
      setRedFlag(true);
    }

    setHistory((h) => [...h, { sender: "patient", text: answerLabel }]);
    const nextId = getNextQuestionId(currentId, answerLabel);
    setAnsweredCount((c) => c + 1);

    if (nextId === "end" || !interviewFlow[nextId]) {
      setHistory((h) => [
        ...h,
        { sender: "ai", text: "Thank you. That completes your clinical history interview." },
      ]);
      setCurrentId("end");
      return;
    }

    setHistory((h) => [...h, { sender: "ai", text: interviewFlow[nextId].question }]);
    setCurrentId(nextId);
    setPath((p) => [...p, nextId]);
  };

  const handleOptionClick = (option) => {
    advance(option);
  };

  const handleMicClick = () => {
    if (listening) return;
    setListening(true);
    // Simulate voice transcription delay
    setTimeout(() => {
      setListening(false);
      const simulatedAnswer =
        (currentNode.options && currentNode.options[0]) || "I'm not sure";
      advance(simulatedAnswer);
    }, 1800);
  };

  const handleTypedSubmit = (e) => {
    e.preventDefault();
    if (!typedAnswer.trim()) return;
    advance(typedAnswer.trim());
    setTypedAnswer("");
  };

  const handleBack = () => {
    if (path.length <= 1) return;
    const newPath = path.slice(0, -1);
    const prevId = newPath[newPath.length - 1];
    setPath(newPath);
    setCurrentId(prevId);
    setHistory((h) => h.slice(0, -2));
    setAnsweredCount((c) => Math.max(0, c - 1));
  };

  const handleRepeat = () => {
    setHistory((h) => [...h, { sender: "ai", text: currentNode.question }]);
  };

  const handleSkip = () => {
    advance("Skipped");
  };

  const progressPercent = Math.min(
    100,
    Math.round((answeredCount / TOTAL_QUESTIONS_ESTIMATE) * 100)
  );

  if (redFlag) {
    return (
      <div className="interview-shell fade-in">
        <AlertCard type="priority" title="Please wait — a healthcare staff member has been alerted.">
          <p>
            Your response may require immediate medical attention. Please remain at the kiosk.
            A member of the clinical team has been notified.
          </p>
          <p className="text-muted" style={{ marginBottom: 0 }}>
            This is a priority flag based on your answers, not a diagnosis.
          </p>
        </AlertCard>
        <div className="interview-controls">
          <Button variant="danger" onClick={() => setRedFlag(false)}>Call Staff</Button>
          <Button variant="secondary" onClick={() => setRedFlag(false)}>
            Continue with Staff Assistance
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="interview-shell fade-in">
      <div className="flex justify-between items-center" style={{ marginBottom: 8 }}>
        <strong>MediKiosk</strong>
        <span className="text-muted">
          {isEnd ? "Interview complete" : `Question ${Math.min(answeredCount + 1, TOTAL_QUESTIONS_ESTIMATE)} of ${TOTAL_QUESTIONS_ESTIMATE}`}
        </span>
      </div>
      <ProgressBar percent={isEnd ? 100 : progressPercent} />

      <div className="chat-log" aria-live="polite">
        {history.map((msg, i) => (
          <ChatMessage key={i} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      {!isEnd && (
        <>
          <VoiceAssistant
            question={currentNode.question}
            subtitle={currentNode.subtitle || "You can speak naturally or choose an option below."}
            listening={listening}
            onMicClick={handleMicClick}
            disabled={listening}
          />

          {currentNode.options && currentNode.options.length > 0 && (
            <div className="option-grid">
              {currentNode.options.map((opt) => (
                <QuestionOption key={opt} label={opt} onClick={() => handleOptionClick(opt)} />
              ))}
            </div>
          )}

          {currentNode.allowFreeText && (
            <form className="type-answer-row" onSubmit={handleTypedSubmit}>
              <label htmlFor="typed-answer" className="sr-only">Type your answer</label>
              <input
                id="typed-answer"
                type="text"
                placeholder="Type your answer"
                value={typedAnswer}
                onChange={(e) => setTypedAnswer(e.target.value)}
              />
              <Button type="submit">Send</Button>
            </form>
          )}

          <div className="interview-controls">
            <Button variant="ghost" onClick={handleBack} disabled={path.length <= 1}>
              Back
            </Button>
            <Button variant="ghost" onClick={handleRepeat}>Repeat Question</Button>
            <Button variant="ghost" onClick={handleSkip}>Skip</Button>
            <Button onClick={() => navigate("/documents")}>Continue</Button>
          </div>
        </>
      )}

      {isEnd && (
        <div className="text-center" style={{ marginTop: 24 }}>
          <Button size="lg" onClick={() => navigate("/documents")}>
            Continue to Document Upload
          </Button>
        </div>
      )}
    </div>
  );
};

export default HistoryInterview;
