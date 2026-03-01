function Contact() {
  return (
    <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Keep family questions, registration issues, and sponsor outreach simple.</h1>
        <p>
          Centralized contact details keep the site clean while giving parents,
          players, and partners one obvious next step.
        </p>
      </div>

      <div className="page-grid">
        <article className="content-panel">
          <h2>Email</h2>
          <p>
            <a href="mailto:atbarsenal@gmail.com">atbarsenal@gmail.com</a>
          </p>
        </article>

        <article className="content-panel">
          <h2>Phone</h2>
          <p>
            <a href="tel:+17036797756">(703) 679-7756</a>
          </p>
        </article>

        <article className="content-panel">
          <h2>Mailing Address</h2>
          <p>PO Box 7088</p>
          <p>Arlington, VA 22207</p>
        </article>
      </div>

      <div className="content-panel">
        <p className="eyebrow">External Links</p>
        <h2>Registration and program inquiries</h2>
        <div className="stacked-links">
          <a
            className="button button-small"
            href="https://arlingtontravelbaseball.org/register/"
            target="_blank"
            rel="noreferrer"
          >
            Open Registration
          </a>
          <a
            className="button button-small button-ghost"
            href="https://arlingtontravelbaseball.org/programs/"
            target="_blank"
            rel="noreferrer"
          >
            Current Program Overview
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
