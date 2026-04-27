import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn, currentUser, onLoginClick, onLogout }) {
  return (
    <header className="header">
      <Navigation
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLoginClick={onLoginClick}
        onLogout={onLogout}
      />
    </header>
  );
}

export default Header;
