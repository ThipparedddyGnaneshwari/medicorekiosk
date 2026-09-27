import React from "react";

const icons = { priority: "!", info: "i", warning: "⚠" };

const AlertCard = ({ type = "info", title, children }) => {
  return (
    <div className={`alert-card ${type}`} role={type === "priority" ? "alert" : undefined}>
      <div className="alert-icon" aria-hidden="true">{icons[type]}</div>
      <div>
        <h3 style={{ marginBottom: 6 }}>{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AlertCard;
