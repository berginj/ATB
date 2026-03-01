import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import atbLogo from "../assets/atb-logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Tryouts", to: "/tryouts" },
  { label: "Teams", to: "/teams" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Contact", to: "/contact" }
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
