import { Check } from "lucide-react";
import { LogoMark } from "@/components/ui/Logo";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const methodology = [
  { title: "Discovery & requirement engineering", body: "Analysis, stakeholder workshops, audits and feasibility studies." },
  { title: "System design & architecture", body: "Components, data models, integrations and security layers." },
  { title: "Development & implementation", body: "Modular, testable code with continuous integration and reviews." },
  { title: "Testing & quality assurance", body: "Functional, performance and security testing, plus failure simulation." },
];

const pillars = [
  { title: "Architecture-first engineering", body: "Structure, data flow and security boundaries designed before code." },
  { title: "Deep technical versatility", body: "Software, integration, databases, networking, DevOps, AI and security." },
  { title: "Data-driven decision making", body: "Choices grounded in metrics and measurable outcomes." },
  { title: "Security & reliability by design", body: "Fault tolerance, high availability, disaster recovery, encryption." },
  { title: "Scalable, maintainable solutions", body: "Modular architecture, automated testing and CI pipelines." },
];

export default function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-[1000px] scroll-mt-24 px-5 pt-32 sm:pt-[160px]">
      <SectionHeading align="center" eyebrow="Our approach" title="Engineered to last." subtitle="Here’s how we deliver." />

      <Reveal className="mt-14 grid gap-3 rounded-2xl border border-line bg-panel p-3 md:grid-cols-2">
        <div className="p-6 sm:p-8">
          <h3 className="text-[28px] tracking-[-0.02em]">Methodology</h3>
          <ol className="mt-6 space-y-5">
            {methodology.map((m, i) => (
              <li key={m.title} className="flex gap-3">
                <span className="text-[15px] font-medium text-dim">0{i + 1}</span>
                <span>
                  <span className="block text-[16px] font-medium">{m.title}</span>
                  <span className="mt-1 block text-[15px] leading-[1.45] text-dim">{m.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-xl border border-line bg-panel-2 p-6 sm:p-8">
          <h3 className="flex items-center gap-2 text-[28px] font-medium tracking-[-0.02em]">
            <LogoMark className="size-6" />
            Our pillars
          </h3>
          <ul className="mt-6 space-y-5">
            {pillars.map((p) => (
              <li key={p.title} className="flex gap-2.5">
                <Check className="mt-1 size-4 shrink-0 text-cyan" strokeWidth={2} />
                <span>
                  <span className="block text-[16px] font-medium">{p.title}</span>
                  <span className="mt-1 block text-[15px] leading-[1.45] text-dim">{p.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
