# AI Meetup Košice

Web podujatia postavený na Next.js App Routeri, TypeScripte, Tailwinde,
shadcn/ui, Hugeicons a Motion. Schválený postup je v [docs/PLAN.md](docs/PLAN.md).

## Spustenie

Vyžaduje Node.js a pnpm.

```bash
pnpm install
pnpm dev
```

Stránka bude dostupná na [http://localhost:3000](http://localhost:3000).

## Kontroly

```bash
pnpm lint
pnpm typecheck
pnpm format:check
pnpm build
```

Landing je dostupný na `/sk` a `/en` (adresa `/` presmeruje na `/sk`). Obsah a
ukážkové dáta sú v `src/content/`; farby a písma v `src/app/globals.css`.
Predregistrácia zatiaľ nie je otvorená. Mock registrácia nebude slúžiť na
verejný zber.
