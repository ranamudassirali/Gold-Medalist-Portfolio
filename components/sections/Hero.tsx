"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useReducedMotion from "@/hooks/useReducedMotion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 pb-16"
    >
      {/* Parallax background elements - disable if reduced motion */}
      {!prefersReducedMotion ? (
        <>
          <motion.div style={{ y: y1 }} className="absolute inset-0 bg-hero-gradient opacity-60 dark:opacity-100" />
          <motion.div style={{ y: y2 }} className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-primary/10 via-background/5 to-transparent mix-blend-overlay pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-hero-gradient opacity-60 dark:opacity-100" />
          <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-primary/10 via-background/5 to-transparent mix-blend-overlay pointer-events-none" />
        </>
      )}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,250,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <motion.div
        variants={containerVariants}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-20 max-w-7xl mx-auto px-6 text-center"
      >
        {/* Profile Photo */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-blue-500 to-purple-600 blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-background/80 backdrop-blur-md">
              <Image
                src="/profile.jpg"
                alt="Rana Mudassir Ali - AI/ML Engineer & Full-Stack Developer"
                width={176}
                height={176}
                priority
                sizes="(max-width: 768px) 144px, 176px"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold mb-4 tracking-tight leading-[0.95]"
        >
          <span className="text-foreground">Rana Mudassir</span>
          <br />
          <span className="gradient-text drop-shadow-sm">Ali</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8 flex flex-wrap justify-center gap-4">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold glass border hover:border-yellow-400 border-yellow-500/50 text-yellow-600 dark:text-yellow-400 bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.25)] hover:shadow-[0_0_25px_rgba(234,179,8,0.45)] transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            Patron's Gold Medalist
          </span>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold glass border hover:border-amber-400 border-amber-500/50 text-amber-600 dark:text-amber-400 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:shadow-[0_0_25px_rgba(245,158,11,0.45)] transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            4.0/4.0 CGPA
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance leading-relaxed font-medium"
        >
          AI, Machine Learning & Data Science enthusiast building intelligent
          systems at the intersection of research and production.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary rounded-full font-semibold text-primary-foreground shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300"
          >
            View My Work
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full font-semibold text-foreground transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          {[
            { icon: FaGithub, href: "https://github.com/ranamudassirali", label: "GitHub" },
            {
              icon: FaLinkedin,
              href: "https://www.linkedin.com/in/rana-mudassir-ali-9a9a25238",
              label: "LinkedIn",
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -4 }}
              className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Modern Floating Elements - disable if reduced motion */}
      {!prefersReducedMotion ? (
        <>
          <motion.div
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-5 lg:left-20 w-32 h-32 rounded-full bg-primary/20 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-5 lg:right-20 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl"
          />
        </>
      ) : (
        <>
          <div className="absolute top-1/4 left-5 lg:left-20 w-32 h-32 rounded-full bg-primary/20 blur-3xl opacity-40" />
          <div className="absolute bottom-1/4 right-5 lg:right-20 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl opacity-30" />
        </>
      )}
    </section>
  );
}
