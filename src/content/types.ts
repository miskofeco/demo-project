export type Locale = "sk" | "en";
export type ProgramCategory = "talk" | "workshop" | "community";

export type ProgramItem = {
  id: string;
  category: ProgramCategory;
  format: string;
  title: string;
  description: string;
  note: string;
};

export type SpeakerSlot = {
  id: string;
  number: string;
  focus: string;
  title: string;
  description: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type SiteContent = {
  brand: string;
  languageLabel: string;
  themeLabel: string;
  navLabel: string;
  sectionNavLabel: string;
  nav: { program: string; speakers: string; faq: string };
  hero: {
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    sampleNotice: string;
    dateLabel: string;
    locationLabel: string;
    locationValue: string;
    locationCode: string;
  };
  countdown: {
    label: string;
    days: string;
    today: string;
    passed: string;
    date: string;
    supporting: string;
  };
  program: {
    title: string;
    description: string;
    sampleNotice: string;
    tabs: Record<"all" | ProgramCategory, string>;
    items: ProgramItem[];
  };
  speakers: {
    title: string;
    description: string;
    sampleNotice: string;
    slots: SpeakerSlot[];
  };
  faq: {
    title: string;
    description: string;
    items: FaqItem[];
  };
  footer: {
    title: string;
    description: string;
    status: string;
    copyright: string;
    backToTop: string;
  };
};
