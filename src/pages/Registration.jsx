import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";
import PageSeo from "../components/PageSeo";
import ProofStrip from "../components/ProofStrip";
import {
  breadcrumbSchema,
  organizationSchema,
  webPageSchema
} from "../lib/site";

const registrationProof = [
  {
    title: "One path",
    detail: "The site now routes parents from tryouts to one canonical registration flow."
  },
  {
    title: "Separate intent",
    detail: "Families who are not ready to register can join tryout alerts without filling out the full form."
  },
  {
    title: "Backup support",
    detail: "Every step includes direct ATB email and phone contact if a form needs manual follow-up."
  }
];

const tryoutFields = [
  {
    name: "parentName",
    label: "Parent or guardian name",
    placeholder: "Full name",
    required: true
  },
  {
    name: "email",
    label: "Best email",
    type: "email",
    placeholder: "name@example.com",
    required: true
  },
  {
    name: "phone",
    label: "Best phone",
    type: "tel",
    inputMode: "tel",
    placeholder: "(703) 555-5555",
    required: true
  },
  {
    name: "playerName",
    label: "Player name",
    placeholder: "Player name",
    required: true
  },
  {
    name: "playerAge",
    label: "Player age or current grade",
    placeholder: "Example: 10U or 4th grade",
    required: true
  },
  {
    name: "notes",
    label: "Anything ATB should know before tryouts?",
    type: "textarea",
    placeholder: "School, prior team, questions, schedule notes, or sibling info",
    fullWidth: true
  }
];

const tryoutAlertFields = [
  {
    name: "familyName",
    label: "Family name",
    placeholder: "Last name",
    required: true
  },
  {
    name: "email",
    label: "Email for alerts",
    type: "email",
    placeholder: "name@example.com",
    required: true
  },
  {
    name: "playerAge",
    label: "Player age or age-group interest",
    placeholder: "Example: 8U, 11U, academy",
    required: true
  }
];

function Registration() {
  // TODO: Point these env vars at a hosted form or CRM webhook when ATB
  // confirms the production submission stack.
  const tryoutEndpoint = import.meta.env.VITE_TRYOUT_FORM_ENDPOINT;
  const tryoutAlertsEndpoint = import.meta.env.VITE_TRYOUT_ALERTS_ENDPOINT;
  const title = "Tryout Registration | Arlington Travel Baseball";
  const description =
    "A real, indexable ATB registration page for Arlington and Northern Virginia families: tryout registration, tryout alerts, and clear next-step expectations.";

  return (
    <>
      <PageSeo
        title={title}
        description={description}
        path="/registration"
        schema={[
          organizationSchema(),
          webPageSchema({
            path: "/registration",
            title,
            description
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Registration", path: "/registration" }
          ])
        ]}
      />

      <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Registration</p>
        <h1>Complete tryout registration in one place.</h1>
        <p>
          This page replaces the old dead-end registration experience with a
          real form, a separate alert signup, and a clear explanation of what
          happens after a family reaches out.
        </p>
      </div>

      <ProofStrip items={registrationProof} eyebrow="Conversion-first" />

      <LeadForm
        formId="tryout-registration"
        title="Register for tryouts"
        description="Share the essentials once, and ATB can follow up with the right next step for your player."
        fields={tryoutFields}
        submitLabel="Start tryout registration"
        successTitle="Registration request started"
        successMessage="ATB now has the details needed to confirm fit, timing, and the next communication step."
        endpoint={tryoutEndpoint}
        mailtoSubject="ATB tryout registration request"
        events={{
          start: "tryout_register_start",
          success: "tryout_register_complete",
          fail: "contact_submit_fail"
        }}
        aside="This form works now and can submit directly in-browser once ATB connects a hosted form endpoint."
      />

      <div className="split-section">
        <LeadForm
          formId="tryout-alerts"
          title="Join tryout alerts"
          description="Not ready to commit yet? Subscribe for date updates, schedule changes, and next-open registration windows."
          fields={tryoutAlertFields}
          submitLabel="Join tryout alerts"
          successTitle="Tryout alerts requested"
          successMessage="You are on the path for tryout updates and ATB follow-up."
          endpoint={tryoutAlertsEndpoint}
          mailtoSubject="ATB tryout alerts request"
          events={{
            success: "email_signup",
            fail: "contact_submit_fail"
          }}
          aside="This alert signup can connect directly to ATB's mailing list once the preferred email tool is selected."
        />

        <div className="content-panel dark-panel">
          <p className="eyebrow">What happens next</p>
          <h2>Set expectations immediately after the form.</h2>
          <div className="feature-list">
            <div className="feature-row">
              ATB reviews the submission and confirms the right age-group next step.
            </div>
            <div className="feature-row">
              Families receive direct follow-up by email or phone.
            </div>
            <div className="feature-row">
              Confirmed dates, locations, and what-to-bring details should be sent in that follow-up.
            </div>
          </div>
          <p className="helper-copy">
            A response-time expectation can be added here once ATB confirms who
            owns inbox monitoring.
          </p>
        </div>
      </div>

      <div className="content-panel">
        <p className="eyebrow">Need details first?</p>
        <h2>Review tryout expectations before you register.</h2>
        <p>
          Families who still need dates, logistics, and FAQs should start on the
          tryouts page and then come back here to submit the form.
        </p>
        <div className="stacked-links">
          <Link className="button button-small" to="/tryouts">
            Open Tryouts
          </Link>
          <Link className="button button-small button-ghost" to="/contact">
            Contact ATB
          </Link>
        </div>
      </div>
      </section>
    </>
  );
}

export default Registration;
