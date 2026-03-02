import PageSeo from "../components/PageSeo";
import LeadForm from "../components/LeadForm";
import SponsorsSection from "../components/Sponsors";
import {
  breadcrumbSchema,
  organizationSchema,
  webPageSchema
} from "../lib/site";

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
  const title = "Sponsor ATB | Reach Arlington Baseball Families";
  const description =
    "ATB sponsorship opportunities, current sponsor visibility, and a direct path for local businesses to connect with Arlington baseball families.";

  return (
    <>
      <PageSeo
        title={title}
        description={description}
        path="/sponsors"
        schema={[
          organizationSchema(),
          webPageSchema({
            path: "/sponsors",
            title,
            description
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Sponsors", path: "/sponsors" }
          ])
        ]}
      />

      <section className="page-shell">
      <div className="page-hero">
        <p className="eyebrow">Sponsors</p>
        <h1>Support player development and put your brand in front of Arlington baseball families.</h1>
        <p>
          ATB partnerships help fuel player growth, strengthen the club, and
          connect local businesses with a strong community of families.
        </p>
      </div>

      <div className="level-grid sponsor-tier-grid">
        {sponsorTiers.map((tier) => (
          <article key={tier.name} className="content-panel">
            <p className="eyebrow">{tier.name}</p>
            <h2>{tier.name} Sponsorship</h2>
            <p>{tier.detail}</p>
          </article>
        ))}
      </div>

      <LeadForm
        formId="sponsor-lead"
        title="Start a sponsor lead"
        description="Tell ATB about your business, your goals, and the audience you want to reach."
        fields={sponsorLeadFields}
        submitLabel="Send sponsor inquiry"
        successTitle="Sponsor inquiry received"
        successMessage="ATB has your information and will follow up with the right next step."
        endpoint={sponsorLeadEndpoint}
        mailtoSubject="ATB sponsor inquiry"
        events={{
          success: "sponsor_inquiry_submit",
          fail: "contact_submit_fail"
        }}
        aside="A simple first step for businesses ready to support the club."
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
          <p className="eyebrow">Why it matters</p>
          <h2>Support that shows up on the field and in the community.</h2>
          <p>
            Sponsorship helps strengthen player opportunities, support events,
            and keep ATB visible across the Arlington baseball community.
          </p>
          <p className="helper-copy">ATB partnerships are built to be visible, practical, and community-driven.</p>
        </div>
      </div>
      </section>
    </>
  );
}

export default SponsorsPage;
