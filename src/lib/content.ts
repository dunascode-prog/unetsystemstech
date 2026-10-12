export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

// Client logos: official SVG / high-res sources where available, converted to trimmed
// single-colour marks (white on transparent, 240px tall) so they share one visual style.
// `scale` nudges logos whose ink density makes them look heavier/lighter than their size.
export const companies: { name: string; logo: string; width: number; height: number; scale?: number }[] = [
  { name: "AT:ELIER Concierge", logo: "/images/clients/atelier-concierge.png", width: 540, height: 240 },
  { name: "CWG", logo: "/images/clients/cwg.png", width: 296, height: 240 },
  { name: "Fidelity Bank", logo: "/images/clients/fidelity-bank.png", width: 960, height: 240 },
  { name: "GTBank", logo: "/images/clients/gtbank.png", width: 240, height: 240, scale: 0.82 },
  { name: "LHT", logo: "/images/clients/lht.png", width: 922, height: 240, scale: 0.85 },
  { name: "Lotus Bank", logo: "/images/clients/lotus-bank.png", width: 159, height: 240, scale: 1.15 },
  { name: "Parallex Bank", logo: "/images/clients/parallex-bank.png", width: 502, height: 240 },
  { name: "Providus Bank", logo: "/images/clients/providus-bank.png", width: 553, height: 240 },
  { name: "PTS Lounge", logo: "/images/clients/pts-lounge.png", width: 364, height: 240 },
  { name: "UBA", logo: "/images/clients/uba.png", width: 511, height: 240 },
  { name: "Wema Bank", logo: "/images/clients/wema-bank.png", width: 1432, height: 240 },
];
