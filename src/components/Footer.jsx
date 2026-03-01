import { Link } from "react-router-dom";
import atbLogo from "../assets/atb-logo.png";

const siteLinks = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "Tryouts", to: "/tryouts" },
  { label: "Contact", to: "/contact" }
];

const supportLinks = [
  { label: "Teams", to: "/teams" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Registration", to: "/registration" }
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <img
            src={atbLogo}
            alt="Arlington Travel Baseball"
            className="footer-logo"
          />
          <p>Arlington, VA</p>
          <p>PO Box 7088, Arlington, VA 22207</p>
          <p>
            <a href="mailto:atbarsenal@gmail.com">atbarsenal@gmail.com</a>
          </p>
          <p>
            <a href="tel:+17036797756">(703) 679-7756</a>
          </p>
        </div>

        <div>
          <h3 className="footer-heading">Site Links</h3>
          <ul className="footer-list">
            {siteLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Support ATB</h3>
          <ul className="footer-list">
            {supportLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <p className="footer-note">
            Arlington County youth sports participation should remain open,
            respectful, and free from discrimination based on protected
            characteristics under local, state, or federal law.
          </p>
        </div>
      </div>
      <p className="footer-meta">
        (c) {year} Arlington Travel Baseball.
      </p>
    </footer>
  );
}

export default Footer;
