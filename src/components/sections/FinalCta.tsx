import Button from "@/components/ui/Button";
import LightBars from "@/components/ui/LightBars";
import Reveal from "@/components/ui/Reveal";

export default function FinalCta() {
  return (
    <section id="contact" className="mx-auto max-w-[1160px] scroll-mt-24 px-5 pb-28 pt-32 sm:pt-[160px]">
      <Reveal className="relative overflow-hidden rounded-2xl border border-line bg-panel px-6 py-12 sm:px-8 sm:py-14">
        <LightBars className="absolute inset-y-0 right-0 w-full opacity-70 md:w-[75%] md:opacity-100" focus="45% 55%" size="55% 110%" drift={10} />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-panel via-panel/70 to-transparent md:w-1/2" />
        <div className="relative max-w-[440px]">
          <h2 className="text-[34px] leading-[1.05] tracking-[-0.04em] sm:text-[40px]">
            Ready to transform?
            <span className="block text-dim">Let&apos;s build it together.</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.45] text-dim">
            Engage our services and accelerate your business growth with systems built to scale.
          </p>
          <Button href="mailto:contacts@unetsystemtech.com" className="mt-7">
            Schedule a Consultation
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
