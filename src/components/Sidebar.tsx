"use client";

import React from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "About Me", href: "#sobre-mi" },
  { name: "Services", href: "#servicios" },
  { name: "Portfolio", href: "#proyectos" },
  { name: "Contact", href: "#contacto" },
] as const;

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Logo() {
  return (
    <a
      href="#"
      aria-label="Amanda Pagano — Inicio"
      className="group flex items-center gap-3 text-white"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-500 ease-out group-hover:rotate-[-4deg]"
      >
        <path
          d="M20 5 L35 35 H28.4 L25.2 27.5 H14.8 L11.6 35 H5 L20 5 Z M20 16.5 L16.6 22.6 H23.4 L20 16.5 Z"
          fill="currentColor"
        />
      </svg>
      <span className="text-lg font-light tracking-[0.28em] uppercase text-white">
        Amanda
      </span>
    </a>
  );
}

function NavLink({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <motion.li variants={itemVariants}>
      <a
        href={href}
        className="group relative inline-flex flex-col py-1 text-[#a1a1aa] transition-colors duration-300 ease-out hover:text-white"
      >
        <span className="text-sm font-medium tracking-wide">{name}</span>
        <span
          aria-hidden="true"
          className="mt-2 block h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
      </a>
    </motion.li>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[15%] flex-col justify-between border-r border-white/[0.06] bg-[#0a0a0a] px-10 py-14 md:flex">
      <div className="flex flex-col gap-20">
        <Logo />

        <motion.nav
          aria-label="Navegación principal"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="flex flex-col gap-9">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.name} name={link.name} href={link.href} />
            ))}
          </ul>
        </motion.nav>
      </div>

      <p className="text-[11px] font-light uppercase tracking-[0.3em] text-[#a1a1aa]/60">
        Portfolio
      </p>
    </aside>
  );
}

export function MobileNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-white/[0.06] bg-[#0a0a0a]/90 px-6 py-4 backdrop-blur-md md:hidden">
      <Logo />
      <nav aria-label="Navegación principal">
        <ul className="flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-xs font-medium text-[#a1a1aa] transition-colors duration-300 hover:text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Sidebar;
