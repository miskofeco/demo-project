import type { SiteContent } from "./types";

export const en = {
  brand: "AI Meetup Košice",
  languageLabel: "Language",
  themeLabel: "Switch color theme",
  navLabel: "Main navigation",
  sectionNavLabel: "Page sections",
  nav: { program: "Agenda", speakers: "Speakers", faq: "FAQ" },
  hero: {
    title: "Ideas that move AI forward.",
    description:
      "A place for people who build, explore, and turn AI into useful things. Meet us in Košice to share experience and start new conversations.",
    primaryAction: "Explore the agenda",
    secondaryAction: "Meet the speakers",
    sampleNotice: "The agenda and profiles are illustrative for now.",
    dateLabel: "Date",
    locationLabel: "Location",
    locationValue: "Košice · venue to be announced",
    locationCode: "KE / 2026",
  },
  countdown: {
    label: "Counting down to the meetup",
    days: "days to go",
    today: "Today's the day",
    passed: "See you next time",
    date: "12 December 2026",
    supporting: "Exact start time coming soon.",
  },
  program: {
    title: "What to expect",
    description:
      "A draft agenda blending practical demos, new perspectives, and time for conversation. We'll publish the final schedule once guests are confirmed.",
    sampleNotice: "Sample agenda · times are not confirmed yet",
    tabs: {
      all: "All",
      talk: "Talks",
      workshop: "Workshop",
      community: "Community",
    },
    items: [
      {
        id: "from-idea",
        category: "talk",
        format: "Talk",
        title: "From idea to useful AI product",
        description:
          "How to turn a prototype into a tool that solves a real problem and earns a place in people's lives.",
        note: "Product & practice",
      },
      {
        id: "build-together",
        category: "workshop",
        format: "Workshop",
        title: "Let's build something together",
        description:
          "A hands-on session for small experiments, quick feedback, and plenty of questions.",
        note: "Interactive",
      },
      {
        id: "responsible-ai",
        category: "talk",
        format: "Talk",
        title: "AI we can trust",
        description:
          "Quality, limitations, and the choices that make AI products more responsible.",
        note: "Research & safety",
      },
      {
        id: "meet-people",
        category: "community",
        format: "Networking",
        title: "Conversations that carry on",
        description:
          "Meet the community, exchange ideas, and find your next collaborators.",
        note: "Community",
      },
    ],
  },
  speakers: {
    title: "Voices from practice and research",
    description:
      "We want to bring different perspectives on AI onto one stage. We'll introduce speakers after they confirm.",
    sampleNotice: "Illustrative topic slots · names coming soon",
    slots: [
      {
        id: "product",
        number: "01",
        focus: "Product",
        title: "AI in real products",
        description:
          "Someone turning model capabilities into thoughtful user experiences.",
      },
      {
        id: "research",
        number: "02",
        focus: "Research",
        title: "Beyond the demo",
        description:
          "A view of what works today, what doesn't, and where we go next.",
      },
      {
        id: "community",
        number: "03",
        focus: "Community",
        title: "People around AI",
        description:
          "Stories of collaboration, learning, and ideas that grow between people.",
      },
    ],
  },
  faq: {
    title: "Good to know",
    description:
      "Quick answers to the things you may want to ask before the meetup.",
    items: [
      {
        id: "when",
        question: "When and where is it happening?",
        answer:
          "We're planning the meetup for 12 December 2026 in Košice. We'll share the exact time and venue once the space is confirmed.",
      },
      {
        id: "who",
        question: "Who is the meetup for?",
        answer:
          "Anyone curious about building and using AI. We want the agenda to offer something for interested newcomers and experienced practitioners alike.",
      },
      {
        id: "tickets",
        question: "Can I register already?",
        answer:
          "We'll open preregistration after reliable delivery of submissions is in place. For now, this site is informational.",
      },
      {
        id: "price",
        question: "Will there be an entry fee?",
        answer:
          "We'll announce ticket details alongside the final agenda and venue.",
      },
    ],
  },
  footer: {
    title: "See you in Košice.",
    description: "Ideas grow faster when people come together around them.",
    status: "12 Dec 2026 · time and venue to be announced",
    copyright: "AI Meetup Košice. All rights reserved.",
    backToTop: "Back to top",
  },
} satisfies SiteContent;
