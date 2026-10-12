import clsx from "clsx";

type ButtonProps = {
  href?: string;
  variant?: "solid" | "outline";
  children: React.ReactNode;
  className?: string;
};

export default function Button({ href = "#", variant = "solid", children, className }: ButtonProps) {
  return (
    <a
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-[10px] px-4 py-3 text-[15px] font-medium leading-none transition",
        variant === "solid"
          ? "bg-fg text-base hover:opacity-85"
          : "border border-line-strong text-fg hover:border-fg/30 hover:bg-fg/5",
        className,
      )}
    >
      {children}
    </a>
  );
}
