import { AiBrain01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-6 py-16">
      <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <HugeiconsIcon icon={AiBrain01Icon} size={26} aria-hidden="true" />
      </div>
      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Košice · termín a miesto upresníme
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          AI Meetup Košice
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Pripravujeme web pre komunitné stretnutie o umelej inteligencii.
          Program, rečníkov a predregistráciu doplníme v ďalších krokoch.
        </p>
      </div>
      <div>
        <Button disabled>Predregistrácia čoskoro</Button>
      </div>
    </main>
  );
}
