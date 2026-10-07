import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Meetup Košice",
  description: "Komunitné stretnutie o umelej inteligencii v Košiciach.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sk" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
