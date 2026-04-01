"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function ScrollProgress() {
  const { scrollY, scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState("home");

  // Scale progress bar
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sectionElements) {
        if (section.element) {
          const { offsetTop, offsetHeight } = section.element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Progress bar at top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Side navigation dots */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="relative group"
            aria-label={`Scroll to ${section.label}`}
          >
            {/* Tooltip */}
            <span className="absolute right-8 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-card/90 backdrop-blur-md border border-border rounded-lg text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
              {section.label}
            </span>

            {/* Dot */}
            <motion.div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-primary border-primary scale-125"
                  : "bg-background border-foreground/40 group-hover:border-primary/60"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            />
          </button>
        ))}
      </nav>
    </>
  );
}
