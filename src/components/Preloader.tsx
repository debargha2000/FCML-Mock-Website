import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IMAGES } from "../data/site";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Gather all unique image URLs from the site configuration
    const allUrls: string[] = [];
    Object.values(IMAGES).forEach((val) => {
      if (Array.isArray(val)) {
        allUrls.push(...val);
      } else if (typeof val === "string") {
        allUrls.push(val);
      }
    });

    let imagesLoaded = 0;

    // We still use a small timeout to let the DOM settle, then grab DOM images too
    const timer = setTimeout(() => {
      // Catch any stray DOM images (like logos/icons) not in the IMAGES object
      const domImages = Array.from(document.images).map((img) => img.src);
      
      // Merge and deduplicate all URLs
      const uniqueUrls = Array.from(new Set([...allUrls, ...domImages])).filter(Boolean);
      const totalImages = uniqueUrls.length;

      let fontsLoaded = false;
      document.fonts.ready.then(() => {
        fontsLoaded = true;
        checkComplete();
      });

      const checkComplete = () => {
        const currentProgress = totalImages === 0 ? 100 : (imagesLoaded / totalImages) * 100;
        
        // Hold at 99% if images are done but fonts are still loading
        const displayProgress = (imagesLoaded === totalImages && !fontsLoaded) ? 99 : currentProgress;
        setProgress(displayProgress);
        
        if (imagesLoaded === totalImages && fontsLoaded) {
          setProgress(100);
          // Slight cinematic delay before sliding out
          setTimeout(() => setLoading(false), 800);
        }
      };

      if (totalImages === 0) {
        checkComplete();
      } else {
        // 2. Programmatically fetch every single image in the background
        uniqueUrls.forEach((url) => {
          const img = new Image();
          img.onload = () => {
            imagesLoaded++;
            checkComplete();
          };
          img.onerror = () => {
            imagesLoaded++; // Still count as processed to avoid hanging
            checkComplete();
          };
          img.src = url;
        });
      }
    }, 50);

    // Safety fallback: Never trap the user for more than 10 seconds (increased due to full site load)
    const fallback = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setLoading(false), 500);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 text-white"
        >
          <div className="flex flex-col items-center overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-4xl font-light tracking-widest uppercase md:text-6xl"
            >
              FCML
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-zinc-500 font-mono text-sm tracking-widest"
            >
              {Math.round(progress)}%
            </motion.p>
          </div>
          
          <div className="absolute bottom-12 w-48 h-[1px] bg-zinc-800 overflow-hidden">
            <motion.div
              className="h-full bg-white origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.2, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
