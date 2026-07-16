"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { DIVISIONS } from "../data/site";
import { cn } from "../utils/cn";

const ease = [0.16, 1, 0.3, 1] as const;

const LINKS: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "Shop Home", href: "/shop" },
  { label: "Showrooms", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-700",
          scrolled || open ? "bg-paper/90 py-4 backdrop-blur-md" : "py-6"
        )}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            data-cursor
            className="group flex items-baseline gap-2"
          >
            <span className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              FCML
            </span>
            <span className="hidden text-[0.6rem] uppercase tracking-[0.34em] text-clay sm:inline">
              India
            </span>
          </Link>

          {/* Right cluster */}
          <div className="flex items-center gap-8">
            <nav className="hidden items-center gap-9 lg:flex">
              {LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-cursor
                  className={cn(
                    "link-underline text-xs uppercase tracking-[0.2em] transition-colors",
                    pathname === l.href ? "text-brass" : "text-ink/80 hover:text-ink"
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Menu toggle */}
            <button
              onClick={() => setOpen((o) => !o)}
              data-cursor
              className="group flex items-center gap-3"
              aria-label="Toggle menu"
            >
              <span className="hidden text-xs uppercase tracking-[0.2em] text-ink sm:inline">
                {open ? "Close" : "Menu"}
              </span>
              <span className="relative flex h-6 w-8 flex-col items-end justify-center gap-[5px]">
                <span
                  className={cn(
                    "h-px bg-ink transition-all duration-500",
                    open ? "w-7 translate-y-[3px] rotate-45" : "w-7"
                  )}
                />
                <span
                  className={cn(
                    "h-px bg-ink transition-all duration-500",
                    open ? "w-7 -translate-y-[3px] -rotate-45" : "w-4"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease }}
            className="fixed inset-0 z-[95] flex flex-col bg-ink text-paper"
          >
            <div className="grain absolute inset-0 opacity-100" />
            <div className="relative flex flex-1 flex-col justify-between px-6 pb-10 pt-32 md:px-10 lg:px-16 lg:pt-40">
              {/* Division list */}
              <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
                <nav className="flex flex-col">
                  {DIVISIONS.map((d, i) => (
                    <motion.div
                      key={d.slug}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 + i * 0.07, duration: 0.7, ease }}
                    >
                      <Link
                        href={`/division/${d.slug}`}
                        onClick={() => setOpen(false)}
                        data-cursor="view"
                        className="group flex items-baseline gap-4 border-b border-paper/15 py-4 text-left md:py-5"
                      >
                        <span className="text-xs text-paper/40">0{i + 1}</span>
                        <span className="font-display text-4xl font-light leading-none text-paper/90 transition-colors duration-300 group-hover:text-brass-light md:text-5xl lg:text-6xl">
                          {d.name}
                        </span>
                        <svg
                          width="30"
                          height="12"
                          viewBox="0 0 30 12"
                          className="mb-1 ml-auto -translate-x-3 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                        >
                          <path d="M0 6h27m0 0L23 1m4 5l-4 5" stroke="#c4a06a" strokeWidth="1" />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Secondary links + preview */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-col justify-between gap-10 lg:pl-10"
                >
                  <div className="flex flex-col gap-3">
                    <span className="eyebrow text-paper/40">Explore</span>
                    {LINKS.map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        data-cursor
                        className="link-underline w-fit font-display text-2xl font-light text-paper/90"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-1 text-sm text-paper/50">
                    <p className="font-display text-xl text-paper/80">Lifestyle with panache</p>
                    <p>Delhi · Mumbai · Bangalore · Chennai</p>
                    <p>Coimbatore · Pune · Surat</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
