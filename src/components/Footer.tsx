"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Github, Mail, MessageCircle, ArrowUp } from "lucide-react";

export function Footer() {
  const { profile, contact } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="relative border-t border-white/[0.06] bg-[#0a0a0a] py-12"
    >
      <div className="flex flex-col items-center justify-between gap-6 text-xs text-[#a1a1aa] sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-medium text-white">{profile.name}</span>
          <span>•</span>
          <span>{profile.location}</span>
        </div>

        <div className="flex items-center gap-6">
          {contact.socialLinks.map((social) => {
            const Icon =
              social.platform === "github"
                ? Github
                : social.platform === "whatsapp"
                ? MessageCircle
                : Mail;

            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center gap-1.5 text-[#a1a1aa] transition-colors duration-300 hover:text-white"
              >
                <Icon className="h-4 w-4" />
                <span className="capitalize">{social.label}</span>
              </a>
            );
          })}

          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.1] text-[#a1a1aa] transition-colors duration-300 hover:border-white/40 hover:text-white"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
