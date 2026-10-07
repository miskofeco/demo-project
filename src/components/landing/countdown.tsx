"use client";

import { SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";

import { eventDate } from "@/content/event";
import type { SiteContent } from "@/content/types";

function daysUntilEvent() {
  const dateParts = new Intl.DateTimeFormat("en-GB", {
    timeZone: eventDate.timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(new Date());
  const part = (type: string) =>
    Number(dateParts.find((item) => item.type === type)?.value);
  const today = Date.UTC(part("year"), part("month") - 1, part("day"));
  const event = Date.UTC(eventDate.year, eventDate.month - 1, eventDate.day);

  return Math.round((event - today) / 86_400_000);
}

export function Countdown({ content }: { content: SiteContent["countdown"] }) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setDays(daysUntilEvent());
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] bg-signal p-6 text-signal-foreground sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <p className="max-w-40 text-sm leading-snug font-semibold">
          {content.label}
        </p>
        <HugeiconsIcon icon={SparklesIcon} size={28} aria-hidden="true" />
      </div>
      <div aria-live="polite" className="mt-10">
        {days === null ? (
          <span
            className="font-heading text-7xl font-bold tabular-nums"
            aria-hidden="true"
          >
            —
          </span>
        ) : days > 0 ? (
          <>
            <p className="font-heading text-[clamp(5rem,10vw,8.5rem)] leading-[0.8] font-bold tracking-[-0.04em] tabular-nums">
              {days}
            </p>
            <p className="mt-4 text-sm font-semibold">{content.days}</p>
          </>
        ) : (
          <p className="font-heading text-4xl leading-tight font-bold">
            {days === 0 ? content.today : content.passed}
          </p>
        )}
      </div>
      <div className="mt-8 border-t border-signal-foreground/20 pt-4">
        <p className="font-heading text-lg font-bold">{content.date}</p>
        <p className="mt-1 text-xs text-signal-foreground/75">
          {content.supporting}
        </p>
      </div>
    </div>
  );
}
