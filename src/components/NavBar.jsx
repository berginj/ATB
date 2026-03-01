import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import badge from "../assets/atb-badge.svg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Tryouts", to: "/tryouts" },
  { label: "Teams", to: "/teams" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Contact", to: "/contact" }
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="alert-strip">
        <div className="nav-bar alert-shell">
          <p className="alert-copy">
            <span>Spring baseball is open:</span> players, coaches, and
            volunteers can register now.
          </p>
          <a
            href="https://arlingtontravelbaseball.org/register/"
            className="button button-small button-ghost alert-action"
            target="_blank"
            rel="noreferrer"
          >
            Go to Register
          </a>
        </div>
      </div>

      <nav className="nav-bar">
        <Link to="/" className="brand-lockup" onClick={closeMenu}>
          <img src={badge} alt="Arlington Travel Baseball badge" />
          <span>
            Arlington
            <strong>Travel Baseball</strong>
          </span>
        </Link>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "is-active" : ""}`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://arlingtontravelbaseball.org/register/"
            className="button button-small nav-register"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Register
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
