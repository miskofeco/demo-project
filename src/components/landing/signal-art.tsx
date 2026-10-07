"use client";

import { motion, useReducedMotion } from "motion/react";

export function SignalArt() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="signal-art pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="signal-haze" />
      <motion.div
        className="signal-ring signal-ring-outer"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 36, ease: "linear", repeat: Infinity }}
      >
        <span className="signal-dot signal-dot-outer" />
      </motion.div>
      <motion.div
        className="signal-ring signal-ring-inner"
        animate={reducedMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        <span className="signal-dot signal-dot-inner" />
      </motion.div>
      <div className="signal-core">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
