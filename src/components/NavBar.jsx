import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import atbLogo from "../assets/atb-logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Tryouts", to: "/tryouts" },
  { label: "Registration", to: "/registration" },
  { label: "Programs", to: "/programs" },
  { label: "Teams", to: "/teams" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Contact", to: "/contact" },
  { label: "About", to: "/about" }
];

const bannerConfig = {
  enabled: false,
  message:
    "Click here to sign up for the ATB 6U-7U Academy (Sundays 12-1:15 at Gunston, April-June).",
  href: "https://arlingtontravelbaseball.org/register-for-6u-7u-academy/"
};

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      {bannerConfig.enabled ? (
        <div className="alert-strip">
          <div className="nav-bar alert-shell">
            <a
              href={bannerConfig.href}
              className="alert-copy alert-link"
              target="_blank"
              rel="noreferrer"
            >
              <span>Academy registration:</span> {bannerConfig.message}
            </a>
          </div>
        </div>
      ) : null}

      <nav className="nav-bar">
        <Link to="/" className="brand-lockup" onClick={closeMenu}>
          <img src={atbLogo} alt="Arlington Travel Baseball" />
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
          <Link
            to="/registration"
            className="button button-small nav-register"
            onClick={closeMenu}
          >
            Register for Tryouts
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
