// src/components/Modal.jsx
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen || !content) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{content.title}</h2>
        <p>{content.details}</p>
      </div>
    </div>
  );
};

export default Modal;
