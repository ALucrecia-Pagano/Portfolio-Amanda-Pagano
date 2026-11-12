"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Github, Mail, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { profile, contact } = portfolioData;

  const navLinks = [
    { name: "Proyectos", href: "#proyectos" },
    { name: "Stack Tecnológico", href: "#stack" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 transition-all">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3 rounded-full bg-[#0a0a0c]/80 border border-white/[0.08] backdrop-blur-md shadow-2xl shadow-black/60">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 font-mono text-xs font-bold text-gold transition group-hover:border-gold/60 group-hover:scale-105">
            AP
          </span>
          <span className="text-zinc-100 group-hover:text-white font-medium">
            {profile.name}
          </span>
        </a>

        {/* Desktop Links (Scroll suave) */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.02] border border-white/[0.05] rounded-full p-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={contact.socialLinks.find((s) => s.platform === "github")?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Amanda Pagano"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-[#111116] text-zinc-400 hover:text-white hover:border-white/[0.2] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold transition-all duration-300 hover:border-gold/60 hover:bg-gold/15"
          >
            <span>Contacto</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alternar menú"
          className="flex md:hidden p-1.5 rounded-xl border border-white/[0.08] bg-[#111116] text-zinc-300 hover:text-white"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="md:hidden max-w-5xl mx-auto mt-2 p-4 rounded-2xl bg-[#111116]/95 border border-white/[0.08] backdrop-blur-xl shadow-2xl space-y-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-zinc-400">{profile.location}</span>
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold"
              >
                <Mail className="w-3 h-3" />
                Hablemos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
