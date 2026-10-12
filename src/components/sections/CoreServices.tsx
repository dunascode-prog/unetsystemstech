import { Code2, Database, Headset, Network } from "lucide-react";
import LightBars from "@/components/ui/LightBars";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    Icon: Code2,
    title: "Software Development & Engineering",
    body: "Full-lifecycle design, development, testing, deployment and optimisation of custom software.",
    focus: "20% 60%",
  },
  {
    Icon: Network,
    title: "System Integration & Enterprise Architecture",
    body: "Connecting your business systems, platforms, APIs and infrastructure into one coherent whole.",
    focus: "10% 70%",
  },
  {
    Icon: Database,
    title: "Database Management & Services",
    body: "Database design, integration, maintenance and security, built to scale with your data.",
    focus: "15% 80%",
  },
  {
    Icon: Headset,
    title: "IT Service Desk & Management",
    body: "Customer support, incident management and SLA-driven operations that keep you running.",
    focus: "30% 70%",
  },
];

export default function CoreServices() {
  return (
    <section id="services" className="mx-auto max-w-[1160px] scroll-mt-24 px-5 pt-32 sm:pt-[160px]">
      <SectionHeading eyebrow="Core services" title="Your strategic" subtitle="technology partner." />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} className="overflow-hidden rounded-2xl border border-line bg-panel">
            <div className="relative m-3 grid aspect-[4/3] place-items-center overflow-hidden rounded-xl">
              <LightBars className="absolute inset-0" focus={s.focus} drift={14} size="75% 95%" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-panel to-transparent" />
              <span className="relative grid size-16 place-items-center rounded-2xl border border-line-strong bg-panel text-cyan">
                <s.Icon className="size-7" strokeWidth={1.5} />
              </span>
            </div>
            <div className="px-6 pb-7 pt-2">
              <h3 className="text-[19px] font-medium leading-[1.2] tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-2 text-[16px] leading-[1.4] text-dim">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
