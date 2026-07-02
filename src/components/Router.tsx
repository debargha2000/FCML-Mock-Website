import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Route =
  | { name: "home" }
  | { name: "division"; slug: string }
  | { name: "about" }
  | { name: "shop" }
  | { name: "contact" };

type RouterCtx = {
  route: Route;
  navigate: (route: Route) => void;
};

const Ctx = createContext<RouterCtx>(null as never);

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const [seg, param] = hash.split("/");
  if (seg === "division" && param) return { name: "division", slug: param };
  if (seg === "about") return { name: "about" };
  if (seg === "shop") return { name: "shop" };
  if (seg === "contact") return { name: "contact" };
  return { name: "home" };
}

function toHash(route: Route): string {
  switch (route.name) {
    case "home":
      return "#/";
    case "division":
      return `#/division/${route.slug}`;
    case "about":
      return "#/about";
    case "shop":
      return "#/shop";
    case "contact":
      return "#/contact";
  }
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [route, setRoute] = useState<Route>(parseHash());

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = useCallback((next: Route) => {
    window.location.hash = toHash(next);
    // ensure top of page on route change
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return <Ctx.Provider value={{ route, navigate }}>{children}</Ctx.Provider>;
}

export function useRouter() {
  return useContext(Ctx);
}
