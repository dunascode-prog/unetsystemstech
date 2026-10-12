import Image from "next/image";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { logoHeight } from "@/components/sections/LogoCloud";
import { companies } from "@/lib/content";

// Three offset rows so neighbouring rows never show the same logo side by side.
const rows = [0, 4, 8].map((start) => [...companies.slice(start), ...companies.slice(0, start)]);

const TILE_INNER_W = 120;

function Tile({ company: c }: { company: (typeof companies)[number] }) {
  const ratio = c.width / c.height;
  // same optical sizing as the logo strip, but never wider than the tile
  const height = Math.min(logoHeight(ratio) * (c.scale ?? 1), TILE_INNER_W / ratio);
  return (
    <div className="mr-3 grid h-[88px] w-[148px] place-items-center rounded-xl border border-line bg-panel-2">
      <Image
        src={c.logo}
        alt={c.name}
        width={c.width}
        height={c.height}
        style={{ height }}
        className="w-auto opacity-70 brightness-0 dark:opacity-80 dark:brightness-100"
      />
    </div>
  );
}

export default function Clients() {
  return (
    <section className="mx-auto grid max-w-[1160px] items-center gap-12 px-5 pt-32 sm:pt-[160px] lg:grid-cols-[1fr_560px]">
      <Reveal>
        <Eyebrow>Who we work with</Eyebrow>
        <h2 className="mt-3 text-[36px] leading-[1.05] tracking-[-0.04em] sm:text-[48px]">
          The institutions
          <span className="block text-dim">that run on our systems.</span>
        </h2>
        <p className="mt-4 max-w-[420px] text-[16px] leading-[1.45] text-dim">
          From leading Nigerian banks to technology and hospitality brands, organisations rely on us to build,
          integrate and support the systems their business depends on.
        </p>
        <Button href="#contact" className="mt-8">
          Work with us
        </Button>
      </Reveal>

      <Reveal delay={0.1} className="space-y-3">
        {rows.map((row, i) => (
          <Marquee key={i} reverse={i % 2 === 1} duration={34 + i * 4}>
            {row.map((c) => (
              <Tile key={c.name} company={c} />
            ))}
          </Marquee>
        ))}
      </Reveal>
    </section>
  );
}
