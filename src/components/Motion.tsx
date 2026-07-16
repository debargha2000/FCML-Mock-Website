"use client";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useInView,
  type Variants,
} from "framer-motion";
import {
  useRef,
  type ReactNode,
  type ElementType,
  type CSSProperties,
} from "react";
import { cn } from "../utils/cn";

const ease = [0.16, 1, 0.3, 1] as const;

/* ---------- Reveal: fade + slide up on enter viewport ---------- */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 38,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: ElementType;
}) {
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;
  const reduce = useReducedMotion();
  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </MotionTag>
  );
}

/* ---------- Line-by-line text reveal ---------- */
const lineParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const lineChild: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1, ease } },
};

export function SplitLines({
  text,
  className,
  lineClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  const lines = text.split("\n");
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={cn("block", className)}
      variants={lineParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ delayChildren: delay }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={cn("block", lineClassName)}
            variants={reduce ? undefined : lineChild}
            initial={reduce ? { opacity: 0 } : undefined}
            whileInView={reduce ? { opacity: 1 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0.6 : undefined }}
          >
            {line || "\u00A0"}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* ---------- Magnetic: element drifts toward cursor ---------- */
export function Magnetic({
  children,
  strength = 0.4,
  className,
  as = "div",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
  as?: ElementType;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  function onMove(e: React.MouseEvent) {
    if (reduce) return;
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <MotionTag
      style={reduce ? undefined : { x: sx, y: sy }}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </MotionTag>
  );
}

/* ---------- Parallax image ---------- */
export function Parallax({
  src,
  alt,
  className,
  imgClassName,
  style,
  ratio = 0.16,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  style?: CSSProperties;
  ratio?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${ratio * 100}%`, `${ratio * 100}%`]);
  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)} style={style}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={reduce ? { scale: 1.1 } : { y, scale: 1 + ratio * 2.4 }}
        className={cn("absolute inset-0 h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}

/* ---------- Clip reveal image ---------- */
export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        animate={
          inView
            ? reduce ? { opacity: 1 } : { clipPath: "inset(0% 0 0 0)", scale: 1.08 }
            : reduce ? { opacity: 0 } : { clipPath: "inset(100% 0 0 0)", scale: 1.3 }
        }
        transition={{ duration: 1.3, ease, delay }}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}

/* ---------- Marquee ---------- */
export function Marquee({
  children,
  reverse = false,
  className,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("marquee-wrap relative w-full overflow-hidden", className)}>
      <div className={cn("marquee-track", reverse && "reverse")}>
        <span className="flex shrink-0">{children}</span>
        <span className="flex shrink-0" aria-hidden>
          {children}
        </span>
      </div>
    </div>
  );
}
