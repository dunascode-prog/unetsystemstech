import clsx from "clsx";
import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  align?: "left" | "center";
  className?: string;
};

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-[12px] font-medium uppercase leading-none tracking-[0.06em] text-cyan">
      <span className="h-1.5 w-2.5 rounded-full bg-cyan" />
      {children}
    </p>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={clsx(align === "center" && "text-center", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-[36px] font-normal leading-[1.05] tracking-[-0.04em] sm:text-[48px]">
        <span className="block">{title}</span>
        <span className="block text-dim">{subtitle}</span>
      </h2>
    </Reveal>
  );
}
