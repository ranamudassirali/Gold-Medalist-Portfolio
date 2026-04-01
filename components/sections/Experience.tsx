"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import useReducedMotion from "@/hooks/useReducedMotion";

const experiences = [
  {
    title: "Machine Learning & Cloud Computing Developer",
    company: "TECVEQ",
    location: "Remote",
    period: "July 2025 - January 2026 (6 Months)",
    description: "Focus: Google Cloud Platform (GCP) and Scalable Architecture",
    highlights: [
      "Developed and deployed ML models on Google Cloud Platform (GCP).",
      "Architected cloud-native data-driven solutions and optimized application performance in distributed environments.",
      "Collaborated on cloud infrastructure setup and delivered production-ready ML modules.",
    ],
  },
  {
    title: "PSEB Apprentice",
    company: "Deep Cognitive Solutions",
    location: "Lahore, Pakistan",
    period: "March 3, 2026 - Present",
    description: "Focus: Generative AI & Agentic Systems",
    highlights: [
      "Engineering advanced Autonomous AI Agents using LangGraph and the ReAct (Reason + Act) paradigm.",
      "Developing custom RAG (Retrieval-Augmented Generation) pipelines and optimizing LLM performance for complex reasoning tasks.",
      "Implementing state-of-the-art Agentic workflows (Multi-agent systems, State Machines).",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 relative bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={prefersReducedMotion ? undefined : { once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4 tracking-tight">
            Professional <span className="gradient-text drop-shadow-sm">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            Building AI systems and cloud infrastructure at scale
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={prefersReducedMotion ? undefined : { once: true }}
          className="relative"
        >
          {/* Vertical timeline line - adjusted for mobile */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2 rounded-full opacity-30" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial={prefersReducedMotion ? "visible" : undefined}
                whileInView={prefersReducedMotion ? undefined : "visible"}
                viewport={prefersReducedMotion ? undefined : { once: true }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-primary to-primary/70 transform -translate-x-1/2 mt-6 md:mt-12 shadow-[0_0_12px_rgba(168,85,247,0.6)] z-10 border-2 md:border-3 border-background" />

                {/* Content card */}
                <div className={`flex-1 md:w-[45%] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="glass-card rounded-2xl md:rounded-[2rem] p-6 md:p-8 hover:ring-2 hover:ring-primary/40 transition-all duration-300 relative overflow-hidden group focus-ring"
                    tabIndex={0}
                    aria-label={`Experience: ${exp.title} at ${exp.company}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 ring-1 ring-primary/20 shadow-inner">
                        <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold mb-2 md:mb-3 text-sm md:text-base">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
                          <span className="flex items-center gap-1 glass px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-border/50">
                            <MapPin size={12} className="text-primary" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1 glass px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-border/50">
                            <Calendar size={12} className="text-primary" />
                            {exp.period.includes('Present') ? (
                              <>
                                {exp.period.split('Present')[0]}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] font-bold">Present</span>
                                {exp.period.split('Present')[1]}
                              </>
                            ) : (
                              exp.period
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-left mb-4 md:mb-6">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 md:space-y-3 text-left pl-5">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-xs md:text-sm text-foreground/90 flex items-start gap-2 md:gap-3 w-full"
                        >
                          <span className="text-primary mt-1 shrink-0 bg-primary/20 p-0.5 rounded-full">
                            <motion.div initial={{ scale: 0.8 }} whileHover={{ scale: 1.2 }}>
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            </motion.div>
                          </span>
                          <span className="text-left">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden md:block flex-1 md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
