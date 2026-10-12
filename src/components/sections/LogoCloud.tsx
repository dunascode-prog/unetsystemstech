import Image from "next/image";
import Marquee from "@/components/ui/Marquee";
import { companies } from "@/lib/content";

export const logoHeight = (ratio: number) => Math.round(Math.min(44, Math.max(18, Math.sqrt(2600 / ratio))));

export function LogoStrip({ duration = 25 }: { duration?: number }) {
  return (
    <Marquee duration={duration} className="mx-auto max-w-[760px]">
      {companies.map((c) => (
        <Image
          key={c.name}
          src={c.logo}
          alt={c.name}
          width={c.width}
          height={c.height}
          // equal visual area: wide wordmarks render shorter, square marks taller
          style={{ height: logoHeight(c.width / c.height) * (c.scale ?? 1) }}
          className="mx-7 w-auto opacity-60 brightness-0 dark:opacity-80 dark:brightness-100"
        />
      ))}
    </Marquee>
  );
}

export default function LogoCloud() {
  return (
    <section className="px-5 pt-6 text-center">
      <p className="text-[16px] text-dim">Trusted by over 50+ clients</p>
      <div className="mt-8">
        <LogoStrip duration={40} />
      </div>
    </section>
  );
}
