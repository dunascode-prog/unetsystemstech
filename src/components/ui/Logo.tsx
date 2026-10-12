import Image from "next/image";
import clsx from "clsx";

// Brand kit SVGs from public/unet-brand. "light" is drawn for light backgrounds, "dark" for dark ones;
// the `.dark` class on <html> picks which one shows.
const BRAND = "/unet-brand/svg";

export function LogoMark({ size = 24, className }: { size?: number; className?: string }) {
  const width = Math.round((size * 53.8) / 60);
  return (
    <span className={clsx("inline-flex shrink-0", className)} aria-hidden>
      <Image src={`${BRAND}/unet-symbol-light.svg`} alt="" width={width} height={size} className="dark:hidden" />
      <Image src={`${BRAND}/unet-symbol-dark.svg`} alt="" width={width} height={size} className="hidden dark:block" />
    </span>
  );
}

export default function Logo({ height = 24, className }: { height?: number; className?: string }) {
  const width = Math.round((height * 354.19) / 60);
  return (
    <span className={clsx("inline-flex shrink-0", className)}>
      <Image
        src={`${BRAND}/unet-logo-horizontal-light.svg`}
        alt="Unet Systems"
        width={width}
        height={height}
        priority
        className="dark:hidden"
      />
      <Image
        src={`${BRAND}/unet-logo-horizontal-dark.svg`}
        alt="Unet Systems"
        width={width}
        height={height}
        priority
        className="hidden dark:block"
      />
    </span>
  );
}
