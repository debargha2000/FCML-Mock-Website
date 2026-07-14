import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, IMAGES } from "../data/site";
import { Reveal, SplitLines } from "../components/Motion";
import { Kicker, SectionShell, SolidButton } from "../components/UI";

const ease = [0.16, 1, 0.3, 1] as const;

const POOL = Object.values(IMAGES).flat();

function imgFor(group: string) {
  let h = 0;
  for (let i = 0; i < group.length; i++) h = (h * 31 + group.charCodeAt(i)) >>> 0;
  return POOL[h % POOL.length];
}

export default function Shop() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string | null>(null);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CATEGORIES.map((c) => ({
      ...c,
      items: c.items.filter((i) => i.toLowerCase().includes(q)),
      img: imgFor(c.group),
    })).filter((c) => c.items.length > 0);
  }, [query]);

  const totalItems = CATEGORIES.reduce((n, c) => n + c.items.length, 0);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink px-6 pb-20 pt-40 text-paper md:px-10 md:pb-28 md:pt-52 lg:px-16">
        <div className="grain absolute inset-0" />
        <div className="relative mx-auto max-w-[1500px]">
          <span className="eyebrow text-brass-light">FCML Home — Shop Online</span>
          <h1 className="mt-6 font-display text-[12vw] font-light leading-[0.9] md:text-[7vw]">
            <SplitLines text={"Objects of\ndesire."} delay={0.2} />
          </h1>
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-paper/70">
              The acme of luxurious European design — a curated assortment of
              contemporary, innovative products for the home. Browse the full
              catalogue across {CATEGORIES.length} collections.
            </p>
            <span className="text-sm text-paper/50">
              {totalItems} categories · {CATEGORIES.length} collections
            </span>
          </div>
        </div>
      </section>

      {/* SEARCH / FILTER BAR */}
      <div className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center gap-3 px-6 py-4 md:px-10 lg:px-16">
          <span className="eyebrow text-clay">Filter</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search collections…"
            data-cursor
            className="min-w-[180px] flex-1 border-b border-ink/20 bg-transparent py-2 text-sm focus:border-brass focus:outline-none"
          />
          <button
            onClick={() => setActive(null)}
            data-cursor
            className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
              active === null ? "bg-ink text-paper" : "text-ink/60 hover:text-ink"
            }`}
          >
            All
          </button>
          {CATEGORIES.slice(0, 7).map((c) => (
            <button
              key={c.group}
              onClick={() => setActive((a) => (a === c.group ? null : c.group))}
              data-cursor
              className={`hidden rounded-full px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors md:inline-block ${
                active === c.group ? "bg-ink text-paper" : "text-ink/60 hover:text-ink"
              }`}
            >
              {c.group}
            </button>
          ))}
        </div>
      </div>

      {/* COLLECTIONS GRID */}
      <SectionShell className="py-16 md:py-24">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {groups
              .filter((g) => active === null || g.group === active)
              .map((g, i) => (
                <motion.article
                  layout
                  key={g.group}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease, delay: (i % 6) * 0.05 }}
                  className="group relative overflow-hidden bg-stone"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={g.img}
                      alt={g.group}
                      className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-ink/10 transition-colors duration-500 group-hover:bg-ink/35" />
                    <span className="absolute right-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-ink">
                      {g.items.length} items
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-3xl font-light text-ink">{g.group}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {g.items.slice(0, 5).map((it) => (
                        <span
                          key={it}
                          className="rounded-full border border-ink/15 px-3 py-1 text-xs text-clay"
                        >
                          {it}
                        </span>
                      ))}
                      {g.items.length > 5 && (
                        <span className="px-3 py-1 text-xs text-brass">
                          +{g.items.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                  {/* hover explore bar */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink py-4 text-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
                    <span className="text-xs uppercase tracking-[0.2em] text-paper">
                      Explore {g.group} →
                    </span>
                  </div>
                </motion.article>
              ))}
          </motion.div>
        </AnimatePresence>

        {groups.length === 0 && (
          <div className="py-32 text-center">
            <p className="font-display text-3xl text-ink/40">No collections match “{query}”.</p>
          </div>
        )}
      </SectionShell>

      {/* CTA */}
      <section className="bg-stone py-24 text-center md:py-32">
        <SectionShell>
          <Reveal>
            <Kicker className="justify-center">Can't find it?</Kicker>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-light text-ink md:text-6xl">
              Our team curates bespoke selections for every home.
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <SolidButton to={{ name: "contact" }}>Speak to a Consultant</SolidButton>
          </Reveal>
        </SectionShell>
      </section>
    </div>
  );
}
