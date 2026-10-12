import clsx from "clsx";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={clsx("size-6", className)} aria-hidden>
      <rect width="24" height="24" rx="3" className="fill-fg" />
      <path
        d="M12 4.5c.5 3.9 3.6 7 7.5 7.5-3.9.5-7 3.6-7.5 7.5-.5-3.9-3.6-7-7.5-7.5 3.9-.5 7-3.6 7.5-7.5Z"
        className="fill-base"
      />
    </svg>
  );
}

export default function Logo({ className }: { className?: string }) {
  return (
    <span className={clsx("inline-flex items-center gap-2 text-[22px] font-medium tracking-[-0.03em]", className)}>
      <LogoMark />
      Unet Systems
    </span>
  );
}
