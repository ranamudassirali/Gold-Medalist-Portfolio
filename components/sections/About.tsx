"use client";

import { motion } from "framer-motion";
import { Download, Mail, MapPin, Clock } from "lucide-react";
import useReducedMotion from "@/hooks/useReducedMotion";

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={prefersReducedMotion ? undefined : { once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={prefersReducedMotion ? undefined : { once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl blur-2xl opacity-50" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass ring-1 ring-primary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary to-primary/70 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-primary/25">
                    <span className="text-4xl md:text-6xl font-bold text-primary-foreground">RA</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2">
                    Rana Mudassir Ali
                  </h3>
                  <p className="text-primary font-medium">
                    AI/ML Engineer | Agentic Systems Specialist
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={prefersReducedMotion ? undefined : { once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                Patron's Gold Medalist with a perfect 4.0/4.0 CGPA in BS Computer Science from COMSATS University. I&apos;m an AI/ML Engineer and Agentic Systems Specialist bridging the gap between cutting-edge research and production-grade applications.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                My work focuses on developing scalable AI solutions, from local RAG systems to cloud-based ML pipelines. I combine deep technical expertise with a passion for solving complex problems through innovative technology.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                <Mail className="w-5 h-5 text-primary" />
                <span>ranamudassirali9@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                <Clock className="w-5 h-5 text-primary" />
                <span>Open to AI/ML engineering opportunities</span>
              </div>
            </div>

            <motion.a
              href="/Resume _Rana Mudassir Ali.pdf"
              download
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/70 rounded-full font-medium text-primary-foreground shadow-sm hover:shadow transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
