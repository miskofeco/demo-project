import { en } from "./en";
import { sk } from "./sk";
import type { Locale, SiteContent } from "./types";

export const locales = ["sk", "en"] as const satisfies readonly Locale[];

const content: Record<Locale, SiteContent> = { sk, en };

export function isLocale(value: string): value is Locale {
  return value === "sk" || value === "en";
}

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
