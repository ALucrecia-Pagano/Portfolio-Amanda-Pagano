"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

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
      className="group flex shrink-0 items-center gap-3 text-fg"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-500 ease-out group-hover:rotate-[-4deg]"
      >
        <path
          d="M20 5 L35 35 H28.4 L25.2 27.5 H14.8 L11.6 35 H5 L20 5 Z M20 16.5 L16.6 22.6 H23.4 L20 16.5 Z"
          fill="currentColor"
        />
      </svg>
      <span className="text-lg font-light tracking-[0.28em] uppercase text-fg">
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
        className="group relative inline-flex flex-col py-1 text-muted transition-colors duration-300 ease-out hover:text-fg"
      >
        <span className="text-sm font-medium tracking-wide">{name}</span>
        <span
          aria-hidden="true"
          className="mt-2 block h-px w-full origin-left scale-x-0 bg-fg transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
      </a>
    </motion.li>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 flex-col justify-between border-r border-fg/[0.06] bg-base px-10 py-14 lg:flex">
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

      <div className="flex items-center justify-between">
        <p className="text-[11px] font-light uppercase tracking-[0.3em] text-muted/60">
          Portfolio
        </p>
        <ThemeToggle />
      </div>
    </aside>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
      else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-fg/[0.06] bg-base/90 backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-between px-6 py-4">
        <Logo />
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            className="p-2 text-muted transition-colors hover:text-fg"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            aria-label="Navegación principal"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-fg/[0.06]"
          >
            <ul className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block py-3 text-sm font-medium tracking-wide text-muted transition-colors hover:text-fg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Sidebar;
