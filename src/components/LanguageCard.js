import React from "react";

const LanguageCard = ({ language, native, selected, onSelect }) => {
  return (
    <button
      type="button"
      className={`card card-hover card-select language-card ${selected ? "selected" : ""}`}
      onClick={onSelect}
      aria-pressed={selected}
    >
      <div className="native">{native}</div>
      <div className="english">{language}</div>
    </button>
  );
};

export default LanguageCard;
