import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onLogin, onRegisterClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = email === "" || email.includes("@");
  const isPasswordValid = password === "" || password.length >= 2;
  const isValid = email.includes("@") && password.length >= 2;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    onLogin();
  };

  return (
    <ModalWithForm
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">Email</label>
      <input
        type="email"
        placeholder="Enter email"
        className="modal__input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!isEmailValid && (
        <span className="modal__error">Invalid email address</span>
      )}

      <label className="modal__label">Password</label>
      <input
        type="password"
        placeholder="Enter password"
        className="modal__input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!isPasswordValid && (
        <span className="modal__error">
          Password must be at least 2 characters
        </span>
      )}

      <button
        className={`modal__button ${isValid ? "modal__button_active" : ""}`}
        disabled={!isValid}
      >
        Sign in
      </button>

      <div className="modal__switch">
        or{" "}
        <span className="modal__link" onClick={onRegisterClick}>
          Sign up
        </span>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
