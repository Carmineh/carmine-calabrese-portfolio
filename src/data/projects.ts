export interface Project {
  title: string;
  subtitleEn?: string;
  subtitleIt?: string;
  descriptionEn: string;
  descriptionIt: string;
  category: 'academic' | 'personal' | 'minecraft';
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  curseforgeUrl?: string;
  modrinthUrl?: string;
  paperUrl?: string;
  featured?: boolean;
  highlight?: string;
  stats?: string; // es. "4,000+ Downloads", "Published at IEEE SANER '26"
}

// Order matters: academic projects first (priority), then personal ones, then the Manny Minecraft mods.
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

  // ==========================================
  // MANNY MINECRAFT (github.com/Manny-Minecraft)
  // ==========================================
  {
    title: "ModSmith",
    subtitleEn: "AI agent skill for Minecraft mod development",
    subtitleIt: "Skill per agenti AI per sviluppare mod Minecraft",
    descriptionEn:
      "A skill for AI coding agents (Claude Code, Codex) that guides Minecraft Java mod development from idea to playable mod on NeoForge, Fabric and Forge. Its commands plan, scaffold, audit, fix and port mods, checking APIs against the real classes in the Gradle cache instead of guessing, with backups before every change.",
    descriptionIt:
      "Una skill per agenti AI di programmazione (Claude Code, Codex) che guida lo sviluppo di mod Minecraft Java, dall'idea alla mod giocabile, su NeoForge, Fabric e Forge. I suoi comandi pianificano, creano, analizzano, correggono e portano le mod su altre versioni, verificando le API sulle classi reali della cache di Gradle invece di tirare a indovinare, con un backup prima di ogni modifica.",
    category: "minecraft",
    technologies: ["JavaScript", "Node.js", "Claude Code", "Codex", "NeoForge", "Fabric"],
    repoUrl: "https://github.com/Manny-Minecraft/ModSmith",
    highlight: "AI Tooling",
    featured: false,
  },
  {
    title: "Create: Mob Grinding",
    subtitleEn: "Create addon for NeoForge 1.21.1",
    subtitleIt: "Addon per Create su NeoForge 1.21.1",
    descriptionEn:
      "A NeoForge addon for the Create mod that turns mob farming into kinetic machinery: extract souls from vanilla spawners, then power a Rotational Mob Spawner and Grinder with rotational force. Mobs are split into five tiers, with built-in support for Ars Nouveau, Twilight Forest and The Aether, and other mods via datapacks or KubeJS.",
    descriptionIt:
      "Un addon NeoForge per la mod Create che trasforma le farm di mob in macchinari cinetici: si estraggono le anime dagli spawner vanilla e si alimentano un Rotational Mob Spawner e un Grinder con la forza rotazionale. I mob sono divisi in cinque livelli, con supporto integrato per Ars Nouveau, Twilight Forest e The Aether, e per altre mod tramite datapack o KubeJS.",
    category: "minecraft",
    technologies: ["Java", "NeoForge", "Create", "Gradle", "Datapacks"],
    repoUrl: "https://github.com/Manny-Minecraft/CreateMobGrinding",
    curseforgeUrl: "https://www.curseforge.com/minecraft/mc-mods/create-mob-grinding",
    modrinthUrl: "https://modrinth.com/mod/create-mob-grinding",
    highlight: "Open Source Mod",
    stats: "4,000+ Downloads",
    featured: true,
  },
  {
    title: "Productive Cows",
    subtitleEn: "Data-driven resource farming for NeoForge 1.21.1",
    subtitleIt: "Farming di risorse data-driven per NeoForge 1.21.1",
    descriptionEn:
      "A data-driven NeoForge mod for automating resource gathering with cows: breed custom material cows, milk them in Cow Cages and process the result into resources. New cows are added with a JSON file or a KubeJS script, without touching the code, and the mod is built to work alongside Create, Mekanism and the Thermal Series.",
    descriptionIt:
      "Una mod NeoForge data-driven per automatizzare la raccolta di risorse con le mucche: si allevano mucche di materiali diversi, si mungono nelle Cow Cage e si trasforma il risultato in risorse. Nuove mucche si aggiungono con un file JSON o uno script KubeJS, senza toccare il codice, e la mod è pensata per funzionare con Create, Mekanism e la serie Thermal.",
    category: "minecraft",
    technologies: ["Java", "NeoForge", "KubeJS", "JSON", "Gradle"],
    repoUrl: "https://github.com/Manny-Minecraft/Productive-Cows",
    curseforgeUrl: "https://www.curseforge.com/minecraft/mc-mods/productive-cows",
    modrinthUrl: "https://modrinth.com/mod/productive-cows",
    highlight: "NeoForge Mod",
    featured: false,
  }
];
