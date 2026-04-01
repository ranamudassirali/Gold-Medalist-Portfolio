"use client";

import { motion } from "framer-motion";
import useReducedMotion from "@/hooks/useReducedMotion";

const skillCategories = [
  {
    title: "AI & Agentic Logic",
    skills: [
      { name: "LangGraph", level: 95 },
      { name: "ReAct (Reason + Act)", level: 90 },
      { name: "Gemini 2.5 Flash Lite", level: 95 },
      { name: "LLMs (OpenAI, DeepSeek)", level: 90 },
      { name: "RAG & LangChain", level: 95 },
      { name: "CrewAI", level: 85 },
    ],
  },
  {
    title: "Web & Full-Stack",
    skills: [
      { name: "Next.js 15", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Prisma ORM", level: 85 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Pinecone (Vector DB)", level: 90 },
      { name: "FAISS", level: 85 },
      { name: "Google Cloud Platform (GCP)", level: 80 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Python (Advanced)", level: 98 },
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "Node.js", level: 90 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 relative bg-background">
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
            Skills & <span className="gradient-text drop-shadow-sm">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            Core technologies and engineering practices I leverage to build state-of-the-art applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={prefersReducedMotion ? undefined : { once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              initial={prefersReducedMotion ? "visible" : undefined}
              whileInView={prefersReducedMotion ? undefined : "visible"}
              viewport={prefersReducedMotion ? undefined : { once: true }}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
              className="glass-card rounded-[2rem] p-8 hover:ring-2 hover:ring-primary/40 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-foreground mb-8 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground/90 group-hover/skill:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-primary opacity-80 group-hover/skill:opacity-100">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary/80 rounded-full overflow-hidden shadow-inner ring-1 ring-background/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.1 + skillIndex * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="h-full bg-gradient-to-r from-primary/80 via-primary to-blue-500 rounded-full relative shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover/skill:shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all"
                      >
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[borderBeam_2s_linear_infinite] mix-blend-overlay" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
