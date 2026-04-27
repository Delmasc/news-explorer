import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onLoginClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const isEmailValid = email === "" || email.includes("@");
  const isPasswordValid = password === "" || password.length >= 2;
  const isUsernameValid = username === "" || username.length >= 2;

  const isValid =
    email.includes("@") && password.length >= 2 && username.length >= 2;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    onClose();
  };

  return (
    <ModalWithForm
      title="Sign up"
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

      <label className="modal__label">Username</label>
      <input
        type="text"
        placeholder="Enter your username"
        className="modal__input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {!isUsernameValid && (
        <span className="modal__error">
          Username must be at least 2 characters
        </span>
      )}

      <button
        className={`modal__button ${isValid ? "modal__button_active" : ""}`}
        disabled={!isValid}
        type="submit"
      >
        Sign up
      </button>

      <div className="modal__switch">
        or{" "}
        <span className="modal__link" onClick={onLoginClick}>
          Sign in
        </span>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
