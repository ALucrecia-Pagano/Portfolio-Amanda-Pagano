"use client";

import React, { useRef, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Code2,
  Database,
  Sparkles,
  GitBranch,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

// Casting para evitar conflicto de tipos entre React MouseEvent y Framer Motion
const MotionDiv = motion.div as any;

export function TechStack() {
  const { techStack } = portfolioData;

  const categories = [
    {
      key: "languages",
      data: techStack.languages,
      icon: Code2,
      accentColor: "violet",
      badgeColor: "text-violet-400 bg-violet-500/10 border-violet-400/20",
    },
    {
      key: "databases",
      data: techStack.databases,
      icon: Database,
      accentColor: "blue",
      badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      key: "ai",
      data: techStack.aiAndProductivity,
      icon: Sparkles,
      accentColor: "purple",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      key: "management",
      data: techStack.managementAndOps,
      icon: GitBranch,
      accentColor: "violet",
      badgeColor: "text-violet-400 bg-violet-500/10 border-violet-400/20",
    },
  ];

  return (
    <section id="stack" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Capacidades Técnicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Stack Tecnológico
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
            Herramientas troncales aplicadas al desarrollo de software, modelado de datos y flujos agénticos con IA.
          </p>
        </div>

        {/* Minimalist Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <TechCategoryCard
                key={cat.key}
                category={cat}
                index={idx}
                Icon={Icon}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

interface TechCategoryCardProps {
  category: {
    key: string;
    data: {
      title: string;
      description: string;
      skills: readonly string[];
    };
    badgeColor: string;
  };
  index: number;
  Icon: React.ElementType;
}

function TechCategoryCard({ category, index, Icon }: TechCategoryCardProps) {
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

  return (
    <MotionDiv
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#111116] border border-white/[0.08] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.18] hover:-translate-y-1 shadow-lg shadow-black/30"
    >
      {/* Top subtle glow line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
      />

      {/* Dynamic Cursor Spotlight */}
      {isHovered && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.09), transparent 75%)`,
          }}
        />
      )}

      <div className="relative z-10 space-y-4">
        {/* Header Icon + Title */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.08] text-zinc-200 group-hover:border-violet-400/40 group-hover:text-violet-400 transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
              {category.data.title}
            </h3>
          </div>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed min-h-[32px]">
          {category.data.description}
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {category.data.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-zinc-300 hover:border-white/[0.15] hover:text-white transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
}

export default TechStack;
