export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  status: string;
  completionEta: string;
  details: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  statusBadge: string;
  headline: string;
  bio: {
    short: string;
    full: string;
  };
  education: Education;
  experience: Experience[];
}

export type ProjectCategory = "fullstack" | "backend" | "frontend" | "ecommerce";
export type ProjectStatusType = "production" | "demo" | "backend-completed" | "prototype";

export interface ProjectLinks {
  live?: string;
  github?: string;
  demo?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  technologies: readonly string[];
  category: ProjectCategory;
  status: string;
  statusType: ProjectStatusType;
  featured: boolean;
  links: ProjectLinks;
}

export interface TechStackCategory {
  title: string;
  description: string;
  skills: readonly string[];
}

export interface TechStack {
  languages: TechStackCategory;
  databases: TechStackCategory;
  aiAndProductivity: TechStackCategory;
  managementAndOps: TechStackCategory;
}

export interface SocialLink {
  platform: "email" | "github" | "linkedin";
  label: string;
  url: string;
  username: string;
  isPrimary?: boolean;
}

export interface ContactInfo {
  email: string;
  availability: string;
  preferredContact: "email" | "linkedin";
  socialLinks: readonly SocialLink[];
}

export interface PortfolioData {
  profile: Profile;
  projects: readonly Project[];
  techStack: TechStack;
  contact: ContactInfo;
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Amanda Pagano",
    title: "Desarrolladora Full Stack",
    location: "Mendoza, Argentina",
    statusBadge: "Graduación en 6 meses · UTN FRM",
    headline: "Desarrolladora Full Stack & Gestión Operativa Digital",
    bio: {
      short:
        "Estudiante avanzada en la UTN (próxima a graduarse en 6 meses) con experiencia real en gestión de e-commerce en Romana Deco. Combino desarrollo robusto en Java, JavaScript y TypeScript con bases de datos relacionales y flujos de productividad potenciados por IA.",
      full:
        "Estudiante avanzada de la Universidad Tecnológica Nacional (UTN - FRM) con fecha estimada de graduación en 6 meses. Cuento con más de dos años de trayectoria en Romana Deco liderando administración de catálogo, control de stock y operaciones en Tiendanube. Esta experiencia en el mundo comercial real me otorga una perspectiva única para concebir soluciones técnicas eficientes, combinando sólidos fundamentos de ingeniería de software (Java, POO, modelado relacional y frontend moderno) con herramientas agénticas y de inteligencia artificial de última generación.",
    },
    education: {
      institution: "Universidad Tecnológica Nacional (UTN FRM)",
      degree: "Tecnicatura Universitaria en Programación",
      status: "Cursando último tramo",
      completionEta: "Graduación estimada en 6 meses",
      details: "Formación integral con foco en Algoritmos, POO en Java, Estructuras de Datos, Modelado Relacional (SQL) y Arquitecturas de Software.",
    },
    experience: [
      {
        role: "Gestión Operativa de E-Commerce & Administración Digital",
        company: "Romana Deco",
        period: "2023 - Presente (+2 años)",
        description:
          "Administración integral de plataforma e-commerce en Tiendanube, control de catálogo, inventario, logística y soporte de procesos comerciales.",
        highlights: [
          "Optimización de flujos de carga y actualización de inventario para más de cientos de productos activos.",
          "Resolución de incidencias operativas y coordinación de entregas comerciales.",
          "Implementación de automatizaciones y ordenamiento de datos comerciales para la toma de decisiones.",
        ],
      },
    ],
  },

  projects: [
    {
      id: "luti",
      title: "Luti",
      subtitle: "Plataforma de gestión operativa de personal y comprobantes",
      description:
        "Solución digital diseñada para agilizar el registro de jornadas laborales, control de asistencia y carga centralizada de comprobantes para personal operativo en campo.",
      longDescription:
        "Luti nace para resolver la fricción operativa entre los equipos distribuidos y la administración. Permite digitalizar y certificar comprobantes en tiempo real, agilizando la rendición de gastos y la trazabilidad de horas.",
      technologies: ["JavaScript", "Frontend Web", "Vercel", "CSS3", "Responsive UI"],
      category: "fullstack",
      status: "Demo en producción",
      statusType: "production",
      featured: true,
      links: {
        live: "https://luti-demo.vercel.app/",
      },
    },
    {
      id: "gestion-turnos-odontologia",
      title: "Sistema de Gestión de Turnos",
      subtitle: "Integrador UTN para clínicas odontológicas",
      description:
        "Software integral para administración clínica: programación de turnos de pacientes, registro de historias odontológicas e informes de atención médica.",
      longDescription:
        "Desarrollado como proyecto integrador en la UTN aplicando principios sólidos de Programación Orientada a Objetos (POO), arquitectura modular en capas y persistencia transaccional con integridad referencial.",
      technologies: ["Java", "POO", "MySQL", "SQLite", "JDBC", "Modelado Relacional"],
      category: "backend",
      status: "Backend & DB completado",
      statusType: "backend-completed",
      featured: true,
      links: {
        github: "https://github.com/ALucrecia-Pagano",
      },
    },
    {
      id: "editorial-codex",
      title: "Editorial Codex",
      subtitle: "Prototipo frontend de catálogo literario interactivo",
      description:
        "Prototipo web responsivo enfocado en la exhibición bibliográfica y experiencia de usuario inmersiva para una editorial literaria.",
      longDescription:
        "Enfocado en la semántica HTML5, tipografía cuidada, accesibilidad y maquetación fluida mediante técnicas avanzadas de CSS Grid y Flexbox sin dependencias pesadas.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Responsive Design"],
      category: "frontend",
      status: "Prototipo interactivo",
      statusType: "prototype",
      featured: false,
      links: {
        live: "https://alucrecia-pagano.github.io/Prototipos-Frontend/editorial-codex/",
        github: "https://github.com/ALucrecia-Pagano/Prototipos-Frontend",
      },
    },
    {
      id: "foodstore-demo",
      title: "FoodStore Demo",
      subtitle: "Prototipo de e-commerce gastronómico con catálogo interactivo",
      description:
        "Interfaz web de comercio gastronómico con catálogo de productos por categorías, filtrado en tiempo real, simulación de carrito de compras y orden de pedidos.",
      longDescription:
        "Demostración de manipulación directa del DOM, gestión de estado en memoria del carrito y transiciones de interfaz orientadas al usuario móvil.",
      technologies: ["JavaScript", "CSS3", "DOM", "HTML5", "GitHub Pages"],
      category: "ecommerce",
      status: "Prototipo interactivo",
      statusType: "prototype",
      featured: false,
      links: {
        live: "https://alucrecia-pagano.github.io/Prototipos-Frontend/foodstore-demo/",
        github: "https://github.com/ALucrecia-Pagano/Prototipos-Frontend",
      },
    },
  ] as const,

  techStack: {
    languages: {
      title: "Lenguajes",
      description: "Lenguajes troncales para desarrollo de sistemas y aplicaciones web",
      skills: ["Java", "JavaScript", "TypeScript", "Python"],
    },
    databases: {
      title: "Bases de Datos",
      description: "Persistencia relacional y no relacional con modelado consistente",
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
    },
    aiAndProductivity: {
      title: "IA y Dev Productivity",
      description: "Aceleración agéntica del ciclo de vida del software y depuración asistida",
      skills: [
        "GitHub Copilot",
        "Claude Code",
        "Agentes de IA",
        "Debugging asistido",
        "Prompt Engineering para código",
      ],
    },
    managementAndOps: {
      title: "Gestión y Herramientas",
      description: "Control de versiones, administración de plataformas y entornos de trabajo",
      skills: [
        "Git",
        "GitHub",
        "Tiendanube",
        "VS Code",
        "IntelliJ IDEA",
      ],
    },
  },

  contact: {
    email: "amandapagano05@gmail.com",
    availability: "Disponible para posiciones Junior / Trainee Full Stack y soporte funcional",
    preferredContact: "email",
    socialLinks: [
      {
        platform: "email",
        label: "Correo Electrónico",
        url: "mailto:amandapagano05@gmail.com",
        username: "amandapagano05@gmail.com",
        isPrimary: true,
      },
      {
        platform: "github",
        label: "GitHub",
        url: "https://github.com/ALucrecia-Pagano",
        username: "ALucrecia-Pagano",
        isPrimary: true,
      },
      {
        platform: "linkedin",
        label: "LinkedIn",
        url: "https://linkedin.com/in/amanda-pagano",
        username: "Amanda Pagano",
        isPrimary: false,
      },
    ],
  },
};

export default portfolioData;
