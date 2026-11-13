"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function ExperienceSection() {
  const { profile } = portfolioData;

  return (
    <section id="trayectoria" className="relative">
      <div className="max-w-2xl">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="inline-flex items-center gap-3 font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-gold">
            <Briefcase className="h-3.5 w-3.5" strokeWidth={1.25} aria-hidden="true" />
            Trayectoria &amp; Formación
          </span>
          <h2 className="font-serif text-3xl font-light tracking-tight text-fg sm:text-4xl lg:text-5xl">
            Experiencia &amp; Educación
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Sólidos fundamentos de ingeniería en la UTN combinados con gestión
            operativa en entornos comerciales reales.
          </p>
        </div>
      </div>

      {/* Lista plana a dos columnas con líneas doradas */}
      <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border-t border-gold/30 pt-8"
        >
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-gold">
              <Briefcase className="h-3.5 w-3.5" strokeWidth={1.25} aria-hidden="true" />
              Experiencia Comercial
            </span>
            <span className="font-serif text-sm font-light italic text-muted">
              {profile.experience[0]?.period}
            </span>
          </div>

          <h3 className="mt-6 font-serif text-2xl font-light text-fg">
            {profile.experience[0]?.company}
          </h3>
          <p className="mt-1 text-sm font-medium text-gold/90">
            {profile.experience[0]?.role}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            {profile.experience[0]?.description}
          </p>

          <div className="mt-5 space-y-2">
            {profile.experience[0]?.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-xs leading-relaxed text-fg/80"
              >
                <CheckCircle2
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="border-t border-gold/30 pt-8"
        >
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-gold">
              <GraduationCap className="h-3.5 w-3.5" strokeWidth={1.25} aria-hidden="true" />
              Educación Superior
            </span>
            <span className="font-serif text-sm font-light italic text-muted">
              {profile.education.completionEta}
            </span>
          </div>

          <h3 className="mt-6 font-serif text-2xl font-light text-fg">
            {profile.education.institution}
          </h3>
          <p className="mt-1 text-sm font-medium text-gold/90">
            {profile.education.degree}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            {profile.education.details}
          </p>

          <div className="mt-5 border-t border-gold/20 pt-4">
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
              Enfoque Académico
            </span>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Programación Orientada a Objetos en Java, estructuras de datos,
              modelado relacional en SQL y buenas prácticas de ingeniería de
              software.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ExperienceSection;
