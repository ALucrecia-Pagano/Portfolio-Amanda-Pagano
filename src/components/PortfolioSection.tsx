"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

const PROJECT_IMAGES: Record<string, string> = {
  luti: "/proyectos/luti.png",
  "gestion-turnos-odontologia": "/proyectos/turnos-odontologia.png",
  "editorial-codex": "/proyectos/codex.png",
  "foodstore-demo": "/proyectos/food.png",
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function PortfolioSection() {
  const { projects } = portfolioData;

  return (
    <section id="proyectos" className="relative">
      {/* Encabezado */}
      <div className="mb-14 max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-gold"
        >
          Trabajo seleccionado
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-5 font-serif text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Portafolio
        </motion.h2>
      </div>

      {/* Grilla limpia 2x2 */}
      <motion.ul
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {projects.map((project) => {
          const href =
            project.links.live ?? project.links.github ?? project.links.demo ?? "#";
          const techLine = project.technologies.slice(0, 3).join(" + ");

          return (
            <motion.li key={project.id} variants={cardVariants}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] overflow-hidden bg-[#111111]"
              >
                <Image
                  src={PROJECT_IMAGES[project.id] ?? "/proyectos/placeholder.png"}
                  alt={`${project.title} — ${project.subtitle}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain bg-[#0a0a0a] object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />

                {/* Overlay oscuro translúcido */}
                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 p-7 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                  <h3 className="font-serif text-xl font-light tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                    {techLine}
                  </p>
                </div>
              </a>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}

export default PortfolioSection;
