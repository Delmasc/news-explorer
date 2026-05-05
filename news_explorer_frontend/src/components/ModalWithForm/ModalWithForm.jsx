import { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({ title, isOpen, onClose, onSubmit, children }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onMouseDown={handleOverlayClick}
    >
      <div className="modal__container">
        <button type="button" className="modal__close" onClick={onClose}>
          ×
        </button>

        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
