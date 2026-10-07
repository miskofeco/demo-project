# AI Meetup Košice — plán prvej verzie

## Cieľ

Responzívny web s landing sekciou, ukážkovým programom, ukážkovými rečníkmi,
predregistráciou a FAQ. Dátum je 12. december 2026; čas a miesto sú zatiaľ
„Upresníme“. Základné texty
rozhrania, formulár a FAQ budú v slovenčine a angličtine.

## Rozhodnutia

- Stack: Next.js App Router, TypeScript v režime `strict`, Tailwind CSS,
  shadcn/ui, Hugeicons a Motion.
- Stránky budú na adresách `/sk` a `/en`; slovenčina je predvolený jazyk.
- Obsah programu a rečníkov bude typovaný a oddelený od komponentov. Ukážkové
  údaje musia byť jasne označené ako nepotvrdené.
- Formulár zbiera iba meno a e-mail. Kým nie sú známe podrobnosti podujatia,
  nazýva sa „predregistrácia“.
- Serverová akcia validuje údaje a volá rozhranie `RegistrationStore`.
  `MockRegistrationStore` slúži na vývoj a ukážku; jeho údaje nie sú trvalé.
- Verejný zber sa spustí až s implementáciou `RegistrationStore`, ktorá spoľahlivo
  doručí prihlášku organizátorovi bez databázy, a po overení doručenia.
- Stránka a obsah budú predvolene serverové komponenty. Klientské komponenty
  budú vyhradené pre interakcie a animácie.

## Kroky

1. **Základ projektu:** založiť Next.js aplikáciu; nastaviť strict TypeScript,
   Tailwind, shadcn/ui, Hugeicons, Motion, ESLint, Prettier a `.gitignore`
   vrátane `.env` súborov. Overiť lint a produkčný build.
2. **Jazyky:** vytvoriť `/sk` a `/en`, základné slovníky a prepínač jazyka.
   Overiť obe adresy a preklady kľúčového rozhrania.
3. **Obsah a rozloženie:** vytvoriť typované ukážkové údaje, hlavičku, úvod,
   program, rečníkov, FAQ a pätu. Skontrolovať mobilné zobrazenie.
4. **Predregistrácia:** pridať validovaný formulár, serverovú akciu,
   `RegistrationStore` a mock implementáciu. Overiť úspech aj chybové stavy.
5. **Verejné doručenie:** doplniť produkčnú implementáciu store bez databázy,
   ochranu verejného formulára a overiť príjem prihlášky. Do tohto bodu
   neoznačovať mock odoslanie za skutočnú registráciu.
6. **Dokončenie:** pridať striedme animácie s rešpektovaním obmedzeného pohybu,
   skontrolovať prístupnosť, SEO, obsah, oba jazyky, lint a build.

## Hotové pre krok 1

Projekt sa dá nainštalovať a spustiť; `pnpm lint` a `pnpm build` prejdú.
Závislosti a nastavenia sú uložené v repozitári a citlivé `.env` súbory Git
ignoruje.

## Stav k 7. októbru 2026

Kroky 1–3 sú hotové: základ projektu, SK/EN adresy a landing s hero odpočtom,
filtrovaným ukážkovým programom, tematickými kartami rečníkov, FAQ a footerom.
Presný čas a miesto zostávajú otvorené. Registrácia (kroky 4–5) ešte nie je
spustená.
