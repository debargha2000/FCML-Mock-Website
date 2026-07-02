import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ABOUT, STATS, IMAGES } from "../data/site";
import { Reveal, SplitLines, Parallax, ImageReveal } from "../components/Motion";
import { Kicker, ArrowLink, SectionShell } from "../components/UI";
import { CTASection } from "./Home";

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[85svh] min-h-[520px] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={IMAGES.architecture[1]} alt="FCML architecture" className="kenburns h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/55" />
        </motion.div>
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-10 lg:px-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="eyebrow text-paper/70"
          >
            About FCML
          </motion.span>
          <h1 className="mt-4 max-w-5xl font-display text-[11vw] font-light leading-[0.92] text-paper md:text-[7vw]">
            <SplitLines text={"A force to\nreckon with."} delay={0.4} />
          </h1>
        </div>
      </section>

      {/* LEAD */}
      <SectionShell className="py-24 md:py-36">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Kicker>Our Story</Kicker>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-display text-3xl font-light leading-[1.3] text-ink md:text-[2.7rem] text-balance">
                {ABOUT.lead}
              </p>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      {/* NARRATIVE + IMAGE */}
      <SectionShell className="pb-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden lg:sticky lg:top-28 lg:h-[80vh]">
            <ImageReveal src={IMAGES.architecture[2]} alt="FCML showroom" className="h-full w-full" />
          </div>
          <div className="space-y-7">
            {ABOUT.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-base leading-relaxed text-clay md:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* STATS */}
      <SectionShell className="my-20 border-y border-ink/10 py-20 md:my-28">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="font-display text-5xl font-light text-ink md:text-6xl">{s.value}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-clay">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* VISION / MISSION / MOTTO */}
      <SectionShell className="py-12 md:py-20">
        <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
          {[
            { tag: "Vision", body: ABOUT.vision, img: IMAGES.home[1] },
            { tag: "Mission", body: ABOUT.mission, img: IMAGES.surfaces[1] },
            { tag: "Motto", body: ABOUT.motto, img: IMAGES.wood[1] },
          ].map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-paper p-10 md:p-12"
            >
              <div className="mb-6 h-32 overflow-hidden">
                <img
                  src={c.img}
                  alt=""
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
              </div>
              <span className="eyebrow text-brass">{c.tag}</span>
              <p className="mt-4 font-display text-xl font-light leading-relaxed text-ink md:text-2xl">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      {/* PARALLAX STATEMENT */}
      <section className="relative my-24 h-[60vh] min-h-[380px] overflow-hidden md:my-32">
        <Parallax src={IMAGES.home[3]} alt="" ratio={0.15} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative flex h-full items-center justify-center px-6">
          <Reveal className="text-center">
            <p className="max-w-3xl font-display text-3xl font-light italic leading-tight text-paper md:text-5xl">
              “For some, it is a sale. For others, it's the beginning of a valued relationship.”
            </p>
            <div className="mt-10 flex justify-center">
              <ArrowLink to={{ name: "contact" }} light>
                Begin a Relationship
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
