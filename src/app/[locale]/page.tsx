import { notFound } from "next/navigation";

import { LandingPage } from "@/components/landing/landing-page";
import { getContent, isLocale } from "@/content/site";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <LandingPage locale={locale} content={getContent(locale)} />;
}
