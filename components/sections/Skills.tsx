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
    title: "IDE & Development",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Android Studio", level: 90 },
      { name: "Google Colab", level: 95 },
      { name: "Jupyter", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "Looker Studio", level: 85 },
      { name: "Visual Studio", level: 88 },
      { name: "NetBeans", level: 85 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const getSkillBadgeColor = (level: number) => {
  if (level >= 90) return "from-primary/90 to-purple-600";
  if (level >= 80) return "from-primary/70 to-blue-500";
  return "from-primary/50 to-cyan-500";
};

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={prefersReducedMotion ? undefined : { once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-4 tracking-tight">
            Skills & <span className="gradient-text drop-shadow-sm">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-medium">
            Core technologies and engineering practices I leverage to build state-of-the-art applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={prefersReducedMotion ? undefined : { once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              initial={prefersReducedMotion ? "visible" : undefined}
              whileInView={prefersReducedMotion ? undefined : "visible"}
              viewport={prefersReducedMotion ? undefined : { once: true }}
              whileHover={prefersReducedMotion ? {} : { y: -4 }}
              className="glass-card rounded-2xl p-6 hover:ring-2 hover:ring-primary/40 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <h3 className="text-xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`
                      inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium
                      bg-gradient-to-r ${getSkillBadgeColor(skill.level)}
                      text-white shadow-md hover:shadow-lg transition-shadow cursor-default
                    `}
                  >
                    {skill.name}
                    <span className="ml-1.5 text-xs opacity-90">• {skill.level}%</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
