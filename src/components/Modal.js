import React from "react";

const Modal = ({ title, children, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box fade-in"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close dialog">×</button>
        <h3>{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
