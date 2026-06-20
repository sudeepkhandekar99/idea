"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Join IDEA", href: "/join" },
  { label: "Events", href: "/events" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled || open
            ? "border-b border-[#d8d1c5] bg-[#f4f1eb]/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" onClick={() => setOpen(false)}>
            <div className="flex flex-col">
              <span className="font-serif text-4xl font-medium italic tracking-tight">
                idea
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#b11226]">
                Powered by BOLD
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.25em] text-[#4f4f4f] transition hover:text-[#b11226]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-full border border-[#b11226] px-5 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#b11226] transition hover:bg-[#b11226] hover:text-white md:inline-flex"
          >
            Contact
          </Link>

          <button
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8d1c5] text-[#111111] md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed left-0 top-24 z-40 w-full border-b border-[#d8d1c5] bg-[#f4f1eb] px-6 py-8 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl text-[#111111]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-[#b11226] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}