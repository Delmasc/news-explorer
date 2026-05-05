import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn, currentUser, onLoginClick, onLogout }) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  return (
    <header className={`header ${isSavedNewsPage ? "header_saved" : ""}`}>
      <Navigation
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLoginClick={onLoginClick}
        onLogout={onLogout}
        isSavedNewsPage={isSavedNewsPage}
      />
    </header>
  );
}

export default Header;
