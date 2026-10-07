"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { SiteContent } from "@/content/types";

export function Faq({ content }: { content: SiteContent["faq"] }) {
  return (
    <section
      id="faq"
      className="section-block scroll-mt-8"
      aria-labelledby="faq-title"
    >
      <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 id="faq-title" className="section-title">
            {content.title}
          </h2>
          <p className="section-description">{content.description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          defaultValue={content.items[0]?.id}
          className="rounded-[1.25rem] bg-card px-5 ring-1 ring-border/70 sm:px-8"
        >
          {content.items.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-border/70 py-2"
            >
              <AccordionTrigger className="min-h-14 gap-5 py-3 text-base leading-snug font-semibold hover:no-underline sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-[65ch] pr-8 pb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
