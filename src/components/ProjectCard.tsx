"use client";

import React, { useRef, useState } from "react";
import { Project } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

// Casting para evitar conflicto de tipos entre React MouseEvent y Framer Motion
const MotionDiv = motion.div as any;

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isBackendOnly = project.statusType === "backend-completed";

  return (
    <MotionDiv
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#111116] border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.18] hover:-translate-y-1 shadow-xl shadow-black/40 ${
        featured ? "md:col-span-2" : "col-span-1"
      }`}
    >
      {/* Top light reflection border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent"
      />

      {/* Dynamic Cursor Spotlight Glow */}
      {isHovered && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.12), transparent 75%)`,
          }}
        />
      )}

      {/* Header: Status badge & Category */}
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
              isBackendOnly
                ? "bg-purple-950/40 border-purple-500/30 text-purple-300"
                : "bg-violet-950/40 border-violet-400/30 text-violet-300"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isBackendOnly ? "bg-purple-400" : "bg-violet-400"
              }`}
            />
            {project.status}
          </span>

          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            {project.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-violet-400/90 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Footer: Tech chips & CTA action buttons */}
      <div className="relative z-10 mt-6 pt-5 border-t border-white/[0.06] space-y-5">
        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-zinc-300 hover:border-white/[0.12] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons: Ver Demo & Código */}
        <div className="flex items-center gap-3 pt-1">
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-400/30 hover:bg-violet-500/20 hover:border-violet-400/50 transition-all duration-200"
            >
              <span>Ver demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.02] text-zinc-500 border border-white/[0.05] cursor-not-allowed">
              <span>Demo interna</span>
            </span>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-[#16161e] text-zinc-300 border border-white/[0.08] hover:text-white hover:border-white/[0.2] hover:bg-[#1c1c28] transition-all duration-200"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Código</span>
            </a>
          )}
        </div>
      </div>
    </MotionDiv>
  );
}

export default ProjectCard;
