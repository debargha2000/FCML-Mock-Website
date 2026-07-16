"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { DIVISIONS, LOCATIONS } from "../data/site";
import { Marquee, Reveal } from "./Motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="grain absolute inset-0" />
      {/* Giant outline wordmark */}
      <div className="relative overflow-hidden border-b border-paper/10 py-10">
        <Marquee>
          {DIVISIONS.map((d) => (
            <span key={d.slug} className="mx-8 font-display text-5xl text-paper/15 md:text-7xl">
              {d.name}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 py-20 md:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr]">
          {/* Brand + newsletter */}
          <div>
            <Reveal>
              <p className="font-display text-4xl font-light leading-tight md:text-5xl">
                Never say never.
                <br />
                <span className="text-brass-light">Perfecting your homes.</span>
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 max-w-md">
              <p className="text-sm text-paper/60">
                Receive new collections, designer collaborations and the FCML
                narrative — directly in your inbox.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSent(true);
                }}
                className="mt-5 flex items-center gap-4 border-b border-paper/25 pb-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full bg-transparent py-2 text-sm text-paper placeholder:text-paper/40 focus:outline-none"
                />
                <button data-cursor className="text-xs uppercase tracking-[0.2em] text-brass-light">
                  {sent ? "Subscribed ✓" : "Subscribe"}
                </button>
              </form>
            </Reveal>
          </div>

          {/* Divisions */}
          <div>
            <span className="eyebrow text-paper/40">Divisions</span>
            <ul className="mt-6 space-y-3">
              {DIVISIONS.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/division/${d.slug}`}
                    data-cursor
                    className="link-underline text-paper/75 hover:text-paper"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <span className="eyebrow text-paper/40">Design Hubs</span>
            <ul className="mt-6 space-y-3">
              {LOCATIONS.map((l) => (
                <li key={l.city}>
                  <Link
                    href="/contact"
                    data-cursor
                    className="group flex flex-col"
                  >
                    <span className="text-paper/85">{l.city}</span>
                    <span className="text-xs text-paper/40">{l.area}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-paper/10 pt-8 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold tracking-tight text-paper">
              FCML
            </span>
            <span className="uppercase tracking-[0.3em]">India</span>
          </div>
          <motion.button
            data-cursor
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-paper/60 hover:text-brass-light"
          >
            Back to top
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
              <path d="M0 7h14m0 0L9 1m5 6L9 1" stroke="currentColor" />
            </svg>
          </motion.button>
          <p>© {new Date().getFullYear()} FCML Distributors Pvt. Ltd. — A redesigned concept.</p>
        </div>
      </div>
    </footer>
  );
}
