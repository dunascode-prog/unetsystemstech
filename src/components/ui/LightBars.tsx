"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

type LightBarsProps = {
  className?: string;
  /** Where the brightest part of the glow sits, as a CSS position (e.g. "70% 100%"). */
  focus?: string;
  /** How far the glow drifts left/right, in % of the container width. */
  drift?: number;
  intensity?: number;
  /** Size of the glow ellipse, as CSS radial-gradient size (e.g. "60% 90%"). */
  size?: string;
};

// Thin vertical light streaks: a cyan glow seen through a striped mask, with the glow slowly drifting.
const stripes =
  "repeating-linear-gradient(90deg, #000 0 3px, rgba(0,0,0,.6) 3px 5px, transparent 5px 7px, rgba(0,0,0,.35) 7px 9px, transparent 9px 11px)";

export default function LightBars({
  className,
  focus = "50% 100%",
  drift = 8,
  intensity = 1,
  size = "45% 85%",
}: LightBarsProps) {
  const glow = `radial-gradient(ellipse ${size} at ${focus}, rgba(33,210,237,${0.95 * intensity}) 0%, rgba(33,170,200,${0.45 * intensity}) 35%, rgba(20,90,110,${0.15 * intensity}) 60%, transparent 80%)`;

  return (
    <div aria-hidden className={clsx("pointer-events-none overflow-hidden", className)}>
      <motion.div
        className="absolute inset-y-0 -left-[15%] w-[130%] opacity-50 blur-2xl"
        style={{ background: glow }}
        animate={{ x: [`-${drift}%`, `${drift}%`, `-${drift}%`] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0" style={{ maskImage: stripes, WebkitMaskImage: stripes }}>
        <motion.div
          className="absolute inset-y-0 -left-[15%] w-[130%]"
          style={{ background: glow }}
          animate={{ x: [`-${drift}%`, `${drift}%`, `-${drift}%`] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
