import type { SiteContent } from "./types";

export const sk = {
  brand: "AI Meetup Košice",
  languageLabel: "Jazyk",
  themeLabel: "Prepnúť farebný režim",
  navLabel: "Hlavná navigácia",
  sectionNavLabel: "Sekcie stránky",
  nav: { program: "Program", speakers: "Rečníci", faq: "FAQ" },
  hero: {
    title: "Nápady, ktoré posúvajú AI dopredu.",
    description:
      "Priestor pre ľudí, ktorí AI tvoria, skúšajú a menia na užitočné veci. Stretnime sa v Košiciach, zdieľajme skúsenosti a otvorme nové rozhovory.",
    primaryAction: "Preskúmať program",
    secondaryAction: "Spoznať rečníkov",
    sampleNotice: "Program a profily sú zatiaľ ukážkové.",
    dateLabel: "Dátum",
    locationLabel: "Miesto",
    locationValue: "Košice · miesto upresníme",
    locationCode: "KE / 2026",
  },
  countdown: {
    label: "Odpočítavame do meetupu",
    days: "dní zostáva",
    today: "Dnes je ten deň",
    passed: "Vidíme sa nabudúce",
    date: "12. december 2026",
    supporting: "Presný čas čoskoro oznámime.",
  },
  program: {
    title: "Čo nás čaká",
    description:
      "Návrh programu mieša praktické ukážky, nové pohľady a čas na rozhovory. Finálny harmonogram zverejníme po potvrdení hostí.",
    sampleNotice: "Ukážkový program · časy ešte nie sú potvrdené",
    tabs: {
      all: "Všetko",
      talk: "Prednášky",
      workshop: "Workshop",
      community: "Komunita",
    },
    items: [
      {
        id: "from-idea",
        category: "talk",
        format: "Prednáška",
        title: "Od nápadu k užitočnému AI produktu",
        description:
          "Ako z prototypu urobiť nástroj, ktorý rieši skutočný problém a ľudia ho chcú používať.",
        note: "Produkt & prax",
      },
      {
        id: "build-together",
        category: "workshop",
        format: "Workshop",
        title: "Postavme niečo spolu",
        description:
          "Spoločný hands-on blok: malé experimenty, rýchla spätná väzba a veľa otázok.",
        note: "Interaktívne",
      },
      {
        id: "responsible-ai",
        category: "talk",
        format: "Prednáška",
        title: "AI, ktorej môžeme dôverovať",
        description:
          "O kvalite, limitoch a rozhodnutiach, ktoré robia AI riešenia zodpovednejšími.",
        note: "Výskum & bezpečnosť",
      },
      {
        id: "meet-people",
        category: "community",
        format: "Networking",
        title: "Rozhovory, ktoré pokračujú ďalej",
        description:
          "Priestor stretnúť ľudí z komunity, vymeniť nápady a nájsť ďalších spolupracovníkov.",
        note: "Komunita",
      },
    ],
  },
  speakers: {
    title: "Hlasy z praxe aj výskumu",
    description:
      "Na pódiu chceme spojiť rôzne pohľady na AI. Konkrétnych rečníkov predstavíme po potvrdení účasti.",
    sampleNotice: "Ukážkové tematické miesta · mená čoskoro",
    slots: [
      {
        id: "product",
        number: "01",
        focus: "Produkt",
        title: "AI v reálnych produktoch",
        description:
          "Človek, ktorý premieňa možnosti modelov na dobré používateľské skúsenosti.",
      },
      {
        id: "research",
        number: "02",
        focus: "Výskum",
        title: "Za hranicou dema",
        description:
          "Pohľad na to, čo dnes funguje, čo ešte nie a kam sa posúvame.",
      },
      {
        id: "community",
        number: "03",
        focus: "Komunita",
        title: "Ľudia okolo AI",
        description:
          "Príbehy spolupráce, učenia a nápadov, ktoré vznikajú medzi ľuďmi.",
      },
    ],
  },
  faq: {
    title: "Dobré vedieť",
    description:
      "Krátke odpovede na veci, ktoré sa chceš opýtať ešte pred meetupom.",
    items: [
      {
        id: "when",
        question: "Kedy a kde sa stretneme?",
        answer:
          "Meetup plánujeme na 12. decembra 2026 v Košiciach. Presný čas a miesto zverejníme po potvrdení priestorov.",
      },
      {
        id: "who",
        question: "Pre koho je meetup určený?",
        answer:
          "Pre každého, koho zaujíma tvorba a praktické využitie AI. Program chceme pripraviť tak, aby si niečo odniesli zvedaví začiatočníci aj ľudia z praxe.",
      },
      {
        id: "tickets",
        question: "Môžem sa už registrovať?",
        answer:
          "Predregistráciu otvoríme až po dokončení spoľahlivého doručenia prihlášok. Aktuálne je stránka informačná.",
      },
      {
        id: "price",
        question: "Bude vstup platený?",
        answer:
          "Informácie o vstupnom zverejníme spolu s finálnym programom a miestom.",
      },
    ],
  },
  footer: {
    title: "Uvidíme sa v Košiciach.",
    description: "Nápady rastú rýchlejšie, keď sa pri nich stretnú ľudia.",
    status: "12. 12. 2026 · čas a miesto upresníme",
    copyright: "AI Meetup Košice. Všetky práva vyhradené.",
    backToTop: "Späť hore",
  },
} satisfies SiteContent;
