export interface Project {
  title: string;
  subtitleEn?: string;
  subtitleIt?: string;
  descriptionEn: string;
  descriptionIt: string;
  category: 'academic' | 'personal';
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  featured?: boolean;
  highlight?: string;
  stats?: string; // es. "4,000+ Downloads", "Published at IEEE SANER '26"
}

// Order matters: academic projects come first (priority), then personal ones.
export const projects: Project[] = [
  // ==========================================
  // PROGETTI ACCADEMICI & RICERCA
  // ==========================================
  {
    title: "MuSe - Mutation Testing for Smart Contracts",
    subtitleEn: "Software Maintenance & Reliability Research",
    subtitleIt: "Ricerca su Software Maintenance e Mutation Testing",
    descriptionEn:
      "Engineered a wrapper plugin for Remix IDE extending the MuSe mutation testing tool to assess Solidity smart contract test suites. Evaluated mutation operators and test effectiveness against subtle logical bugs. Published and presented at the 2026 IEEE International Conference on Software Analysis, Evolution and Reengineering (SANER).",
    descriptionIt:
      "Sviluppo di un wrapper plugin per Remix IDE volto a estendere il tool MuSe per il mutation testing di smart contract in Solidity. Studio sull'efficacia degli operatori di mutazione per rilevare difetti logici. Pubblicato e presentato alla conferenza internazionale IEEE SANER 2026.",
    category: "academic",
    repoUrl: "https://github.com/Carmineh/MuSe-Remix-Plugin",
    technologies: ["Solidity", "Remix IDE", "Mutation Testing", "Software Maintenance", "JavaScript"],
    highlight: "IEEE SANER 2026",
    stats: "Conference Paper",
    featured: true,
  },
  {
    title: "DAPA: Decentralized Anonymous Authentication",
    subtitleEn: "Master's Thesis in Connected Vehicles Privacy",
    subtitleIt: "Tesi Magistrale su Privacy nei Veicoli Connessi",
    descriptionEn:
      "Designed and experimentally benchmarked a privacy-preserving authentication framework for vehicular networks combining Blockchain and Zero-Knowledge Proofs (ZKP), providing cryptographic anonymity while enforcing accountable revocation.",
    descriptionIt:
      "Progettazione e valutazione sperimentale di un'architettura decentralizzata per veicoli connessi che unisce Blockchain e Zero-Knowledge Proofs (ZKP), garantendo privacy computazionale e meccanismi crittografici di accountability.",
    category: "academic",
    technologies: ["Blockchain", "Zero-Knowledge Proofs (ZKP)", "Cryptography", "Python", "Smart Contracts"],
    highlight: "Master's Thesis",
    stats: "M.Sc. Thesis Project",
    featured: true,
  },
  {
    title: "EcoHouses - Agile Team Project",
    subtitleEn: "Full-Stack Architecture & Project Management",
    subtitleIt: "Architettura Full-Stack e Project Management",
    descriptionEn:
      "Served as Project Manager guiding a 7-student team through full Agile/Scrum cycles, handling sprint planning, backlog grooming, milestone tracking, and contributing hands-on to the system architecture and React/PostgreSQL implementation.",
    descriptionIt:
      "Project Manager di un team di 7 studenti in ambiente Agile/Scrum: gestione di sprint planning, backlog grooming, tracciamento milestone e contribuzione diretta all'architettura software e allo sviluppo con React e PostgreSQL.",
    category: "academic",
    technologies: ["Scrum", "Project Management", "React", "PostgreSQL", "Git", "REST APIs"],
    highlight: "Project Manager",
    stats: "Team of 7",
    featured: false,
  },
  {
    title: "Deathnote 1 - Vulnerability Assessment & Pentest",
    subtitleEn: "Offensive Security Assessment",
    subtitleIt: "Laboratorio di Sicurezza Offensiva",
    descriptionEn:
      "Complete penetration testing assessment of the VulnHub machine Deathnote 1: port scanning and web reconnaissance (Nmap, WPScan, Nessus, OWASP ZAP), targeted SSH credential exploitation, and privilege escalation via sudo misconfigurations and LinPEAS, culminating in a root reverse shell.",
    descriptionIt:
      "Penetration test completo della macchina VulnHub Deathnote 1: scansione ed enumerazione (Nmap, WPScan, Nessus, OWASP ZAP), exploitation credenziali SSH e privilege escalation tramite misconfigurazioni sudo e LinPEAS, fino a una reverse shell root.",
    category: "academic",
    repoUrl: "https://github.com/Carmineh/Deathnote1_PenTest",
    technologies: ["Kali Linux", "Nmap", "Nessus", "OWASP ZAP", "WPScan", "LinPEAS", "Bash"],
    highlight: "VulnHub Lab",
    featured: false,
  },
  {
    title: "Nebula Level 14 - Secure Programming & Reverse Engineering",
    subtitleEn: "Exploit Education CTF Challenge",
    subtitleIt: "Sfida CTF su Exploit Education",
    descriptionEn:
      "Completed Level 14 of Nebula CTF on Linux. Executed black-box reverse engineering of a position-dependent encryption algorithm, implemented an automated Python decryptor to recover tokens, and achieved privilege escalation.",
    descriptionIt:
      "Risoluzione del livello 14 del CTF Nebula: reverse engineering a scatola nera di un algoritmo di cifratura basato su offset, sviluppo di un decryptor automatico in Python e privilege escalation su Linux.",
    category: "academic",
    repoUrl: "https://github.com/Carmineh/Nebula_14",
    technologies: ["C", "Linux", "Reverse Engineering", "Python", "Binary Security"],
    highlight: "Binary CTF",
    featured: false,
  },

  // ==========================================
  // PROGETTI PERSONALI & INDIE
  // ==========================================
  {
    title: "Go Fishin!",
    subtitleEn: "Incremental 2D Indie Fishing Game (Unity / C#)",
    subtitleIt: "Gioco incrementale 2D sviluppato in Unity / C#",
    descriptionEn:
      "A fast-paced incremental 2D fishing game developed in Unity (C#) published under the Mannyverse indie brand. Features 6 diverse islands, 144 unique fish species, dynamic catch behaviors, an upgrade skill tree, and crew recruitment. Playable demo available on itch.io with full release planned for Steam.",
    descriptionIt:
      "Videogioco incrementale di pesca 2D sviluppato in Unity (C#) e pubblicato con il brand indie Mannyverse. Include 6 isole esplorabili, 144 specie uniche di pesci con comportamenti differenti, albero delle abilità/upgrade e assunzione dell'equipaggio. Demo disponibile su itch.io con rilascio previsto su Steam.",
    category: "personal",
    technologies: ["Unity", "C#", "Game Design", "Pixel Art", "itch.io", "Steam"],
    liveUrl: "https://mannyverse.itch.io/go-fishin",
    highlight: "Indie Game",
    stats: "Playable Demo on itch.io",
    featured: true,
  },
  {
    title: "Create: Mob Grinding",
    subtitleEn: "Minecraft Mod Addon for Create Mod",
    subtitleIt: "Mod per Minecraft (Addon per Create)",
    descriptionEn:
      "Open-source Minecraft mod built in Java expanding the popular 'Create' tech mod with automated mob grinding mechanisms and kinetic processing. Successfully downloaded and played by over 4,000+ active players in the Minecraft modding community.",
    descriptionIt:
      "Mod open-source per Minecraft sviluppata in Java, che estende la nota mod tecnologica 'Create' con meccanismi di mob grinding cinetici e automazioni. Conta oltre 4.000+ download attivi all'interno della community modding.",
    category: "personal",
    technologies: ["Java", "Minecraft Forge", "Game Modding", "OOP", "Git"],
    repoUrl: "https://github.com/Carmineh/CreateMobGrinding",
    highlight: "Open Source Mod",
    stats: "4,000+ Downloads",
    featured: true,
  }
];
