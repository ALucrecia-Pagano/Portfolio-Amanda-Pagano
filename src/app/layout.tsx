import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Sidebar, MobileNav } from "@/components/Sidebar";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    "Portafolio profesional de Amanda Pagano. Desarrolladora Full Stack especializada en Java, TypeScript, SQL y flujos de trabajo asistidos con IA. Estudiante avanzada UTN FRM con más de 2 años de experiencia en gestión de e-commerce en Romana Deco.",
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
    <html lang="es" className={`scroll-smooth dark ${serif.variable} ${sans.variable}`}>
      <body className="bg-[#0a0a0a] font-sans text-white antialiased selection:bg-gold/25 selection:text-white">
        <MobileNav />
        <Sidebar />
        <main className="min-h-screen w-full bg-[#0a0a0a] px-6 py-24 sm:px-10 lg:ml-60 lg:w-[calc(100%-15rem)] lg:px-16 lg:py-28 xl:px-24">
          {children}
        </main>
      </body>
    </html>
  );
}
