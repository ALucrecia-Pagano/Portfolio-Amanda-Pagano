"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Workflow,
  Server,
  Plug,
  Cloud,
  type LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Interfaces modernas y responsivas con Next.js, TypeScript y Tailwind CSS, cuidadas al detalle.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Modelado relacional en PostgreSQL, normalización y consultas SQL eficientes para datos confiables.",
  },
  {
    icon: Workflow,
    title: "Operational Systems",
    description:
      "Plataformas de gestión que ordenan inventario, procesos y flujos comerciales reales.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "APIs y servicios robustos en Java con arquitecturas limpias, mantenibles y escalables.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "Conexión de servicios externos y automatizaciones que eliminan trabajo manual repetitivo.",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description:
      "Despliegue y operación en la nube sobre AWS, con foco en performance y disponibilidad.",
  },
];

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ServicesSection() {
  return (
    <section id="servicios" className="relative">
      {/* Encabezado centrado */}
      <div className="mx-auto max-w-2xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.42em] text-[#a1a1aa]"
        >
          What I am Expert In
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          My Services
        </motion.h2>
      </div>

      {/* Grilla Bento / Glassmorphism — 3 columnas x 2 filas */}
      <motion.ul
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES.map(({ icon: Icon, title, description }) => (
          <motion.li key={title} variants={cardVariants}>
            <a
              href="#contacto"
              className="group flex h-full cursor-pointer flex-col gap-6 rounded-3xl bg-[#111111]/80 p-8 ring-1 ring-transparent backdrop-blur-sm transition-all duration-300 ease-out hover:ring-[#333]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] text-white transition-colors duration-300 group-hover:bg-white/[0.08]">
                <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              </span>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-[#a1a1aa]">
                  {description}
                </p>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default ServicesSection;
