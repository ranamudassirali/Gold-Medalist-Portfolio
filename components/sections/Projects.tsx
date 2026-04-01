"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import useReducedMotion from "@/hooks/useReducedMotion";

const projects = [
  {
    title: "MindMerge",
    description: "A 100% offline, privacy-first Academic AI Assistant that transforms lecture PDFs into a private knowledge base. Features a local RAG pipeline for source-aware answers and precise citations without cloud dependency. Highlights include 100% Local Inference, Semantic Search with Nomic Embeddings, Source-Aware Citations, and a Zero-Cost Architecture.",
    tech: ["Python", "LangChain", "Ollama (TinyLlama)", "FAISS", "CustomTkinter"],
    github: "https://github.com/ranamudassirali/MindMerge-RAG-Assistant",
    demo: "#",
    image: "/projects/mindmerge.png",
  },
  {
    title: "Corinna AI",
    description: "A comprehensive AI-driven sales ecosystem that transforms customer engagement into conversions. It features an intelligent chatbot with real-time sentiment analysis for seamless live-agent handovers, automated personalized email marketing, and a smart lead management system that prioritizes prospects and automates meeting bookings.",
    tech: ["Next.js", "OpenAI API", "PostgreSQL", "Stripe", "Sentiment Analysis"],
    github: "https://github.com/ranamudassirali/corinna-test",
    demo: "https://corinna-ai-git-feature-knowledge-base-hzg4s-projects.vercel.app",
    image: "/projects/corinna-ai.png",
  },
  {
    title: "🤖 Pakistan News Agent",
    description: "An Autonomous AI News Editor using a LangGraph State Machine and ReAct logic. It thinks like a professional editor—evaluating, filtering, and summarizing real-time news with Gemini 2.5 Flash Lite and SerpAPI. Key Features: LangGraph State Machine (Reason + Act loop), Real-time News Retrieval via SerpAPI (Localized gl=pk), Multi-threaded Tkinter Desktop GUI, Automated Editorial Ranking & Filtering.",
    tech: ["Python", "LangGraph", "Gemini 2.5", "SerpAPI", "Tkinter"],
    github: "#",
    demo: "#",
    image: "/projects/pakistan_news_agent.jpg.png",
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
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 relative bg-background">
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
            <span className="gradient-text drop-shadow-sm">Featured</span> Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            A selection of my recent work showcasing expertise in full-stack development and intelligent systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={prefersReducedMotion ? undefined : { once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              initial={prefersReducedMotion ? "visible" : undefined}
              whileInView={prefersReducedMotion ? undefined : "visible"}
              viewport={prefersReducedMotion ? undefined : { once: true }}
              className="group glass-card rounded-3xl overflow-hidden hover:ring-2 hover:ring-primary/40 focus-within:ring-2 focus-within:ring-primary/40 transition-all duration-300 relative flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-background to-secondary/50 shrink-0">
                <Image
                  src={project.image}
                  alt={`${project.title} - Project screenshot showing the user interface and key features`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8 relative z-10 flex flex-col grow">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2.5 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group/link"
                  >
                    <FaGithub size={18} className="group-hover/link:text-foreground transition-colors" />
                    <span>View Code</span>
                  </motion.a>
                  
                  {project.demo !== "#" && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-foreground transition-colors group/link"
                    >
                      <ExternalLink size={18} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
