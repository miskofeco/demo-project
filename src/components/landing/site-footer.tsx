import { AiBrain01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { eventDate } from "@/content/event";
import type { SiteContent } from "@/content/types";

export function SiteFooter({ content }: { content: SiteContent }) {
  return (
    <footer className="mt-20 bg-hero text-hero-foreground">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-[1fr_auto]">
          <div>
            <HugeiconsIcon
              icon={AiBrain01Icon}
              size={30}
              className="text-signal"
              aria-hidden="true"
            />
            <h2 className="mt-7 font-heading text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
              {content.footer.title}
            </h2>
            <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-hero-foreground/65 sm:text-base">
              {content.footer.description}
            </p>
          </div>
          <nav
            aria-label={content.brand}
            className="flex flex-wrap items-start gap-5 text-sm sm:flex-col sm:gap-3"
          >
            <a href="#program" className="footer-link">
              {content.nav.program}
            </a>
            <a href="#speakers" className="footer-link">
              {content.nav.speakers}
            </a>
            <a href="#faq" className="footer-link">
              {content.nav.faq}
            </a>
          </nav>
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-hero-foreground/20 pt-6 text-xs text-hero-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <span>{content.footer.status}</span>
            <span>
              © {eventDate.year} {content.footer.copyright}
            </span>
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-2 self-start font-semibold text-hero-foreground transition-colors hover:text-signal"
          >
            {content.footer.backToTop}
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={16}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
