"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Casting para evitar conflicto de tipos entre React MouseEvent y Framer Motion
const MotionDiv = motion.div as any;

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "violet" | "purple" | "neutral";
  hoverEffect?: boolean;
}

export function BentoCard({
  children,
  className,
  glowColor = "violet",
  hoverEffect = true,
  ...props
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowStyles = {
    violet: "rgba(139, 92, 246, 0.12)",
    purple: "rgba(139, 92, 246, 0.12)",
    neutral: "rgba(255, 255, 255, 0.08)",
  };

  return (
    <MotionDiv
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={hoverEffect ? { y: -3 } : undefined}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-3xl",
        "bg-[#111116] border border-white/[0.08]",
        "backdrop-blur-xl shadow-xl",
        "transition-colors duration-300",
        isHovered && "border-white/[0.18]",
        className
      )}
      {...props}
    >
      {/* Top subtle highlight line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent"
      />

      {/* Interactive cursor spotlight effect */}
      {isHovered && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${cursorPos.x}px ${cursorPos.y}px, ${glowStyles[glowColor]}, transparent 75%)`,
          }}
        />
      )}

      {/* Internal Content Container */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </MotionDiv>
  );
}

export default BentoCard;
