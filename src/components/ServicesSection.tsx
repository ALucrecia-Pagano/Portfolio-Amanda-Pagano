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
    title: "Desarrollo Web",
    description:
      "Interfaces modernas y responsivas con Next.js, TypeScript y Tailwind CSS, cuidadas al detalle.",
  },
  {
    icon: Database,
    title: "Arquitectura de Bases de Datos",
    description:
      "Modelado relacional en PostgreSQL, normalización y consultas SQL eficientes para datos confiables.",
  },
  {
    icon: Workflow,
    title: "Sistemas de Gestión",
    description:
      "Plataformas que ordenan inventario, procesos y flujos comerciales reales.",
  },
  {
    icon: Server,
    title: "Ingeniería Backend",
    description:
      "APIs y servicios robustos en Java con arquitecturas limpias, mantenibles y escalables.",
  },
  {
    icon: Plug,
    title: "Integración de APIs",
    description:
      "Conexión de servicios externos y automatizaciones que eliminan trabajo manual repetitivo.",
  },
  {
    icon: Cloud,
    title: "Cloud y Despliegue",
    description:
      "Despliegue y operación en la nube sobre AWS, con foco en performance y disponibilidad.",
  },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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
          className="font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-gold"
        >
          En qué soy experta
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-5 font-serif text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Mis Servicios
        </motion.h2>
      </div>

      {/* Lista plana separada por líneas doradas */}
      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 border-t border-gold/30"
      >
        {SERVICES.map(({ icon: Icon, title, description }) => (
          <motion.li
            key={title}
            variants={itemVariants}
            className="border-b border-gold/30"
          >
            <a
              href="#contacto"
              className="group grid grid-cols-1 gap-4 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-8"
            >
              <span className="sm:col-span-1">
                <Icon
                  className="h-5 w-5 text-gold transition-transform duration-300 ease-out group-hover:translate-x-1"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
              </span>

              <h3 className="font-serif text-2xl font-light tracking-tight text-white transition-colors duration-300 group-hover:text-gold sm:col-span-4">
                {title}
              </h3>

              <p className="text-sm leading-relaxed text-[#a1a1aa] sm:col-span-7">
                {description}
              </p>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default ServicesSection;
