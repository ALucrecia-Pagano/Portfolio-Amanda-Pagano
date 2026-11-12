"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ABOUT_IMAGE = "/foto-perfil.jpg";

const TECH_STACK = [
  "Java",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "AWS",
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
    >
      {/* Columna 1 — Imagen en contenedor vertical estrecho */}
      <motion.div
        variants={fadeUp}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="group relative mx-auto w-full max-w-xs lg:col-span-4 lg:mx-0 lg:max-w-none"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#111111]">
          <Image
            src={ABOUT_IMAGE}
            alt="Amanda Pagano trabajando en desarrollo Full Stack"
            fill
            sizes="(max-width: 1024px) 100vw, 30vw"
            className="object-cover grayscale transition-[filter,transform] duration-[900ms] ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        </div>
      </motion.div>

      {/* Columna 2 — Título, texto y stack */}
      <div className="lg:col-span-7 lg:col-start-6">
        <motion.h2
          variants={fadeUp}
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Professional and Dedicated Full Stack Developer
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-[#a1a1aa] sm:text-lg"
        >
          Con más de dos años gestionando operaciones de e-commerce reales y una
          formación avanzada en ingeniería de software, diseño soluciones que
          equilibran arquitectura robusta en el backend con experiencias
          frontend cuidadas. Mi enfoque combina modelado de datos relacionales,
          desarrollo Full Stack y flujos de trabajo asistidos por IA para
          entregar software confiable y escalable.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={0.25}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12"
        >
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#a1a1aa]">
            Tech Stack
          </span>
          <ul className="mt-5 flex flex-wrap gap-3">
            {TECH_STACK.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 bg-[#111111] px-4 py-2 text-sm font-medium text-white transition-colors duration-300 ease-out hover:border-white/40"
              >
                {tech}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
