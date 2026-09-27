import React from "react";

const QuestionOption = ({ label, selected, onClick }) => {
  return (
    <button
      type="button"
      className={`option-btn ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default QuestionOption;
