import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import LightBars from "@/components/ui/LightBars";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="relative -mt-[76px] overflow-hidden pt-[140px]">
      <Reveal className="relative z-20 mx-auto max-w-[820px] px-5 text-center">
        <a
          href="#solutions"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/80 py-1 pl-1.5 pr-3 text-[13px] font-medium"
        >
          <span className="rounded-full bg-cyan px-2 py-0.5 text-[11px] leading-none text-on-cyan">NEW</span>
          AI Integration &amp; Design Services
          <ArrowRight className="size-3.5" />
        </a>

        <h1 className="mt-5 text-[40px] font-normal leading-[1.05] tracking-[-0.04em] sm:text-[60px]">
          Enterprise technology
          <br />
          for modern business transformation.
        </h1>
        <p className="mx-auto mt-5 max-w-[520px] text-[18px] leading-[1.4] text-fg/90">
          We design, build, integrate, secure and manage scalable systems that power growth, resilience and innovation.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="#contact">Book Consultation</Button>
          <Button href="#services" variant="outline">
            Our Services
          </Button>
        </div>
      </Reveal>

      <div className="relative -mt-10 h-[420px] sm:h-[520px]">
        {/* dark arc that the light rises from behind */}
        <div className="absolute inset-x-0 top-0 z-10 h-40 rounded-[50%] bg-base blur-2xl" />
        <LightBars className="absolute inset-0" focus="64% 100%" size="75% 120%" intensity={1.35} />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base to-transparent" />
      </div>
    </section>
  );
}
