"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Bespoke cursor:
 *  - A small dot that tracks the pointer exactly (via motion values).
 *  - A ring that follows with spring lag.
 *  - Portaled to <body> so mix-blend-mode behaves reliably over any content.
 *  - Variants: default / hover (interactive) / view (media).
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"default" | "hover" | "view">("default");
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const interactiveSel =
      "a, button, input, select, textarea, label, [data-cursor]";

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("[data-cursor='view']")) setVariant("view");
      else if (t.closest(interactiveSel)) setVariant("hover");
      else setVariant("default");
    };
    const leave = () => setHidden(true);
    const down = () => setHidden(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
    };
  }, [x, y]);

  if (!enabled) return null;

  return createPortal(
    <>
      <motion.div
        className="cursor-ring"
        data-variant={variant}
        style={{ x: ringX, y: ringY, opacity: hidden ? 0 : 1 }}
      >
        <div className="cursor-ring-vis">
          <span className="cursor-label">View</span>
        </div>
      </motion.div>
      <motion.div
        className="cursor-dot"
        style={{ x, y, opacity: hidden ? 0 : 1 }}
      />
    </>,
    document.body
  );
}
