"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const HERO_IMAGE = "/foto-perfil.jpg";

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(imageRef, { amount: 0.5 });

  return (
    <section className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
      {/* Lado izquierdo — Texto */}
      <div className="flex flex-col items-start lg:col-span-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-gold"
        >
          I AM AMANDA PAGANO —
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-serif text-5xl font-light leading-[0.95] tracking-tight text-fg sm:text-7xl xl:text-8xl"
        >
          Full Stack
          <br />
          Developer
        </motion.h1>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          href="#contacto"
          className="group mt-12 inline-flex items-center gap-3 border-b border-gold/40 pb-3 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-fg transition-colors duration-300 ease-out hover:border-gold hover:text-gold focus:border-gold focus:text-gold focus:outline-none"
        >
          Contáctame
          <span
            aria-hidden="true"
            className="inline-block h-px w-6 bg-gold transition-all duration-300 ease-out group-hover:w-9"
          />
        </motion.a>
      </div>

      {/* Lado derecho — Imagen */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="group relative mx-auto w-full max-w-md lg:col-span-6 lg:max-w-none"
      >
        <div
          ref={imageRef}
          className="relative aspect-[3/4] w-full overflow-hidden bg-surface"
        >
          <Image
            src={HERO_IMAGE}
            alt="Amanda Pagano programando con múltiples monitores"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className={cn(
              "object-cover grayscale transition-[filter,transform] duration-[900ms] ease-out group-hover:scale-[1.03] group-hover:grayscale-0",
              isInView && "max-lg:grayscale-0"
            )}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
