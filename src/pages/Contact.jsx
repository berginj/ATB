import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";

const contactFields = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your name",
    required: true
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "name@example.com",
    required: true
  },
  {
    name: "topic",
    label: "What do you need help with?",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select one" },
      { value: "tryouts", label: "Tryouts" },
      { value: "registration", label: "Registration" },
      { value: "teams", label: "Teams" },
      { value: "sponsors", label: "Sponsors" },
      { value: "other", label: "Something else" }
    ]
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "How can ATB help?",
    required: true,
    fullWidth: true
  }
];

function Contact() {
  // TODO: Point this env var at the production contact inbox workflow once ATB
  // chooses the hosted form or CRM endpoint.
  const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

  return (
    <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>One reliable contact path for parents, players, and sponsors.</h1>
        <p>
          Instead of scattering fragile forms across team pages, this page keeps
          one support path visible and gives ATB a clearer inbox to manage.
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

      <LeadForm
        formId="general-contact"
        title="Send ATB a direct message"
        description="This form should replace broken team-page contact forms and give families one working support path."
        fields={contactFields}
        submitLabel="Send message"
        successTitle="Message path started"
        successMessage="ATB now has the message details needed for follow-up."
        endpoint={contactEndpoint}
        mailtoSubject="ATB website contact request"
        events={{
          start: "contact_submit_start",
          success: "contact_submit_success",
          fail: "contact_submit_fail"
        }}
        aside="This form can switch from email-draft fallback to direct in-browser submit once ATB connects the production inbox workflow."
      />

      <div className="content-panel dark-panel">
        <p className="eyebrow">Need a faster route?</p>
        <h2>Go directly to the page that matches your intent.</h2>
        <div className="stacked-links">
          <Link className="button button-small" to="/tryouts">
            Tryouts
          </Link>
          <Link className="button button-small button-ghost" to="/registration">
            Registration
          </Link>
          <Link className="button button-small button-ghost" to="/sponsors">
            Sponsors
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
