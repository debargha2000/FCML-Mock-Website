import "../index.css";
import Cursor from "../components/Cursor";
import ScrollProgress from "../components/ScrollProgress";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SmoothScrollProvider } from "../components/SmoothScrollProvider";

export const metadata = {
  title: "FCML - Luxury Interiors & Architecture",
  description: "India's premier luxury interior and architecture design brand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-paper font-sans text-ink selection:bg-brass/30 antialiased" suppressHydrationWarning>
        <SmoothScrollProvider>
          <div className="relative">
            <Cursor />
            <ScrollProgress />
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
