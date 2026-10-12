import { Activity, BrainCircuit, Lock, Server, ShieldCheck, Workflow } from "lucide-react";
import Button from "@/components/ui/Button";
import LightBars from "@/components/ui/LightBars";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  { Icon: Lock, title: "Data Security & Integrity", body: "Encryption, access control, compliance frameworks and data governance." },
  { Icon: Server, title: "Enterprise Setup & System Management", body: "Infrastructure design across cloud and on-prem, enterprise platforms and API connections." },
  { Icon: Activity, title: "Monitoring & Observability", body: "Custom tools for system health, analytics, alerting and performance." },
  { Icon: ShieldCheck, title: "Software & Application Security", body: "Secure SDLC, code reviews, threat modelling and vulnerability remediation." },
  { Icon: BrainCircuit, title: "AI Integration & Design", body: "AI architecture, ML model integration, data pipelines, automation and decision support." },
  { Icon: Workflow, title: "DevOps & Infrastructure", body: "CI/CD automation, cloud architecture, infrastructure-as-code and observability." },
];

export default function ValueLayers() {
  return (
    <section className="mx-auto max-w-[1160px] px-5 pt-32 sm:pt-[160px]">
      <SectionHeading eyebrow="Value-added layers" title="Have perfect control" subtitle="of every layer of your stack." />

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 0.08} className="rounded-2xl border border-line bg-panel p-6">
              <span className="grid size-10 place-items-center rounded-lg border border-line bg-panel-2 text-cyan">
                <f.Icon className="size-[18px]" strokeWidth={1.5} />
              </span>
              <h3 className="mt-12 text-[20px] font-medium tracking-[-0.02em]">{f.title}</h3>
              <p className="mt-2 text-[16px] leading-[1.45] text-dim">{f.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-2xl border border-line bg-panel p-6">
          <LightBars className="absolute inset-x-0 top-0 h-[70%]" focus="45% 40%" size="70% 90%" drift={10} />
          <div className="absolute inset-x-0 top-[40%] h-[30%] bg-gradient-to-b from-transparent to-panel" />
          <p className="relative text-[56px] leading-none tracking-[-0.04em]">50+</p>
          <p className="relative mt-2 text-[28px] leading-[1.15] tracking-[-0.03em]">
            Happy clients.
            <span className="block text-dim">One technology partner.</span>
          </p>
          <Button href="#contact" className="relative mt-8 w-full">
            Book Consultation
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
