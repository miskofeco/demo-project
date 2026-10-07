import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { SiteContent } from "@/content/types";

export function Speakers({ content }: { content: SiteContent["speakers"] }) {
  return (
    <section
      id="speakers"
      className="section-block scroll-mt-8"
      aria-labelledby="speakers-title"
    >
      <div className="section-heading">
        <div>
          <h2 id="speakers-title" className="section-title">
            {content.title}
          </h2>
          <p className="section-description">{content.description}</p>
        </div>
        <p className="sample-note">{content.sampleNotice}</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {content.slots.map((slot) => (
          <Card
            key={slot.id}
            className="gap-0 rounded-[1.25rem] py-0 ring-border/70"
          >
            <div
              className={`speaker-art speaker-art-${slot.id}`}
              aria-hidden="true"
            >
              <span className="speaker-art-number">{slot.number}</span>
              <span className="speaker-art-circle" />
              <span className="speaker-art-line speaker-art-line-one" />
              <span className="speaker-art-line speaker-art-line-two" />
              <span className="speaker-art-line speaker-art-line-three" />
            </div>
            <CardContent className="flex flex-1 flex-col px-6 py-6">
              <div className="flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className="h-auto rounded-full px-3 py-1.5 text-xs"
                >
                  {slot.focus}
                </Badge>
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={19}
                  className="text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-7 font-heading text-[1.45rem] leading-tight font-bold tracking-tight">
                {slot.title}
              </h3>
              <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-muted-foreground">
                {slot.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
