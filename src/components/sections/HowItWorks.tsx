import clsx from "clsx";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  { title: "Collect the ideas", body: "We start by understanding your vision, goals, challenges and expectations." },
  { title: "Data analysis", body: "We evaluate and validate requirements, turning them into actionable insights." },
  { title: "Finalize product", body: "We define scope, architecture, features, timeline and deliverables, then build." },
];

export default function HowItWorks() {
  return (
    <section id="process" className="mx-auto max-w-[940px] scroll-mt-24 px-5 pt-32 sm:pt-[160px]">
      <SectionHeading align="center" eyebrow="How we work" title="From idea to" subtitle="production-ready product." />

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 0.1}
            className={clsx(
              "flex min-h-[260px] flex-col justify-between rounded-2xl border border-line bg-panel p-6 md:min-h-[320px]",
              i === 1 && "md:mt-12",
            )}
          >
            <p className="text-[18px] font-medium text-cyan">Step {i + 1}</p>
            <div>
              <h3 className="text-[20px] font-medium tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-2 text-[16px] leading-[1.45] text-dim">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
