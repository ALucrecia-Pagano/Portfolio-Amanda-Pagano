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
            className="font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-gold"
          >
            Ponte en Contacto
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-5 font-serif text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Construyamos algo juntos
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
            className="group inline-flex items-center gap-3 border-b border-gold/40 pb-3 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white transition-colors duration-300 ease-out hover:border-gold hover:text-gold focus:border-gold focus:text-gold focus:outline-none"
          >
            Enviar mensaje
            <span
              aria-hidden="true"
              className="inline-block h-px w-6 bg-gold transition-all duration-300 ease-out group-hover:w-9"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
