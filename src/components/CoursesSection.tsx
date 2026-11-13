"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface Course {
  title: string;
  institution?: string;
}

const COURSES: Course[] = [
  {
    title: "Iniciación al Desarrollo con IA",
    institution: "El Nuevo Programador",
  },
  {
    title: "Tu Segundo Yo 24/7: Inteligencia Artificial Aplicada",
  },
  {
    title: "CoderCup IA T1: Automatización, Agentes y Aplicaciones",
  },
  {
    title: "Curso de Preparación para el Ingreso",
    institution: "Soy Henry",
  },
  {
    title: "Diseño Gráfico, HTML y CSS",
    institution: "Instituto Digital",
  },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function CoursesSection() {
  return (
    <section id="cursos" className="relative">
      <div className="max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-gold"
        >
          <GraduationCap className="h-3.5 w-3.5" strokeWidth={1.25} aria-hidden="true" />
          Formación Complementaria
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-5 font-serif text-3xl font-light tracking-tight text-fg sm:text-4xl lg:text-5xl"
        >
          Cursos y Certificaciones
        </motion.h2>
      </div>

      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 border-t border-gold/30"
      >
        {COURSES.map((course, index) => (
          <motion.li
            key={course.title}
            variants={itemVariants}
            className="border-b border-gold/30"
          >
            <div className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-8">
              <span className="font-serif text-sm font-light text-gold sm:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl font-light leading-snug text-fg sm:col-span-9">
                {course.title}
              </h3>
              {course.institution && (
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-muted sm:col-span-2 sm:text-right">
                  {course.institution}
                </p>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default CoursesSection;
