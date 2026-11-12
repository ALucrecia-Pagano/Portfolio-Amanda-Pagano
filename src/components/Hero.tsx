"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HERO_IMAGE = "/foto-perfil.jpg";

export function Hero() {
  return (
    <section className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
      {/* Lado izquierdo — Texto */}
      <div className="flex flex-col items-start lg:col-span-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.42em] text-[#a1a1aa]"
        >
          I Am Amanda Pagano —
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl xl:text-8xl"
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
          className="group mt-12 inline-flex items-center gap-3 border border-white/40 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 ease-out hover:bg-white hover:text-[#0a0a0a]"
        >
          Contact Me
          <span
            aria-hidden="true"
            className="inline-block h-px w-6 bg-white transition-all duration-300 ease-out group-hover:w-9 group-hover:bg-[#0a0a0a]"
          />
        </motion.a>
      </div>

      {/* Lado derecho — Imagen */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="group relative lg:col-span-6"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem] rounded-tr-[7rem] bg-[#111111]">
          <Image
            src={HERO_IMAGE}
            alt="Amanda Pagano programando con múltiples monitores"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover grayscale transition-[filter,transform] duration-[900ms] ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
