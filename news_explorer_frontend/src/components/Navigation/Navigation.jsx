import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn, currentUser, onLoginClick, onLogout }) {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__logo">
        NewsExplorer
      </Link>

      <div className="navigation__links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "navigation__link navigation__link_active"
              : "navigation__link"
          }
        >
          Home
        </NavLink>

        {isLoggedIn ? (
          <>
            <NavLink to="/saved-news" className="navigation__link">
              Saved Articles
            </NavLink>

            <button className="navigation__button" onClick={onLogout}>
              {currentUser?.name}
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
