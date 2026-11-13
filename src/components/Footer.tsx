"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Github, ArrowUp } from "lucide-react";

export function Footer() {
  const { profile, contact } = portfolioData;
  const githubUrl =
    contact.socialLinks.find((social) => social.platform === "github")?.url ??
    "https://github.com/ALucrecia-Pagano";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="relative border-t border-gold/20 bg-[#0a0a0a] py-12"
    >
      <div className="flex flex-col items-center justify-between gap-8 text-[11px] text-[#a1a1aa] sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg font-light text-white">
            {profile.name}
          </span>
          <span aria-hidden="true" className="text-gold/60">
            /
          </span>
          <span>{profile.location}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {/* Correo electrónico visible y clickeable */}
          <a
            href="mailto:amandapagano05@gmail.com"
            className="text-[#a1a1aa] transition-colors duration-300 hover:text-gold focus:text-gold focus:outline-none"
          >
            Email
          </a>

          <a
            href="https://wa.me/5492617618692"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1aa] transition-colors duration-300 hover:text-gold focus:text-gold focus:outline-none"
          >
            WhatsApp
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#a1a1aa] transition-colors duration-300 hover:text-gold focus:text-gold focus:outline-none"
          >
            <Github className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
            GitHub
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/20 text-[#a1a1aa] transition-colors duration-300 hover:border-gold/60 hover:text-gold focus:border-gold/60 focus:text-gold focus:outline-none"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
