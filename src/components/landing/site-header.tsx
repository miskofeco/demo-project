import { AiBrain01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";
import type { Locale, SiteContent } from "@/content/types";

export function SiteHeader({
  locale,
  content,
}: {
  locale: Locale;
  content: SiteContent;
}) {
  const otherLocale = locale === "sk" ? "en" : "sk";

  return (
    <header className="relative z-20 mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-10 lg:pt-7">
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-border/70 bg-card px-4 py-3 shadow-sm shadow-foreground/5 sm:px-5">
        <Link
          href={`/${locale}`}
          className="group flex min-w-0 items-center gap-3"
          aria-label={content.brand}
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-foreground text-background transition-transform group-hover:rotate-[-8deg]">
            <HugeiconsIcon icon={AiBrain01Icon} size={20} aria-hidden="true" />
          </span>
          <span className="truncate font-heading text-base font-bold tracking-tight sm:text-lg">
            {content.brand}
          </span>
        </Link>
        <nav
          aria-label={content.navLabel}
          className="hidden items-center gap-1 md:flex"
        >
          <a href="#program" className="nav-link">
            {content.nav.program}
          </a>
          <a href="#speakers" className="nav-link">
            {content.nav.speakers}
          </a>
          <a href="#faq" className="nav-link">
            {content.nav.faq}
          </a>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={`/${otherLocale}`}
            className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-border/70 bg-background px-3 text-xs font-bold tracking-[0.12em] transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label={`${content.languageLabel}: ${otherLocale.toUpperCase()}`}
          >
            {otherLocale.toUpperCase()}
          </Link>
          <ThemeToggle label={content.themeLabel} />
        </div>
      </div>
      <nav
        aria-label={content.sectionNavLabel}
        className="mt-3 flex justify-center gap-1 md:hidden"
      >
        <a href="#program" className="nav-link">
          {content.nav.program}
        </a>
        <a href="#speakers" className="nav-link">
          {content.nav.speakers}
        </a>
        <a href="#faq" className="nav-link">
          {content.nav.faq}
        </a>
      </nav>
    </header>
  );
}
