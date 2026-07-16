"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { DIVISIONS } from "../../../data/site";
import {
  Reveal,
  SplitLines,
  Parallax,
  ImageReveal,
} from "../../../components/Motion";
import { Kicker, ArrowLink, SectionShell } from "../../../components/UI";
import MediaGallery from "../../../components/MediaGallery";
import { CTASection } from "../../HomeClient";

export default function Division({ slug }: { slug: string }) {
  const division = DIVISIONS.find((d) => d.slug === slug) ?? DIVISIONS[0];
  const others = DIVISIONS.filter((d) => d.slug !== division.slug);
  const router = useRouter();

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[88svh] min-h-[560px] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src={division.heroImage}
            alt={division.name}
            className="kenburns h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/40" />
        </motion.div>

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-10 lg:px-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="eyebrow text-paper/70"
          >
            {division.kicker}
          </motion.span>
          <h1 className="mt-4 font-display text-[13vw] font-light leading-[0.9] text-paper md:text-[8vw]">
            <SplitLines text={division.name} delay={0.4} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 max-w-xl font-display text-2xl font-light italic text-paper/85"
          >
            {division.tagline}
          </motion.p>
        </div>
      </section>

      {/* INTRO */}
      <SectionShell className="py-24 md:py-36">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Kicker>The Essence</Kicker>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-2xl font-light leading-[1.35] text-ink md:text-4xl text-balance">
                {division.intro}
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8 max-w-xl text-base leading-relaxed text-clay">
              {division.description}
            </Reveal>
          </div>
        </div>
      </SectionShell>

      {/* FEATURE STRIP — alternating image/text */}
      <SectionShell className="space-y-20 pb-10 md:space-y-32">
        {division.features.slice(0, 4).map((f, i) => {
          const img = division.featureImages[i % division.featureImages.length];
          const flip = i % 2 === 1;
          return (
            <div
              key={f.title}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div className={flip ? "lg:order-2" : ""}>
                <div className="relative aspect-[5/4] overflow-hidden">
                  <ImageReveal
                    src={img}
                    alt={f.title}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-[1.6s] hover:scale-105"
                  />
                </div>
              </div>
              <div className={flip ? "lg:order-1" : ""}>
                <Reveal>
                  <span className="font-display text-6xl font-light text-veil">
                    0{i + 1}
                  </span>
                </Reveal>
                <Reveal delay={0.1}>
                  <h3 className="mt-4 font-display text-3xl font-light text-ink md:text-4xl">
                    {f.title}
                  </h3>
                </Reveal>
                <Reveal delay={0.2} className="mt-4 max-w-md text-clay">
                  {f.text}
                </Reveal>
              </div>
            </div>
          );
        })}
      </SectionShell>

      {/* GALLERY */}
      <SectionShell className="py-20 md:py-28">
        <div className="mb-12 flex items-end justify-between">
          <Reveal>
            <h2 className="font-display text-4xl font-light text-ink md:text-6xl">
              The Gallery
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow text-clay">{division.name}</span>
          </Reveal>
        </div>
        <MediaGallery images={division.gallery} captions={division.materials} />
      </SectionShell>

      {/* CAPABILITIES GRID */}
      <SectionShell className="border-t border-ink/10 py-20 md:py-28">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {division.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="group border-t border-ink/15 pt-6">
                <span className="text-xs text-brass">{division.materials[i % division.materials.length]}</span>
                <h4 className="mt-3 font-display text-2xl font-light text-ink">{f.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-clay">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* FULL-BLEED PARALLAX QUOTE */}
      <section className="relative my-24 h-[70vh] min-h-[420px] overflow-hidden md:my-32">
        <Parallax src={division.quoteImage} alt="" ratio={0.18} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative flex h-full items-center justify-center px-6">
          <Reveal className="text-center">
            <p className="max-w-4xl font-display text-3xl font-light leading-tight text-paper md:text-5xl lg:text-6xl">
              {division.tagline}
            </p>
            <div className="mt-10 flex justify-center">
              <ArrowLink href="/contact" light>
                Enquire Now
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OTHER DIVISIONS */}
      <SectionShell className="py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-4xl font-light text-ink md:text-6xl">
            Explore further
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.07}>
              <button
                onClick={() => router.push(`/division/${d.slug}`)}
                data-cursor="view"
                className="group relative block aspect-[3/4] w-full overflow-hidden"
              >
                <img
                  src={d.previewImage}
                  alt={d.name}
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                  <span className="text-xs uppercase tracking-[0.2em] text-paper/60">
                    {d.kicker}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-light text-paper">
                    {d.name}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brass-light opacity-0 transition-all duration-500 group-hover:opacity-100">
                    View
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                      <path d="M0 5h16m0 0L12 1m4 4l-4 4" stroke="currentColor" />
                    </svg>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <CTASection />
    </div>
  );
}
