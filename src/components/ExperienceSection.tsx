"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function ExperienceSection() {
  const { profile } = portfolioData;

  return (
    <section id="sobre-mi" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trayectoria &amp; Formación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Experiencia &amp; Educación
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
            Sólidos fundamentos de ingeniería en la UTN combinados con gestión operativa en entornos comerciales reales.
          </p>
        </div>

        {/* 2-Column Bento Grid: Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-[#111116] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden shadow-xl"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
            />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                  <Briefcase className="w-3.5 h-3.5" />
                  Experiencia Comercial
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  {profile.experience[0]?.period}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  {profile.experience[0]?.company}
                </h3>
                <p className="text-sm font-medium text-emerald-400/90 mt-0.5">
                  {profile.experience[0]?.role}
                </p>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {profile.experience[0]?.description}
              </p>

              <div className="space-y-2 pt-2">
                {profile.experience[0]?.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-3xl bg-[#111116] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden shadow-xl"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
            />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/25">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Educación Superior
                </span>
                <span className="text-xs font-mono text-purple-400">
                  {profile.education.completionEta}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  {profile.education.institution}
                </h3>
                <p className="text-sm font-medium text-purple-300 mt-0.5">
                  {profile.education.degree}
                </p>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {profile.education.details}
              </p>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
                <span className="text-xs font-semibold text-zinc-300">Enfoque Académico:</span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Programación Orientada a Objetos en Java, estructuras de datos, modelado relacional en SQL y buenas prácticas de ingeniería de software.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default ExperienceSection;
