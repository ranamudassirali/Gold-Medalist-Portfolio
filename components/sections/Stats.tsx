"use client";

import { motion } from "framer-motion";
import { Award, Code, BookOpen, Trophy } from "lucide-react";
import useReducedMotion from "@/hooks/useReducedMotion";

const stats = [
  {
    icon: Trophy,
    value: "4.0",
    suffix: "/4.0",
    label: "CGPA",
    description: "Perfect academic record",
  },
  {
    icon: Award,
    value: "2x",
    suffix: "",
    label: "Gold Medalist",
    description: "Outstanding academic achievement",
  },
  {
    icon: Code,
    value: "10+",
    suffix: "",
    label: "Projects",
    description: "Full-stack & AI/ML solutions",
  },
  {
    icon: BookOpen,
    value: "6",
    suffix: " Months",
    label: "Experience",
    description: "Industry expertise",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Stats() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-16 px-6 relative bg-background border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={prefersReducedMotion ? undefined : { once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 whitespace-nowrap">
                {stat.value}
                <span className="text-foreground/80">{stat.suffix}</span>
              </div>
              <div className="text-base md:text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground hidden sm:block">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
