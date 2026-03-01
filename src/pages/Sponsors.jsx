import LeadForm from "../components/LeadForm";
import SponsorsSection from "../components/Sponsors";

const sponsorTiers = [
  {
    name: "Single",
    detail: "Entry-level visibility for businesses that want to support local player development."
  },
  {
    name: "Double",
    detail: "Expanded logo placement and stronger recognition across key ATB touchpoints."
  },
  {
    name: "Triple",
    detail: "Higher-visibility placement for sponsors that want a bigger family-facing footprint."
  },
  {
    name: "Home Run",
    detail: "Premium sponsor visibility for organizations that want stronger brand presence."
  },
  {
    name: "Grand Slam",
    detail: "Top-tier partner positioning for sponsors looking for the broadest ATB recognition."
  }
];

const sponsorLeadFields = [
  {
    name: "companyName",
    label: "Business name",
    placeholder: "Business name",
    required: true
  },
  {
    name: "contactName",
    label: "Primary contact",
    placeholder: "Full name",
    required: true
  },
  {
    name: "email",
    label: "Business email",
    type: "email",
    placeholder: "name@company.com",
    required: true
  },
  {
    name: "website",
    label: "Website",
    type: "url",
    placeholder: "https://example.com"
  },
  {
    name: "tierInterest",
    label: "Tier interest",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select one" },
      { value: "single", label: "Single" },
      { value: "double", label: "Double" },
      { value: "triple", label: "Triple" },
      { value: "home-run", label: "Home Run" },
      { value: "grand-slam", label: "Grand Slam" },
      { value: "custom", label: "Custom package" }
    ]
  },
  {
    name: "message",
    label: "What do you want to promote?",
    type: "textarea",
    placeholder: "Share any timing, campaign, or local audience details.",
    fullWidth: true
  }
];

function SponsorsPage() {
  // TODO: Point this env var at the sponsor intake workflow now; replace it
  // with tier-specific checkout URLs once ATB confirms payment ownership.
  const sponsorLeadEndpoint = import.meta.env.VITE_SPONSOR_LEAD_ENDPOINT;

  return (
    <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Sponsors</p>
        <h1>Turn sponsor interest into a cleaner lead path.</h1>
        <p>
          The sponsor page now shows the real current partner logos and gives
          ATB a single place to capture sponsor intent before payment and logo
          collection are fully wired.
        </p>
      </div>

      <div className="level-grid sponsor-tier-grid">
        {sponsorTiers.map((tier) => (
          <article key={tier.name} className="content-panel">
            <p className="eyebrow">{tier.name}</p>
            <h2>{tier.name} Sponsorship</h2>
            <p>{tier.detail}</p>
            <p className="helper-copy">
              Current-season pricing and payment links belong here once ATB
              confirms them.
            </p>
          </article>
        ))}
      </div>

      <LeadForm
        formId="sponsor-lead"
        title="Start a sponsor lead"
        description="Use this form now for sponsor intent. Once ATB confirms checkout tooling, this can expand into payment plus logo upload."
        fields={sponsorLeadFields}
        submitLabel="Send sponsor inquiry"
        successTitle="Sponsor lead started"
        successMessage="ATB now has the sponsor contact details needed for next-step follow-up."
        endpoint={sponsorLeadEndpoint}
        mailtoSubject="ATB sponsor inquiry"
        events={{
          success: "sponsor_inquiry_submit",
          fail: "contact_submit_fail"
        }}
        aside="This captures sponsor intent now. Online checkout and logo upload can be added here once ATB finalizes payment ownership."
      />

      <SponsorsSection />

      <div className="split-section">
        <div className="content-panel dark-panel">
          <p className="eyebrow">Activation</p>
          <h2>Keep sponsors visible after the sale.</h2>
          <div className="feature-list">
            <div className="feature-row">
              Monthly sponsor spotlight post template
            </div>
            <div className="feature-row">
              Sponsor logo strip on key ATB pages
            </div>
            <div className="feature-row">
              Event-day recognition and social mention opportunities
            </div>
          </div>
        </div>

        <div className="content-panel">
          <p className="eyebrow">Next upgrade</p>
          <h2>Close the loop with payment and intake.</h2>
          <p>
            The remaining gap is operational, not design: ATB still needs a live
            checkout link, receipt flow, and logo upload path connected here.
          </p>
          <p className="helper-copy">
            Sponsor receipt emails, logo upload, and outbound sponsor click
            tracking can be layered in next to complete the funnel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SponsorsPage;
