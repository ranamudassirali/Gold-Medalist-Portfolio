"use client";

import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useReducedMotion from "@/hooks/useReducedMotion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/ranamudassirali",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/rana-mudassir-ali-9a9a25238",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="relative py-16 px-6 border-t border-border bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo & Title */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={prefersReducedMotion ? undefined : { once: true }}
            className="space-y-4"
          >
            <h3 className="text-3xl md:text-4xl font-bold gradient-text">
              Rana Mudassir Ali
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              AI/ML Engineer & Full-Stack Developer specializing in intelligent
              systems and cloud-native applications.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
            viewport={prefersReducedMotion ? undefined : { once: true }}
            transition={prefersReducedMotion ? {} : { delay: 0.2 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary focus-ring"
                aria-label={`Visit ${social.label}`}
              >
                <social.icon size={24} className="md:w-6 md:h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {/* Bottom info */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
            viewport={prefersReducedMotion ? undefined : { once: true }}
            transition={prefersReducedMotion ? {} : { delay: 0.3 }}
            className="text-sm text-muted-foreground space-y-2"
          >
            <p className="flex items-center justify-center gap-2 flex-wrap">
              © {currentYear} Rana Mudassir Ali. All rights reserved.
            </p>
            <p className="flex items-center justify-center gap-1 text-xs">
              Built with
              <span className="inline-flex items-center gap-1">
                <Heart className="w-3 h-3 text-neon-pink fill-current" />
              </span>
              using Next.js 15, TypeScript, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
