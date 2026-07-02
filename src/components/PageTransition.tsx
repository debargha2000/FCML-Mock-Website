import { AnimatePresence, motion } from "framer-motion";
import { useRouter, type Route } from "./Router";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Wraps page content. On route change the outgoing page fades & lifts while
 * the incoming page rises into place — a clean, luxe cross-fade.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const { route } = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={routeKey(route)}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.55, ease }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

function routeKey(route: Route): string {
  switch (route.name) {
    case "home":
      return "home";
    case "division":
      return `division-${route.slug}`;
    case "about":
      return "about";
    case "shop":
      return "shop";
    case "contact":
      return "contact";
  }
}
