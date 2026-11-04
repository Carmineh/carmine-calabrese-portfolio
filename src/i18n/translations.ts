export type Locale = 'en' | 'it';

export const dateLocales: Record<Locale, string> = { en: 'en-US', it: 'it-IT' };

export const localePrefix = (lang: Locale) => (lang === 'it' ? '/it' : '');

export const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      articles: 'Articles',
      resume: 'Resume',
      downloadCv: 'Download CV',
    },
    hero: {
      badge: "M.Sc. in Computer Science • Software Engineering",
      role: "Software Engineer & Security Enthusiast",
      bio: "Master's graduate in Computer Science specializing in Software Engineering & IT Management from the University of Salerno. Co-author of an IEEE SANER 2026 research paper. Passionate about software reliability, systems architecture, and actively expanding into Penetration Testing & Offensive Security.",
      ctaProjects: 'View Projects',
      ctaCv: 'Download CV (PDF)',
      ctaContact: 'Get in Touch',
    },
    skillsSection: {
      title: 'Core Technologies',
      subtitle: 'Primary programming languages, tools and environments I work with daily',
      viewAll: 'Explore All Skills & Competencies',
    },
    projectsSection: {
      featuredTitle: 'Featured Projects',
      featuredSubtitle: 'Selected research, engineering, and personal creations',
      viewAll: 'View All Projects',
      academic: 'Academic & Research',
      personal: 'Personal & Indie Projects',
      downloads: 'Downloads',
      visitProject: 'Visit Project',
      viewCode: 'Source Code',
    },
    articlesSection: {
      title: 'Articles & Write-ups',
      subtitle: 'Technical notes, software engineering deep dives, and penetration testing walk-throughs',
      viewAll: 'Browse All Articles',
      readArticle: 'Read article',
      backToAll: 'Back to all articles',
      exploreMore: 'Explore more articles',
      writtenBy: 'Written by Carmine Calabrese',
      copy: 'Copy',
      copied: 'Copied!',
      updated: 'Updated',
      onlyItalian: 'This article is written in Italian.',
    },
    footer: {
      rights: 'Carmine Calabrese. Built with Astro & Tailwind CSS, hosted on Cloudflare Pages.',
      builtWith: 'Built with',
      tagline: 'Software engineer with a passion for security, clean code and building things, from research tools to indie games.',
    },
  },
  it: {
    nav: {
      home: 'Home',
      projects: 'Progetti',
      skills: 'Competenze',
      articles: 'Articoli',
      resume: 'Curriculum',
      downloadCv: 'Scarica CV',
    },
    hero: {
      badge: "Laurea Magistrale in Informatica • Software Engineering",
      role: "Software Engineer & Appassionato di Cybersecurity",
      bio: "Laureando Magistrale in Informatica con specializzazione in Software Engineering & IT Management presso l'Università degli Studi di Salerno. Co-autore di un articolo di ricerca a IEEE SANER 2026. Focus su affidabilità del software, architetture di sistema e studio attivo verso il Penetration Testing e la sicurezza offensiva.",
      ctaProjects: 'Guarda i Progetti',
      ctaCv: 'Scarica CV (PDF)',
      ctaContact: 'Contattami',
    },
    skillsSection: {
      title: 'Tecnologie Fondamentali',
      subtitle: 'Linguaggi di programmazione, strumenti e ambienti con cui lavoro quotidianamente',
      viewAll: 'Esplora Tutte le Competenze',
    },
    projectsSection: {
      featuredTitle: 'Progetti in Evidenza',
      featuredSubtitle: 'Selezione di progetti di ricerca, software engineering e creazioni personali',
      viewAll: 'Tutti i Progetti',
      academic: 'Accademici & Ricerca',
      personal: 'Personali & Indie Projects',
      downloads: 'Download',
      visitProject: 'Visita Progetto',
      viewCode: 'Codice Sorgente',
    },
    articlesSection: {
      title: 'Articoli & Write-up',
      subtitle: 'Approfondimenti di software engineering, note tecniche e write-up di penetration testing',
      viewAll: 'Tutti gli Articoli',
      readArticle: 'Leggi articolo',
      backToAll: 'Torna a tutti gli articoli',
      exploreMore: 'Esplora altri articoli',
      writtenBy: 'Scritto da Carmine Calabrese',
      copy: 'Copia',
      copied: 'Copiato!',
      updated: 'Aggiornato',
      onlyItalian: 'Questo articolo è scritto in italiano.',
    },
    footer: {
      rights: 'Carmine Calabrese. Realizzato con Astro & Tailwind CSS, ospitato su Cloudflare Pages.',
      builtWith: 'Realizzato con',
      tagline: 'Software engineer con la passione per la sicurezza, il codice pulito e il creare cose, dagli strumenti di ricerca ai giochi indie.',
    },
  },
};
