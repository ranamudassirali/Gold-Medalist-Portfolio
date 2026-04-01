"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import useReducedMotion from "@/hooks/useReducedMotion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility(); // Check initial state

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Animation props based on reduced motion preference
  const buttonInitial = prefersReducedMotion ? false : { opacity: 0, scale: 0.8, y: 20 };
  const buttonAnimate = { opacity: 1, scale: 1, y: 0 };
  const buttonExit = prefersReducedMotion ? undefined : { opacity: 0, scale: 0.8, y: 20 };
  const buttonWhileHover = prefersReducedMotion ? {} : { scale: 1.1, y: -2 };
  const buttonWhileTap = prefersReducedMotion ? {} : { scale: 0.95 };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={buttonInitial}
          animate={buttonAnimate}
          exit={buttonExit}
          whileHover={buttonWhileHover}
          whileTap={buttonWhileTap}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary shadow-lg hover:shadow-primary/40 focus-ring"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
