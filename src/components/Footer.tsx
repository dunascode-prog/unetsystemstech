import Logo from "@/components/ui/Logo";
import { navLinks } from "@/lib/content";

const columns = [
  { title: "Quick links", links: navLinks },
  {
    title: "Contact",
    links: [
      { label: "24, H-Road, Ikorodu, Lagos", href: "#" },
      { label: "+234 913 084 8613", href: "tel:+2349130848613" },
      { label: "contacts@unetsystemtech.com", href: "mailto:contacts@unetsystemtech.com" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-panel">
      <div className="mx-auto grid max-w-[1160px] gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1.3fr_1fr] md:py-24">
        <div>
          <Logo className="text-[26px]" />
          <p className="mt-4 max-w-[260px] text-[15px] leading-[1.45] text-dim">
            Enterprise technology solutions for modern business transformation.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-[17px] font-medium">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="break-words text-[15px] text-dim transition hover:text-fg">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="text-[14px] text-dim md:col-span-4">© 2026 Unet Systems. All rights reserved.</p>
      </div>
    </footer>
  );
}
