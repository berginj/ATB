import PageSeo from "../components/PageSeo";
import { ContentManagerWorkspace, manifest, siteTemplates } from "../features/content-manager-kit";
import {
  breadcrumbSchema,
  organizationSchema,
  webPageSchema
} from "../lib/site";

function ContentManager() {
  const title = "Content Manager | Arlington Travel Baseball";
  const description =
    "ATB staff workspace for managing homepage modules, announcements, and evergreen content blocks.";

  return (
    <>
      <PageSeo
        title={title}
        description={description}
        path="/content-manager"
        robots="noindex,nofollow"
        schema={[
          organizationSchema(),
          webPageSchema({
            path: "/content-manager",
            title,
            description
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Content Manager", path: "/content-manager" }
          ])
        ]}
      />

      <section className="page-shell">
        <div className="page-hero">
          <p className="eyebrow">Staff Tools</p>
          <h1>Manage homepage content from one workspace.</h1>
          <p>
            This React wrapper uses the shared content-manager-kit templates and
            keeps ATB updates, announcements, and homepage modules organized in
            one place.
          </p>
          <p className="helper-copy">
            Changes are saved in this browser. Export the JSON document when you
            want to review or carry updates into source control.
          </p>
          <p className="helper-copy">
            Powered by {manifest.name} v{manifest.version}.
          </p>
        </div>

        <ContentManagerWorkspace templates={siteTemplates} />
      </section>
    </>
  );
}

export default ContentManager;
