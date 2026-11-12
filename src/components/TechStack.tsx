"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Code2,
  Database,
  Sparkles,
  GitBranch,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function TechStack() {
  const { techStack } = portfolioData;

  const categories = [
    {
      key: "languages",
      data: techStack.languages,
      Icon: Code2,
    },
    {
      key: "databases",
      data: techStack.databases,
      Icon: Database,
    },
    {
      key: "ai",
      data: techStack.aiAndProductivity,
      Icon: Sparkles,
    },
    {
      key: "management",
      data: techStack.managementAndOps,
      Icon: GitBranch,
    },
  ];

  return (
    <section id="stack" className="relative">
      <div className="max-w-2xl">
        {/* Section Header */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-gold"
        >
          <Layers className="h-3.5 w-3.5" strokeWidth={1.25} aria-hidden="true" />
          Capacidades Técnicas
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-5 font-serif text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Stack Tecnológico
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-[#a1a1aa] sm:text-base"
        >
          Herramientas troncales aplicadas al desarrollo de software, modelado de
          datos y flujos agénticos con IA.
        </motion.p>
      </div>

      {/* Lista plana separada por líneas doradas */}
      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 border-t border-gold/30"
      >
        {categories.map(({ key, data, Icon }) => (
          <motion.li
            key={key}
            variants={itemVariants}
            className="group border-b border-gold/30 py-8 sm:py-10"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-8">
              <span className="sm:col-span-1">
                <Icon
                  className="h-5 w-5 text-gold transition-transform duration-300 ease-out group-hover:translate-x-1"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
              </span>

              <div className="sm:col-span-4">
                <h3 className="font-serif text-2xl font-light tracking-tight text-white">
                  {data.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#a1a1aa]">
                  {data.description}
                </p>
              </div>

              <p className="font-serif text-lg font-light leading-relaxed text-white/85 sm:col-span-7">
                {data.skills.join("  /  ")}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default TechStack;
