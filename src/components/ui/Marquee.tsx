import clsx from "clsx";

type MarqueeProps = {
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
};

/** Infinite horizontal scroller; children are rendered twice so the loop is seamless. */
export default function Marquee({ children, reverse, duration = 30, className }: MarqueeProps) {
  return (
    <div className={clsx("fade-x flex overflow-hidden", className)}>
      <div
        className={clsx("flex w-max shrink-0", reverse ? "animate-marquee-reverse" : "animate-marquee")}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
