"use client";

import React from "react";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contacto" className="relative">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Encabezado */}
        <div className="lg:col-span-5">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium uppercase tracking-[0.42em] text-[#a1a1aa]"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Let&apos;s Build Something
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 max-w-md text-base leading-relaxed text-[#a1a1aa]"
          >
            ¿Tenés un proyecto en mente o buscás sumar a alguien a tu equipo?
            Escribime y lo conversamos.
          </motion.p>
        </div>

        {/* Llamado directo al correo */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center lg:col-span-6 lg:col-start-7"
        >
          <a
            href="mailto:amandapagano05@gmail.com"
            className="inline-flex items-center border border-white/40 px-8 py-4 text-xs font-medium uppercase tracking-widest text-white transition-colors duration-300 ease-out hover:bg-white hover:text-[#0a0a0a]"
          >
            Send Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
