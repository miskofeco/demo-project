"use client";

import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      size="icon-lg"
      variant="outline"
      className="size-10 rounded-full border-border/70 bg-card/80"
      aria-label={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <HugeiconsIcon
        icon={Moon02Icon}
        size={18}
        className="dark:hidden"
        aria-hidden="true"
      />
      <HugeiconsIcon
        icon={Sun03Icon}
        size={18}
        className="hidden dark:block"
        aria-hidden="true"
      />
    </Button>
  );
}
