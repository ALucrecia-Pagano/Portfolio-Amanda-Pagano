"use client";

import React, { useState } from "react";
import { portfolioData, ProjectCategory } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { FolderGit2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FilterOption = "all" | ProjectCategory;

interface FilterTab {
  id: FilterOption;
  label: string;
}

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

  const filterTabs: FilterTab[] = [
    { id: "all", label: "Todos" },
    { id: "fullstack", label: "Full Stack" },
    { id: "backend", label: "Backend & SQL" },
    { id: "frontend", label: "Frontend & Prototipos" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "frontend") {
      return project.category === "frontend" || project.category === "ecommerce";
    }
    return project.category === activeFilter;
  });

  return (
    <section id="proyectos" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Trabajo Destacado</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Proyectos &amp; Soluciones
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
              Aplicaciones en producción, sistemas de gestión y prototipos interactivos.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#111116] border border-white/[0.08] backdrop-blur-md">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectFilter"
                      className="absolute inset-0 rounded-xl bg-white/[0.08] border border-white/[0.12]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid with Framer Motion AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className={activeFilter === "all" && project.featured && idx === 0 ? "md:col-span-2" : "col-span-1"}
              >
                <ProjectCard
                  project={project}
                  featured={activeFilter === "all" && project.featured && idx === 0}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
