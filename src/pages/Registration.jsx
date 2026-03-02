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
    title: "One clear form",
    detail: "Families can share the right information quickly and keep the next step moving."
  },
  {
    title: "Stay connected",
    detail: "Families who are not ready to register can still stay in the loop through tryout alerts."
  },
  {
    title: "Direct support",
    detail: "ATB is easy to reach if you need answers before, during, or after registration."
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
    "ATB registration for Arlington and Northern Virginia families: tryout registration, tryout alerts, and clear next-step expectations.";

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
          Share the essentials, stay connected to upcoming tryout news, and
          keep the next step simple for your family.
        </p>
      </div>

      <ProofStrip items={registrationProof} eyebrow="Why Families Use This Page" />

      <LeadForm
        formId="tryout-registration"
        title="Register for tryouts"
        description="Share the key details once so ATB can guide your player into the right next step."
        fields={tryoutFields}
        submitLabel="Start tryout registration"
        successTitle="Registration request received"
        successMessage="ATB has your information and will follow up with the next step."
        endpoint={tryoutEndpoint}
        mailtoSubject="ATB tryout registration request"
        events={{
          start: "tryout_register_start",
          success: "tryout_register_complete",
          fail: "contact_submit_fail"
        }}
        aside="A quick, complete form helps ATB respond faster."
      />

      <div className="split-section">
        <LeadForm
          formId="tryout-alerts"
          title="Join tryout alerts"
          description="Not ready to register yet? Stay connected for tryout dates, updates, and upcoming opportunities."
          fields={tryoutAlertFields}
          submitLabel="Join tryout alerts"
          successTitle="You are on the list"
          successMessage="ATB will keep you updated with important tryout news and next steps."
          endpoint={tryoutAlertsEndpoint}
          mailtoSubject="ATB tryout alerts request"
          events={{
            success: "email_signup",
            fail: "contact_submit_fail"
          }}
          aside="A simple way to stay connected when the timing is not right yet."
        />

        <div className="content-panel dark-panel">
          <p className="eyebrow">What happens next</p>
          <h2>Here is what families can expect after they register.</h2>
          <div className="feature-list">
            <div className="feature-row">
              ATB reviews your submission and matches your player to the right next step.
            </div>
            <div className="feature-row">
              Families receive direct follow-up by email or phone.
            </div>
            <div className="feature-row">
              Session details, logistics, and what-to-bring information are shared as part of follow-up.
            </div>
          </div>
          <p className="helper-copy">ATB keeps the process moving with direct, family-first communication.</p>
        </div>
      </div>

      <div className="content-panel">
        <p className="eyebrow">Need details first?</p>
        <h2>Review tryout expectations before you register.</h2>
        <p>
          If you want the full overview first, start on the tryouts page and
          come back here when you are ready to sign up.
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
