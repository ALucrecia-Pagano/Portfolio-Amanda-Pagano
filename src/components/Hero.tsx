"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown, Mail, MapPin, Sparkles, Terminal, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const { profile, contact } = portfolioData;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden">
      {/* Luces de fondo ambientales / Ambient radial glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] rounded-full bg-emerald-500/12 blur-[130px] opacity-75"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-40 w-[350px] h-[280px] rounded-full bg-purple-500/10 blur-[120px] opacity-60"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-start gap-6 max-w-4xl">
          
          {/* Badge con animación de pulso */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111116] border border-emerald-500/30 shadow-lg shadow-black/40 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-300 tracking-wide">
              Estudiante avanzada UTN · Graduación en 6 meses
            </span>
          </motion.div>

          {/* Titular contundente */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Desarrolladora{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                Full Stack
              </span>
              <br />
              <span className="text-zinc-400 font-normal">
                &amp; Gestión Operativa
              </span>
            </h1>
          </motion.div>

          {/* Descripción / Bio */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal"
          >
            {profile.bio.short}
          </motion.p>

          {/* Indicadores de estado y contexto */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-4 text-xs text-zinc-400"
          >
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              <span>{profile.location}</span>
            </div>
            <span className="text-zinc-700">•</span>
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{contact.availability}</span>
            </div>
          </motion.div>

          {/* CTAs con botones redondeados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto"
          >
            <a
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-500 text-zinc-950 text-sm font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 hover:shadow-emerald-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Ver Proyectos</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#111116] border border-white/[0.08] text-zinc-200 text-sm font-medium hover:border-white/[0.2] hover:bg-[#16161e] hover:text-white transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              <span>Contactar</span>
            </a>

            {/* Micro-indicadores de stack */}
            <div className="hidden lg:flex items-center gap-2 ml-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.02] border border-white/[0.06] text-zinc-400">
                <Code2 className="w-3 h-3 text-emerald-400" /> Java · TypeScript
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.02] border border-white/[0.06] text-zinc-400">
                <Sparkles className="w-3 h-3 text-purple-400" /> IA Agéntica
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
