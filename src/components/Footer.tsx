"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, ArrowUp, Copy, Check } from "lucide-react";

export function Footer() {
  const { profile, contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contacto" className="relative border-t border-white/[0.08] bg-[#0a0a0c] pt-20 pb-12 overflow-hidden">
      {/* Glow de acento en el footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-emerald-500/5 blur-[120px] rounded-full"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* Contact Hero Bento Box */}
        <div className="rounded-3xl bg-[#111116] border border-white/[0.08] p-8 sm:p-12 relative overflow-hidden backdrop-blur-xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
          />

          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              ¿Iniciamos una conversación técnica?
            </span>
            
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Construyamos software que impulse resultados reales.
            </h3>
            
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Disponible para sumarme a equipos de desarrollo Full Stack, Backend o implementación digital. Abierta a propuestas remotas o en Mendoza, Argentina.
            </p>

            {/* Email quick action */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 transition-all duration-200 shadow-lg shadow-emerald-500/20"
              >
                <Mail className="w-4 h-4" />
                <span>Escríbeme un correo</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-sm font-medium hover:border-white/[0.2] hover:text-white transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">¡Copiado al portapapeles!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>Copiar {contact.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Socials & Rights */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/[0.05] text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="text-zinc-400 font-medium">{profile.name}</span>
            <span>•</span>
            <span>{profile.location}</span>
            <span>•</span>
            <span className="text-emerald-500/80">UTN FRM</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {contact.socialLinks.map((social) => {
              const Icon =
                social.platform === "github"
                  ? Github
                  : social.platform === "linkedin"
                  ? Linkedin
                  : Mail;

              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span className="capitalize">{social.label}</span>
                </a>
              );
            })}

            <button
              onClick={scrollToTop}
              aria-label="Volver arriba"
              className="ml-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-[#111116] text-zinc-400 hover:text-white hover:border-white/[0.2] transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
