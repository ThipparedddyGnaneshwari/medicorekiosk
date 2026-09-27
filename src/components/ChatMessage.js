import React from "react";

const ChatMessage = ({ sender, text }) => {
  return (
    <div className={`chat-bubble ${sender === "ai" ? "ai" : "patient"}`}>
      {text}
    </div>
  );
};

export default ChatMessage;
