import { RouterProvider, useRouter } from "./components/Router";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import Division from "./pages/Division";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

function CurrentPage() {
  const { route } = useRouter();
  switch (route.name) {
    case "home":
      return <Home />;
    case "division":
      return <Division slug={route.slug} />;
    case "about":
      return <About />;
    case "shop":
      return <Shop />;
    case "contact":
      return <Contact />;
  }
}

function Shell() {
  useSmoothScroll();
  return (
    <div className="relative">
      <Cursor />
      <ScrollProgress />
      <Header />
      <PageTransition>
        <CurrentPage />
      </PageTransition>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  );
}
