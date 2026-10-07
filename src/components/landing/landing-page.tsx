import type { Locale, SiteContent } from "@/content/types";

import { Faq } from "./faq";
import { Hero } from "./hero";
import { ProgramTabs } from "./program-tabs";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { Speakers } from "./speakers";

export function LandingPage({
  locale,
  content,
}: {
  locale: Locale;
  content: SiteContent;
}) {
  return (
    <div id="top" className="min-h-screen">
      <SiteHeader locale={locale} content={content} />
      <main className="mx-auto max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-10 lg:pt-5">
        <Hero content={content} />
        <section
          id="program"
          className="section-block scroll-mt-8"
          aria-labelledby="program-title"
        >
          <div className="section-heading">
            <div>
              <h2 id="program-title" className="section-title">
                {content.program.title}
              </h2>
              <p className="section-description">
                {content.program.description}
              </p>
            </div>
            <p className="sample-note">{content.program.sampleNotice}</p>
          </div>
          <ProgramTabs content={content.program} />
        </section>
        <Speakers content={content.speakers} />
        <Faq content={content.faq} />
      </main>
      <SiteFooter content={content} />
    </div>
  );
}
