import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/Logout-BTN.svg";
import darkLogoutIcon from "../../assets/Logout-SA-BTN.svg";

function Navigation({
  isLoggedIn,
  currentUser,
  onLoginClick,
  onLogout,
  isSavedNewsPage,
}) {
  const getLinkClassName = ({ isActive }) =>
    isActive ? "navigation__link navigation__link_active" : "navigation__link";

  return (
    <nav className={`navigation ${isSavedNewsPage ? "navigation_saved" : ""}`}>
      <Link to="/" className="navigation__logo">
        NewsExplorer
      </Link>

      <div className="navigation__links">
        <NavLink to="/" className={getLinkClassName}>
          Home
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink to="/saved-news" className={getLinkClassName}>
              Saved Articles
            </NavLink>

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
