export type Locale = "he" | "en";

export type SiteContent = {
  localeName: string;
  nav: { overview: string; organizers: string; earlyAccess: string };
  common: { home: string; earlyAccess: string; appLink: string; support: string; application: string; platform: string; faq: string; optional: string };
  home: {
    hero: { eyebrow: string; lines: string[]; body: string; primary: string; secondary: string };
    pillarsTitle: string; pillarsIntro: string; pillars: { number: string; title: string; body: string }[];
    preview: { eyebrow: string; title: string; body: string; slots: string[]; placeholder: string; comingLabel: string };
    value: { eyebrow: string; title: string; items: string[] };
    organizer: { eyebrow: string; title: string; body: string; items: string[]; note: string; cta: string };
    access: { eyebrow: string; title: string; body: string; user: string; organizer: string };
    faqTitle: string; faqs: { q: string; a: string }[];
  };
  organizers: {
    title: string; lead: string; capabilities: string[]; processTitle: string;
    process: { title: string; body: string }[]; note: string; formTitle: string; formIntro: string;
    fields: Record<string, string>; submit: string; success: string; required: string; invalidEmail: string; privacy: string;
  };
  support: { title: string; lead: string; items: { title: string; body: string }[]; contactTitle: string; contactBody: string };
  legal: { privacyTitle: string; termsTitle: string; notice: string; intro: string; sections: { title: string; body: string }[] };
  open: { title: string; body: string; note: string };
  download: { title: string; body: string; note: string };
  footer: { line: string; privacy: string; terms: string; support: string; organizers: string; rights: string };
};
