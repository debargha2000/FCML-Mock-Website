import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImageReveal } from "./Motion";
import { cn } from "../utils/cn";

const ease = [0.16, 1, 0.3, 1] as const;

/* Editorial gallery: alternating large/small tiles with hover zoom + lightbox */
export default function MediaGallery({
  images,
  captions,
}: {
  images: string[];
  captions?: string[];
}) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-12 lg:grid-rows-2">
        {images.slice(0, 5).map((src, i) => {
          const spans = [
            "lg:col-span-7 lg:row-span-2 aspect-[4/3] lg:aspect-auto",
            "lg:col-span-5 aspect-square",
            "lg:col-span-5 aspect-square",
            "lg:col-span-4 aspect-[4/5]",
            "lg:col-span-8 aspect-[16/10]",
          ];
          return (
            <div key={i} className={cn("group relative", spans[i])}>
              <button
                onClick={() => setActive(i)}
                data-cursor="view"
                className="relative block h-full w-full overflow-hidden"
              >
                <ImageReveal
                  src={src}
                  alt={captions?.[i] ?? `FCML ${i + 1}`}
                  delay={i * 0.06}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {captions?.[i] && (
                  <span className="pointer-events-none absolute bottom-4 left-4 translate-y-3 text-xs uppercase tracking-[0.2em] text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {captions[i]}
                  </span>
                )}
                <span className="pointer-events-none absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-paper/50 text-paper opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 13L13 1M13 1H4M13 1v9" stroke="currentColor" />
                  </svg>
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/95 p-6 backdrop-blur-sm md:p-16"
          >
            <button
              data-cursor
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-paper/70"
            >
              Close ✕
            </button>
            <motion.img
              key={active}
              src={images[active]}
              alt=""
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease }}
              className="max-h-[85vh] max-w-full object-contain"
            />
            <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.2em] text-paper/50">
              {active + 1} / {images.length}
            </div>
            <NavButtons
              onPrev={() => setActive((a) => ((a! - 1 + images.length) % images.length))}
              onNext={() => setActive((a) => ((a! + 1) % images.length))}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavButtons({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <>
      <button
        data-cursor
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-paper/60 hover:text-paper"
      >
        <svg width="34" height="16" viewBox="0 0 34 16" fill="none">
          <path d="M34 8H2m0 0l6 6M2 8l6-6" stroke="currentColor" />
        </svg>
      </button>
      <button
        data-cursor
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-paper/60 hover:text-paper"
      >
        <svg width="34" height="16" viewBox="0 0 34 16" fill="none">
          <path d="M0 8h32m0 0l-6-6m6 6l-6 6" stroke="currentColor" />
        </svg>
      </button>
    </>
  );
}
