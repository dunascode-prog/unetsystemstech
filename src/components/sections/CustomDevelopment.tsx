"use client";

import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, Boxes, ChevronRight, Code2, ShieldCheck } from "lucide-react";
import LightBars from "@/components/ui/LightBars";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const cases = [
  {
    title: "Software Excellence",
    Icon: Code2,
    body: "Custom development tailored to your business logic, not off-the-shelf software bent to fit.",
    points: ["Custom application development", "Business-logic driven design", "Testing & optimisation"],
  },
  {
    title: "System Integrity",
    Icon: ShieldCheck,
    body: "Your data, software and databases protected and managed end to end.",
    points: ["Data security", "Software security", "Database management"],
  },
  {
    title: "Operational Intelligence",
    Icon: Activity,
    body: "Know what your systems are doing at all times, with people ready to act when they need attention.",
    points: ["Custom monitoring tools", "24/7 service desk support", "Alerting & analytics"],
  },
  {
    title: "Enterprise Architecture",
    Icon: Boxes,
    body: "Systems that talk to each other, set up properly from day one.",
    points: ["System integration", "End-to-end enterprise setup", "API & platform connectivity"],
  },
];

export default function CustomDevelopment() {
  const [active, setActive] = useState(0);
  const current = cases[active];

  return (
    <section id="solutions" className="mx-auto max-w-[1160px] scroll-mt-24 px-5 pt-32 sm:pt-[160px]">
      <SectionHeading eyebrow="Custom development" title="Built around your business," subtitle="not the other way round." />

      <Reveal className="mt-14 grid overflow-hidden rounded-2xl border border-line bg-panel lg:grid-cols-[446fr_672fr]">
        <ul className="divide-y divide-line lg:border-r lg:border-line">
          {cases.map((c, i) => {
            const isActive = i === active;
            return (
              <li key={c.title}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={isActive}
                  className="flex w-full items-start gap-4 px-6 py-6 text-left"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-panel-2 text-cyan">
                    <c.Icon className="size-[18px]" strokeWidth={1.5} />
                  </span>
                  <span className="flex-1 pt-2">
                    <span className="flex items-center justify-between text-[20px] font-medium leading-none tracking-[-0.02em]">
                      {c.title}
                      <ChevronRight
                        className={clsx("size-4 text-fg/80 transition-transform", isActive && "rotate-90")}
                      />
                    </span>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.span
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="block overflow-hidden"
                        >
                          <span className="block pt-4 text-[17px] leading-[1.4] text-dim">{c.body}</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="relative grid min-h-[300px] place-items-center overflow-hidden sm:min-h-[450px]">
          <LightBars className="absolute inset-0" focus="90% 70%" drift={6} intensity={0.8} />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="relative w-[min(380px,80%)] rounded-2xl border border-line-strong bg-panel p-6 shadow-[0_20px_60px_-20px_rgb(0_0_0_/0.35)]"
            >
              <span className="grid size-12 place-items-center rounded-xl border border-line bg-panel-2 text-cyan">
                <current.Icon className="size-6" strokeWidth={1.5} />
              </span>
              <p className="mt-5 text-[22px] font-medium tracking-[-0.02em]">{current.title}</p>
              <ul className="mt-4 space-y-3 border-t border-line pt-4">
                {current.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[15px] text-dim">
                    <span className="size-1.5 rounded-full bg-cyan" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
