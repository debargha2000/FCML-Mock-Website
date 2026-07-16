"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { LOCATIONS, DIVISIONS, IMAGES } from "../../data/site";
import { Reveal, SplitLines, ImageReveal } from "../../components/Motion";
import { Kicker, SectionShell } from "../../components/UI";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", division: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-16 pt-36 md:px-10 md:pt-48 lg:px-16">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <Kicker>Showrooms & Enquiries</Kicker>
          </Reveal>
          <h1 className="mt-6 font-display text-[12vw] font-light leading-[0.9] text-ink md:text-[7vw]">
            <SplitLines text={"Visit us,\nor write\nto us."} delay={0.2} />
          </h1>
        </div>
      </section>

      {/* LOCATIONS */}
      <SectionShell className="py-16 md:py-24">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <Reveal>
            <h2 className="font-display text-4xl font-light text-ink md:text-5xl">
              Design hubs across India.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-clay">
              With a pan-India presence and a 10,000 sq. ft. flagship in Mumbai,
              every FCML showroom is a visual treasure trove of the most hallowed
              lines in luxury interiors.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((l, i) => (
            <motion.div
              key={l.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-paper p-8 md:p-10"
            >
              <span className="font-display text-5xl font-light text-veil transition-colors duration-500 group-hover:text-brass/40">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-3xl font-light text-ink">{l.city}</h3>
              <p className="mt-3 text-sm text-clay">{l.area}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-brass">{l.note}</p>
              <div className="mt-6 h-px w-0 bg-brass transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </SectionShell>

      {/* FORM + IMAGE */}
      <SectionShell className="py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative hidden lg:block">
            <div className="sticky top-28">
              <ImageReveal
                src={IMAGES.contactShowroom}
                alt="FCML showroom interior"
                className="aspect-[4/5] w-full"
              />
              <div className="mt-6 space-y-1 text-sm text-clay">
                <p className="font-display text-2xl text-ink">Corporate Office</p>
                <p>A-217, Okhla Industrial Area, New Delhi — 110020</p>
                <p>info@fcmlindia.com</p>
              </div>
            </div>
          </div>

          <div>
            <Reveal>
              <Kicker>Enquiry</Kicker>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-4xl font-light text-ink md:text-5xl">
                Begin your project.
              </h2>
            </Reveal>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-12 border border-brass/30 bg-brass/5 p-10 text-center"
              >
                <p className="font-display text-3xl font-light text-ink">Thank you, {form.name || "friend"}.</p>
                <p className="mt-3 text-clay">
                  Your enquiry has been received. Our team will be in touch
                  shortly to craft your immersive experience.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-10 space-y-7"
              >
                <Field label="Full name">
                  <input required value={form.name} onChange={update("name")} data-cursor placeholder="Your name" className="w-full bg-transparent py-2 focus:outline-none" />
                </Field>
                <Field label="Email">
                  <input required type="email" value={form.email} onChange={update("email")} data-cursor placeholder="you@email.com" className="w-full bg-transparent py-2 focus:outline-none" />
                </Field>
                <Field label="Division of interest">
                  <select value={form.division} onChange={update("division")} data-cursor className="w-full bg-transparent py-2 focus:outline-none">
                    <option value="">Select a division…</option>
                    {DIVISIONS.map((d) => (
                      <option key={d.slug} value={d.slug}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Message">
                  <textarea required value={form.message} onChange={update("message")} data-cursor rows={4} placeholder="Tell us about your project…" className="w-full resize-none bg-transparent py-2 focus:outline-none" />
                </Field>
                <button
                  data-cursor
                  type="submit"
                  className="group relative overflow-hidden rounded-full bg-ink px-10 py-4 text-xs uppercase tracking-[0.2em] text-paper"
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-ink">Send Enquiry</span>
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-brass transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
                </button>
              </form>
            )}
          </div>
        </div>
      </SectionShell>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-ink/20 focus-within:border-ink">
      <label className="mb-2 block text-xs uppercase tracking-[0.1em] text-clay">
        {label}
      </label>
      {children}
    </div>
  );
}
