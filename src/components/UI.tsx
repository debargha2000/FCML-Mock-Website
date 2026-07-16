import { type ReactNode } from "react";
import { Magnetic } from "./Motion";
import { cn } from "../utils/cn";
import Link from "next/link";

/* Eyebrow label with a leading dash */
export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-3 text-brass", className)}>
      <span className="h-px w-8 bg-brass/60" />
      {children}
    </span>
  );
}

/* Primary text link button with magnetic pull + animated arrow */
export function ArrowLink({
  children,
  onClick,
  href,
  className,
  light = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  light?: boolean;
}) {
  const content = (
    <>
      <span className="link-underline">{children}</span>
      <span className="relative flex h-5 w-8 items-center overflow-hidden">
        <span
          className={cn(
            "absolute flex items-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-7",
            light ? "text-paper/70" : "text-brass"
          )}
        >
          <svg width="28" height="10" viewBox="0 0 28 10" fill="none" className="-ml-7">
            <path d="M0 5h26m0 0L22 1m4 4l-4 4" stroke="currentColor" strokeWidth="1" />
          </svg>
          <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
            <path d="M0 5h26m0 0L22 1m4 4l-4 4" stroke="currentColor" strokeWidth="1" />
          </svg>
        </span>
      </span>
    </>
  );

  return (
    <Magnetic strength={0.5} className="inline-block">
      {href ? (
        <Link
          href={href}
          data-cursor
          onClick={onClick}
          className={cn(
            "group inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em]",
            light ? "text-paper/90" : "text-ink",
            className
          )}
        >
          {content}
        </Link>
      ) : (
        <button
          onClick={onClick}
          data-cursor
          className={cn(
            "group inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em]",
            light ? "text-paper/90" : "text-ink",
            className
          )}
        >
          {content}
        </button>
      )}
    </Magnetic>
  );
}

/* Filled solid button */
export function SolidButton({
  children,
  onClick,
  href,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}) {
  const content = (
    <>
      <span className="relative z-10 transition-colors duration-500 group-hover:text-ink">
        {children}
      </span>
      <span className="absolute inset-0 origin-bottom scale-y-0 rounded-full bg-brass transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
    </>
  );

  return (
    <Magnetic strength={0.3} className="inline-block">
      {href ? (
        <Link
          href={href}
          data-cursor
          onClick={onClick}
          className={cn(
            "group relative inline-flex overflow-hidden rounded-full bg-ink px-8 py-4 text-xs uppercase tracking-[0.2em] text-paper",
            className
          )}
        >
          {content}
        </Link>
      ) : (
        <button
          onClick={onClick}
          data-cursor
          className={cn(
            "group relative overflow-hidden rounded-full bg-ink px-8 py-4 text-xs uppercase tracking-[0.2em] text-paper",
            className
          )}
        >
          {content}
        </button>
      )}
    </Magnetic>
  );
}

export function SectionShell({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative px-6 md:px-10 lg:px-16", className)}>
      <div className="mx-auto max-w-[1500px]">{children}</div>
    </section>
  );
}
