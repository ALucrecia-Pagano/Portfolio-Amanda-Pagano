"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { FolderGit2 } from "lucide-react";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="proyectos" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Trabajo Destacado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Proyectos &amp; Soluciones
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
            Aplicaciones en producción, proyectos integradores de ingeniería y prototipos interactivos.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.featured && idx === 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;
