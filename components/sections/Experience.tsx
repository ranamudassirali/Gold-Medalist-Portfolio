"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import useReducedMotion from "@/hooks/useReducedMotion";

const experiences = [
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={prefersReducedMotion ? undefined : { once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-4 tracking-tight">
            Professional <span className="gradient-text drop-shadow-sm">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto font-medium">
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
          {/* Vertical timeline line - continuous spine */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent rounded-full opacity-40" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial={prefersReducedMotion ? "visible" : undefined}
                whileInView={prefersReducedMotion ? undefined : "visible"}
                viewport={prefersReducedMotion ? undefined : { once: true }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot - aligned with card top */}
                <div className="absolute left-4 md:left-6 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-[0_0_12px_rgba(168,85,247,0.6)] z-10 border-2 border-background" />

                {/* Content card - full width on mobile, tight on desktop */}
                <div className="md:max-w-2xl md:ml-8">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-card rounded-xl p-4 hover:ring-2 hover:ring-primary/40 transition-all duration-300 relative overflow-hidden group"
                    tabIndex={0}
                    aria-label={`Experience: ${exp.title} at ${exp.company}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="flex flex-col gap-2 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 ring-1 ring-primary/20 shadow-inner">
                        <Briefcase className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold text-sm mb-1.5">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1 glass px-2.5 py-1 rounded-full border border-border/50">
                            <MapPin size={12} className="text-primary" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1 glass px-2.5 py-1 rounded-full border border-border/50">
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

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5 text-left pl-5">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5 shrink-0 bg-primary/20 p-0.5 rounded-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          </span>
                          <span className="text-left">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
