"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-base/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-5">
        <a href="#" aria-label="Unet Systems home">
          <Logo />
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-[15px] font-medium lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-fg/90 transition hover:text-fg">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <ThemeToggle />
          <a href="#contact" className="text-[15px] font-medium text-fg/90 hover:text-fg">
            Contact Us
          </a>
          <Button href="#contact" variant="outline">
            Book Consultation
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
        <button
          type="button"
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line px-5 pb-6 pt-4 lg:hidden">
          <ul className="flex flex-col gap-4 text-[17px] font-medium">
            {[...navLinks, { label: "Contact Us", href: "#contact" }].map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" className="mt-5 w-full">
            Book Consultation
          </Button>
        </div>
      )}
    </header>
  );
}
