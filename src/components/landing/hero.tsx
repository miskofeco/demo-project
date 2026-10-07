import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  Calendar03Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import type { SiteContent } from "@/content/types";

import { Countdown } from "./countdown";
import { SignalArt } from "./signal-art";

export function Hero({ content }: { content: SiteContent }) {
  return (
    <section
      className="grid gap-4 lg:grid-cols-[minmax(0,1.72fr)_minmax(315px,0.83fr)]"
      aria-labelledby="hero-title"
    >
      <div className="hero-panel relative flex min-h-[550px] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-hero p-7 text-hero-foreground sm:min-h-[610px] sm:p-11 lg:p-14">
        <SignalArt />
        <div className="relative z-10 max-w-2xl">
          <h1
            id="hero-title"
            className="max-w-[11ch] font-heading text-[clamp(3.1rem,7vw,6rem)] leading-[0.99] font-bold tracking-[-0.04em] text-balance"
          >
            {content.hero.title}
          </h1>
          <p className="mt-8 max-w-[48ch] text-base leading-relaxed text-hero-foreground/75 sm:text-lg">
            {content.hero.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-signal px-6 text-signal-foreground hover:bg-signal/85"
            >
              <a href="#program">
                {content.hero.primaryAction}
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={18}
                  aria-hidden="true"
                />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-hero-foreground/25 bg-transparent px-6 text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground"
            >
              <a href="#speakers">
                {content.hero.secondaryAction}
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={17}
                  aria-hidden="true"
                />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative z-10 mt-14 border-t border-hero-foreground/20 pt-5 text-xs leading-relaxed text-hero-foreground/60">
          {content.hero.sampleNotice}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[1.35fr_0.65fr]">
        <Countdown content={content.countdown} />
        <div className="info-panel flex flex-col justify-between overflow-hidden rounded-[1.5rem] bg-card p-6 ring-1 ring-border/70 sm:p-8">
          <div className="flex items-center justify-between text-foreground">
            <span className="font-heading text-2xl font-bold tracking-tight">
              {content.hero.locationCode}
            </span>
            <span className="info-orbit" aria-hidden="true">
              <span />
            </span>
          </div>
          <div className="mt-9 grid gap-4 sm:mt-0 sm:grid-cols-1">
            <div className="flex items-start gap-3">
              <HugeiconsIcon
                icon={Calendar03Icon}
                size={19}
                className="mt-0.5 shrink-0 text-brand"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs text-muted-foreground">
                  {content.hero.dateLabel}
                </p>
                <p className="mt-0.5 font-medium">{content.countdown.date}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HugeiconsIcon
                icon={Location01Icon}
                size={19}
                className="mt-0.5 shrink-0 text-brand"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs text-muted-foreground">
                  {content.hero.locationLabel}
                </p>
                <p className="mt-0.5 font-medium">
                  {content.hero.locationValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
