import { defaultSportsTeamTemplates } from "../../content-manager-kit/frontend/defaultSportsTeamTemplates.ts";

const siteTemplates = [
  ...defaultSportsTeamTemplates,
  {
    id: "president-note",
    label: "President Note",
    type: "letter",
    description: "Feature a short leadership note for families on the homepage or admin dashboard.",
    defaults: {
      title: "ATB Update",
      body: "Share a short note from the ATB leadership team.",
      status: "draft",
      priority: 12,
      tags: ["homepage", "leadership"]
    }
  },
  {
    id: "academy-promo",
    label: "Academy Promo",
    type: "academy",
    description: "Promote academy sessions, new player development windows, or youth clinics.",
    defaults: {
      title: "Academy Registration Is Open",
      body: "Share the age window, time, and registration details.",
      status: "draft",
      priority: 18,
      tags: ["academy", "registration", "homepage"],
      notifyComms: true
    }
  }
];

export default siteTemplates;
