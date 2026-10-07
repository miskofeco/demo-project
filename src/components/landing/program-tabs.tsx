"use client";

import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type {
  ProgramCategory,
  ProgramItem,
  SiteContent,
} from "@/content/types";

const filters = ["all", "talk", "workshop", "community"] as const;

function ProgramCard({
  item,
  index,
  featured,
}: {
  item: ProgramItem;
  index: number;
  featured: boolean;
}) {
  const span = featured
    ? index === 0
      ? "lg:col-span-4"
      : index === 1
        ? "lg:col-span-2"
        : "lg:col-span-3"
    : "lg:col-span-3";

  return (
    <Card
      className={`min-h-[245px] justify-between rounded-[1.25rem] py-6 ring-border/70 ${span} ${featured && index === 0 ? "program-feature" : ""}`}
    >
      <CardHeader className="flex flex-row items-start justify-between gap-4 px-6">
        <Badge
          variant="outline"
          className="h-auto rounded-full border-current/20 bg-transparent px-3 py-1.5 text-[0.7rem] font-semibold tracking-wide"
        >
          {item.format}
        </Badge>
        <HugeiconsIcon
          icon={ArrowUpRight01Icon}
          size={20}
          className="shrink-0 opacity-50"
          aria-hidden="true"
        />
      </CardHeader>
      <CardContent className="px-6">
        <p className="mb-3 text-xs font-medium tracking-wide opacity-65">
          {item.note}
        </p>
        <h3 className="max-w-[20ch] font-heading text-2xl leading-tight font-bold tracking-tight sm:text-[1.75rem]">
          {item.title}
        </h3>
        <p className="mt-3 max-w-[52ch] text-sm leading-relaxed opacity-75">
          {item.description}
        </p>
      </CardContent>
    </Card>
  );
}

export function ProgramTabs({ content }: { content: SiteContent["program"] }) {
  return (
    <Tabs defaultValue="all" className="mt-8">
      <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        <TabsList
          aria-label={content.title}
          className="h-auto gap-1 rounded-full border border-border/70 bg-card p-1.5"
        >
          {filters.map((filter) => (
            <TabsTrigger
              key={filter}
              value={filter}
              className="h-9 min-w-max rounded-full px-4 text-sm data-active:bg-foreground data-active:text-background dark:data-active:bg-foreground dark:data-active:text-background"
            >
              {content.tabs[filter]}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {filters.map((filter) => {
        const items =
          filter === "all"
            ? content.items
            : content.items.filter(
                (item) => item.category === (filter as ProgramCategory),
              );

        return (
          <TabsContent key={filter} value={filter} className="mt-5">
            <div className="grid gap-4 lg:grid-cols-6">
              {items.map((item, index) => (
                <ProgramCard
                  key={item.id}
                  item={item}
                  index={index}
                  featured={filter === "all"}
                />
              ))}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
