import React from "react";

const Modal = ({ imageURL, onClose }) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={onClose}>
      <div className="Modal" onClick={(e) => e.stopPropagation()}>
        <img src={imageURL} alt="Large version of the image" onKeyDown={(e) => handleKeyDown(e)} />
      </div>
    </div>
  );
};

export default Modal;
