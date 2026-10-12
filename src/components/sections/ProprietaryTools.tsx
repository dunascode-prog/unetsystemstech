"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { BarChart3, Briefcase, ChevronLeft, ChevronRight, Headset, MonitorDot } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const tools = [
  {
    Icon: MonitorDot,
    title: "Custom Monitoring Tools",
    body: "Real-time visibility into application, infrastructure, network and security events.",
  },
  {
    Icon: Briefcase,
    title: "Enterprise Business Tools",
    body: "Technical and business metrics combined into visual insights for teams and executives.",
  },
  {
    Icon: BarChart3,
    title: "Intelligence Tools",
    body: "BI solutions that unify your data sources and turn them into reports and forecasts.",
  },
  {
    Icon: Headset,
    title: "IT Service Desk Systems",
    body: "Manage incidents, requests, assets, workflows and performance reporting in one place.",
  },
];

const stats = [
  { value: 157, decimals: 0, suffix: "+", label: "Completed projects" },
  { value: 4, decimals: 0, suffix: "x", label: "Revenue growth" },
  { value: 99.9, decimals: 1, suffix: "%", label: "Customer satisfaction" },
];

function Counter({ value, decimals, suffix }: { value: number; decimals: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: setDisplay });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function ProprietaryTools() {
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("article");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 360) + 16), behavior: "smooth" });
  };

  return (
    <section className="pt-32 sm:pt-[160px]">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-6 px-5 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="Proprietary tools" title="Built in-house," subtitle="proven in production." />
        <Button href="#contact" variant="outline" className="w-fit">
          Request a demo
        </Button>
      </div>

      <div className="relative mx-auto mt-12 max-w-[1160px] px-5">
        <div
          ref={track}
          className="-mr-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pr-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:-mr-[calc((100vw-1160px)/2+20px)]"
        >
          {tools.map((t) => (
            <article
              key={t.title}
              className="flex min-h-[250px] w-[300px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-line bg-panel p-6 sm:w-[363px]"
            >
              <span className="grid size-10 place-items-center rounded-lg border border-line bg-panel-2 text-cyan">
                <t.Icon className="size-[18px]" strokeWidth={1.5} />
              </span>
              <div className="mt-8">
                <p className="text-[20px] font-medium tracking-[-0.02em]">{t.title}</p>
                <p className="mt-2 text-[16px] leading-[1.45] text-dim">{t.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button type="button" aria-label="Previous tool" onClick={() => scrollBy(-1)} className="grid size-10 place-items-center rounded-full bg-fg/8 transition hover:bg-fg/15">
            <ChevronLeft className="size-5" />
          </button>
          <button type="button" aria-label="Next tool" onClick={() => scrollBy(1)} className="grid size-10 place-items-center rounded-full bg-fg/8 transition hover:bg-fg/15">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <Reveal className="mx-auto mt-16 grid max-w-[720px] grid-cols-3 divide-x divide-line px-5 text-center">
        {stats.map((s) => (
          <div key={s.label} className="px-2">
            <p className="text-[32px] tracking-[-0.04em] sm:text-[48px]">
              <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-[13px] text-dim sm:text-[14px]">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
