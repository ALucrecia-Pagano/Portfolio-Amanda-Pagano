import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://alucrecia-pagano.vercel.app"),
  title: {
    default: "Amanda Pagano | Desarrolladora Full Stack",
    template: "%s | Amanda Pagano",
  },
  description:
    "Portfolio profesional de Amanda Pagano. Desarrolladora Full Stack especializada en Java, TypeScript, SQL y flujos de trabajo asistidos con IA. Estudiante avanzada UTN FRM con más de 2 años de experiencia en gestión de e-commerce en Romana Deco.",
  keywords: [
    "Amanda Pagano",
    "Desarrolladora Full Stack",
    "Full Stack Developer",
    "Java",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "UTN Mendoza",
    "SQL",
    "Romana Deco",
    "Portfolio Developer",
  ],
  authors: [{ name: "Amanda Pagano", url: "https://github.com/ALucrecia-Pagano" }],
  creator: "Amanda Pagano",
  publisher: "Amanda Pagano",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://alucrecia-pagano.vercel.app",
    title: "Amanda Pagano | Desarrolladora Full Stack & Gestión Digital",
    description:
      "Desarrollo de software en Java, TypeScript, bases de datos relacionales y flujos de productividad con IA.",
    siteName: "Amanda Pagano Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanda Pagano | Desarrolladora Full Stack",
    description:
      "Estudiante avanzada UTN FRM · Desarrolladora Full Stack (Java, TypeScript, SQL, IA).",
    creator: "@ALucrecia_Pagano",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <body className="bg-[#0a0a0c] font-sans text-zinc-100 antialiased selection:bg-emerald-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
