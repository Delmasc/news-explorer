import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/Logout-BTN.svg";
import darkLogoutIcon from "../../assets/Logout-SA-BTN.svg";
import menuIcon from "../../assets/menu-SA.svg";
import darkMenuIcon from "../../assets/menu-home.svg";

function Navigation({
  isLoggedIn,
  currentUser,
  onLoginClick,
  onLogout,
  isSavedNewsPage,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClassName = ({ isActive }) =>
    isActive ? "navigation__link navigation__link_active" : "navigation__link";

  return (
    <nav
      className={`navigation ${isSavedNewsPage ? "navigation_saved" : ""} ${
        isMenuOpen ? "navigation_menu-open" : ""
      }`}
    >
      <Link to="/" className="navigation__logo">
        NewsExplorer
      </Link>

      <button
        className="navigation__menu-button"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <span className="navigation__close-icon">×</span>
        ) : (
          <img
            src={isSavedNewsPage ? darkMenuIcon : menuIcon}
            alt="menu"
            className="navigation__menu-icon"
          />
        )}
      </button>

      <div
        className={`navigation__links ${
          isMenuOpen ? "navigation__links_opened" : ""
        }`}
      >
        <NavLink to="/" className={getLinkClassName}>
          Home
        </NavLink>

        {isLoggedIn ? (
          <>
            {!isSavedNewsPage && (
              <NavLink to="/saved-news" className={getLinkClassName}>
                Saved Articles
              </NavLink>
            )}

            <button
              className="navigation__button"
              type="button"
              onClick={onLogout}
            >
              {currentUser?.name || "Delmas"}

              <img
                src={isSavedNewsPage ? darkLogoutIcon : logoutIcon}
                alt="logout"
                className="navigation__logout-icon"
              />
            </button>
          </>
        ) : (
          <button
            className="navigation__button"
            type="button"
            onClick={onLoginClick}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
