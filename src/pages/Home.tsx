import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "../components/Router";
import {
  DIVISIONS,
  STATS,
  BRANDS,
  DESIGNERS,
  ABOUT,
  IMAGES,
} from "../data/site";
import {
  Reveal,
  SplitLines,
  Parallax,
  ImageReveal,
  Marquee,
  Magnetic,
} from "../components/Motion";
import { Kicker, ArrowLink, SolidButton, SectionShell } from "../components/UI";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img
            src={IMAGES.heroBath}
            alt="Luxury FCML bathroom interior"
            className="kenburns h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/70" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex h-full flex-col justify-between px-6 pb-10 pt-28 md:px-10 lg:px-16"
        >
          <div className="flex items-start justify-between">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease }}
              className="eyebrow text-paper/70"
            >
              Est. 2002 — Pan India
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="hidden text-right text-xs uppercase tracking-[0.2em] text-paper/50 md:block"
            >
              Luxury Interiors
              <br />
              Bath · Kitchen · Surfaces · Wood · Home
            </motion.span>
          </div>

          <div className="max-w-5xl">
            <h1 className="font-display text-[14vw] font-light leading-[0.92] text-paper md:text-[10vw] lg:text-[8.5vw]">
              <SplitLines text={"The art of\nliving well."} delay={0.5} />
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1, ease }}
              className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
              <p className="max-w-md text-base font-light text-paper/80">
                A pioneer of quintessentially European, luxurious design —
                bathrooms, kitchens, surfaces, wood floors and home décor,
                reimagined for the discerning Indian home.
              </p>
              <div className="flex gap-4">
                <SolidButton to={{ name: "about" }}>Discover FCML</SolidButton>
                <ArrowLink to={{ name: "shop" }} light>
                  Shop Home
                </ArrowLink>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-paper/40 p-1.5">
            <motion.span
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-paper/80"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== INTRO STATEMENT ===== */}
      <SectionShell className="py-28 md:py-40">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <Kicker>The Maison</Kicker>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="font-display text-3xl font-light leading-[1.25] text-ink md:text-5xl lg:text-[3.4rem] text-balance">
                {ABOUT.hero}
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-10 max-w-2xl text-base leading-relaxed text-clay">
              {ABOUT.lead}
            </Reveal>
          </div>
        </div>
      </SectionShell>

      {/* ===== DIVISIONS SHOWCASE ===== */}
      <SectionShell className="pb-10">
        <div className="mb-14 flex items-end justify-between">
          <Reveal>
            <h2 className="font-display text-4xl font-light text-ink md:text-6xl">
              Five worlds,
              <br />
              one standard.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="hidden md:block">
            <span className="eyebrow text-clay">Our Divisions</span>
          </Reveal>
        </div>
      </SectionShell>

      <div className="flex flex-col">
        {DIVISIONS.map((d, i) => (
          <DivisionRow key={d.slug} index={i} slug={d.slug} name={d.name} tagline={d.tagline} image={d.image} />
        ))}
      </div>

      {/* ===== STATS ===== */}
      <SectionShell className="border-y border-ink/10 py-20">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center lg:text-left">
              <p className="font-display text-5xl font-light text-ink md:text-6xl">{s.value}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-clay">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* ===== DESIGNERS / SURFACES COLLAB ===== */}
      <section className="relative my-28 md:my-40">
        <div className="mx-auto grid max-w-[1500px] gap-8 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
          <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
            <Parallax src={IMAGES.surfaces[2]} alt="Designer surface collaboration" ratio={0.12} className="h-full w-full" />
            <div className="absolute inset-0 bg-ink/20" />
          </div>
          <div className="flex flex-col justify-center">
            <Reveal>
              <Kicker>Fashion Meets Surface</Kicker>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="mt-6 font-display text-4xl font-light leading-tight text-ink md:text-5xl">
                Tiles as canvases of style, heritage and artistic narrative.
              </h3>
            </Reveal>
            <Reveal delay={0.2} className="mt-6 max-w-md text-clay">
              An innovation in the ceramic industry — a collaboration with
              India's most eminent fashion designers. Made in India, for its
              discerning clients.
            </Reveal>
            <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {DESIGNERS.map((name) => (
                <span key={name} className="font-display text-lg italic text-ink/80">
                  {name}
                </span>
              ))}
            </Reveal>
            <Reveal delay={0.35} className="mt-10">
              <ArrowLink to={{ name: "division", slug: "surfaces" }}>
                Explore Surfaces
              </ArrowLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== BRANDS MARQUEE ===== */}
      <section className="overflow-hidden border-y border-ink/10 py-16">
        <Reveal className="mb-10 text-center">
          <span className="eyebrow text-clay">Houses We Represent</span>
        </Reveal>
        <Marquee>
          {BRANDS.map((b) => (
            <span key={b} className="mx-10 font-display text-3xl text-ink/70 md:text-4xl">
              {b}
            </span>
          ))}
        </Marquee>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <SectionShell className="py-28 md:py-40">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative h-[55vh] min-h-[380px]">
            <ImageReveal
              src={IMAGES.architecture[0]}
              alt="FCML showroom architecture"
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <div className="lg:pl-12">
            <Reveal>
              <Kicker>Philosophy</Kicker>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="mt-6 font-display text-4xl font-light leading-tight text-ink md:text-5xl">
                The single largest space devoted to luxury interiors in India.
              </h3>
            </Reveal>
            <Reveal delay={0.2} className="mt-6 max-w-md text-clay">
              We are in the business of relationships — of securing trust. We
              first understand what our customers seek, then craft an immersive
              experience for them, rounded off end to end with finesse.
            </Reveal>
            <Reveal delay={0.3} className="mt-10">
              <ArrowLink to={{ name: "about" }}>Our Story</ArrowLink>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      {/* ===== CTA ===== */}
      <CTASection />
    </div>
  );
}

/* Large editorial division row with parallax + image swap on hover */
function DivisionRow({
  index,
  slug,
  name,
  tagline,
  image,
}: {
  index: number;
  slug: string;
  name: string;
  tagline: string;
  image: string;
}) {
  const { navigate } = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 ? 60 : -60, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ x }}
      className="group relative border-t border-ink/15 first:border-t-0"
    >
      <button
        onClick={() => navigate({ name: "division", slug })}
        data-cursor="view"
        className="grid w-full grid-cols-12 items-center gap-4 px-6 py-10 text-left transition-colors duration-500 hover:bg-ink md:px-10 lg:px-16 md:py-14"
      >
        <span className="col-span-2 text-xs text-clay transition-colors duration-500 group-hover:text-brass-light md:col-span-1">
          0{index + 1}
        </span>
        <span className="col-span-7 font-display text-[10vw] font-light leading-none text-ink transition-colors duration-500 group-hover:text-paper md:col-span-8 md:text-[5.5vw]">
          {name}
        </span>
        <span className="col-span-3 hidden text-right text-xs uppercase tracking-[0.15em] text-clay transition-colors duration-500 group-hover:text-paper/70 md:col-span-2 md:block">
          {tagline}
        </span>
        <span className="col-span-3 hidden items-center justify-end md:col-span-1 md:flex">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-brass-light">
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
              <path d="M0 5h16m0 0L12 1m4 4l-4 4" stroke="currentColor" />
            </svg>
          </span>
        </span>
      </button>
      {/* Floating preview image */}
      <div className="pointer-events-none absolute right-[8%] top-1/2 z-10 hidden h-44 w-64 -translate-y-1/2 scale-75 overflow-hidden opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 group-hover:opacity-100 lg:block">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
    </motion.div>
  );
}

export function CTASection() {
  const { navigate } = useRouter();
  return (
    <section className="relative overflow-hidden bg-ink py-32 text-paper md:py-44">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <Kicker className="justify-center">Begin the Conversation</Kicker>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="mt-8 font-display text-5xl font-light leading-[1.05] md:text-7xl">
            Let us perfect
            <br />
            <span className="italic text-brass-light">your home.</span>
          </h3>
        </Reveal>
        <Reveal delay={0.2} className="mt-8 text-paper/70">
          Visit a design hub, or begin your project with our team today.
        </Reveal>
        <Reveal delay={0.3} className="mt-12 flex flex-wrap justify-center gap-4">
          <Magnetic strength={0.4}>
            <button
              data-cursor
              onClick={() => navigate({ name: "contact" })}
              className="group relative overflow-hidden rounded-full bg-paper px-10 py-4 text-xs uppercase tracking-[0.2em] text-ink"
            >
              <span className="relative z-10">Find a Showroom</span>
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-brass transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
            </button>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
