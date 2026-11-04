/**
 * Personal self-assessment, shown as 5 segments on the Skills page:
 *   1 = learning, 2 = familiar, 3 = comfortable, 4 = proficient, 5 = strong
 */
export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export const skillLevels: Record<SkillLevel, { en: string; it: string }> = {
  1: { en: 'Learning', it: 'In studio' },
  2: { en: 'Familiar', it: 'Base' },
  3: { en: 'Comfortable', it: 'Pratico' },
  4: { en: 'Proficient', it: 'Avanzato' },
  5: { en: 'Strong', it: 'Padronanza' },
};

export interface SkillItem {
  name: string;
  level: SkillLevel;
  /** Key from src/components/TechIcon.astro (brand logo or outline icon) */
  icon: string;
  descriptionEn?: string;
  descriptionIt?: string;
  core?: boolean; // True per mostrarla nella homepage
}

export interface SkillCategory {
  id: string;
  titleEn: string;
  titleIt: string;
  descriptionEn: string;
  descriptionIt: string;
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    titleEn: 'Programming Languages',
    titleIt: 'Linguaggi di Programmazione',
    descriptionEn: 'The languages I write most often, from university coursework to research tools and side projects.',
    descriptionIt: 'I linguaggi che uso più spesso, tra corsi universitari, strumenti di ricerca e progetti personali.',
    items: [
      { name: 'Java', level: 5, icon: 'java', core: true, descriptionEn: 'OOP design, university projects, Minecraft modding', descriptionIt: 'Progettazione OOP, progetti universitari, modding Minecraft' },
      { name: 'Python', level: 3, icon: 'python', core: true, descriptionEn: 'Scripting, automation, security tooling, research benchmarks', descriptionIt: 'Scripting, automazione, tool di sicurezza, benchmark di ricerca' },
      { name: 'C', level: 3, icon: 'c', core: true, descriptionEn: 'Low-level programming, memory, binary analysis', descriptionIt: 'Programmazione a basso livello, memoria, analisi di binari' },
      { name: 'JavaScript', level: 4, icon: 'javascript', core: true, descriptionEn: 'Web apps, Remix IDE plugin development', descriptionIt: 'Applicazioni web, sviluppo plugin per Remix IDE' },
      { name: 'C#', level: 2, icon: 'csharp', descriptionEn: 'Gameplay programming in Unity', descriptionIt: 'Programmazione gameplay in Unity' },
      { name: 'Bash', level: 2, icon: 'bash', descriptionEn: 'Shell scripting and Linux automation', descriptionIt: 'Shell scripting e automazione su Linux' },
    ],
  },
  {
    id: 'security',
    titleEn: 'Offensive Security',
    titleIt: 'Sicurezza Offensiva',
    descriptionEn: 'The field I am growing into: methodology and tools for assessing systems the way an attacker would.',
    descriptionIt: "L'ambito in cui sto crescendo: metodologia e strumenti per valutare i sistemi dal punto di vista di un attaccante.",
    items: [
      { name: 'Penetration Testing', level: 3, icon: 'bug', core: true, descriptionEn: 'Recon, exploitation, privilege escalation, reporting', descriptionIt: 'Recon, exploitation, privilege escalation, reportistica' },
      { name: 'Kali Linux', level: 3, icon: 'kali', descriptionEn: 'Daily driver for security labs', descriptionIt: 'Ambiente principale per i laboratori di sicurezza' },
      { name: 'Nmap & Nessus', level: 3, icon: 'radar', descriptionEn: 'Network discovery and vulnerability scanning', descriptionIt: 'Network discovery e vulnerability scanning' },
      { name: 'OWASP ZAP & WPScan', level: 2, icon: 'owasp', descriptionEn: 'Web application assessment', descriptionIt: 'Assessment di applicazioni web' },
      { name: 'Privilege Escalation', level: 2, icon: 'terminal', descriptionEn: 'LinPEAS, sudo misconfigurations, Linux internals', descriptionIt: 'LinPEAS, misconfigurazioni sudo, internals Linux' },
      { name: 'Reverse Engineering', level: 1, icon: 'binary', descriptionEn: 'Black-box analysis of binaries and algorithms (Nebula CTF)', descriptionIt: 'Analisi black-box di binari e algoritmi (Nebula CTF)' },
    ],
  },
  {
    id: 'devops',
    titleEn: 'DevOps & Tooling',
    titleIt: 'DevOps & Strumenti',
    descriptionEn: 'Version control, automation and reproducible environments: the groundwork for DevSecOps.',
    descriptionIt: 'Controllo di versione, automazione e ambienti riproducibili: le basi per il DevSecOps.',
    items: [
      { name: 'Git', level: 5, icon: 'git', core: true, descriptionEn: 'Branching strategies and code review', descriptionIt: 'Strategie di branching e code review' },
      { name: 'GitHub Actions & CI/CD', level: 3, icon: 'githubactions', descriptionEn: 'Automated build, test and deploy pipelines', descriptionIt: 'Pipeline automatiche di build, test e deploy' },
      { name: 'Docker', level: 3, icon: 'docker', core: true, descriptionEn: 'Containers and reproducible environments', descriptionIt: 'Container e ambienti riproducibili' },
      { name: 'Linux', level: 3, icon: 'linux', core: true, descriptionEn: 'Administration and shell on Debian-based systems', descriptionIt: 'Amministrazione e shell su sistemi Debian-based' },
    ],
  },
  {
    id: 'web-data',
    titleEn: 'Web & Databases',
    titleIt: 'Web & Database',
    descriptionEn: 'Front-end interfaces and the data layers behind them.',
    descriptionIt: 'Interfacce front-end e i livelli dati che le supportano.',
    items: [
      { name: 'HTML', level: 3, icon: 'html', descriptionEn: 'Semantic, accessible markup', descriptionIt: 'Markup semantico e accessibile' },
      { name: 'CSS', level: 3, icon: 'css', descriptionEn: 'Responsive layouts, Tailwind CSS', descriptionIt: 'Layout responsive, Tailwind CSS' },
      { name: 'REST APIs', level: 3, icon: 'plug', descriptionEn: 'Designing and consuming HTTP APIs', descriptionIt: 'Progettazione e consumo di API HTTP' },
      { name: 'PostgreSQL & PostGIS', level: 3, icon: 'postgresql', descriptionEn: 'Relational modelling and spatial data', descriptionIt: 'Modellazione relazionale e dati spaziali' },
      { name: 'MySQL', level: 3, icon: 'mysql', descriptionEn: 'Relational schemas and queries', descriptionIt: 'Schemi relazionali e query' },
      { name: 'MongoDB', level: 2, icon: 'mongodb', descriptionEn: 'Document-oriented storage', descriptionIt: 'Storage NoSQL documentale' },
    ],
  },
  {
    id: 'blockchain',
    titleEn: 'Blockchain & Privacy',
    titleIt: 'Blockchain & Privacy',
    descriptionEn: 'Research topics from my M.Sc.: smart contracts and privacy-preserving cryptography.',
    descriptionIt: 'Temi di ricerca della magistrale: smart contract e crittografia a tutela della privacy.',
    items: [
      { name: 'Solidity', level: 2, icon: 'solidity', descriptionEn: 'Smart contracts and mutation testing research', descriptionIt: 'Smart contract e ricerca sul mutation testing' },
      { name: 'Blockchain', level: 2, icon: 'ethereum', descriptionEn: 'Decentralised architectures (DAPA thesis)', descriptionIt: 'Architetture decentralizzate (tesi DAPA)' },
      { name: 'Zero-Knowledge Proofs', level: 2, icon: 'key', descriptionEn: 'Anonymous yet accountable authentication', descriptionIt: 'Autenticazione anonima ma verificabile' },
    ],
  },
  {
    id: 'management',
    titleEn: 'Project & Team Management',
    titleIt: 'Project & Team Management',
    descriptionEn: 'Soft skills sharpened by leading a university team from planning to delivery.',
    descriptionIt: 'Competenze trasversali maturate guidando un team universitario dalla pianificazione alla consegna.',
    items: [
      { name: 'Scrum & Agile', level: 3, icon: 'sprint', descriptionEn: 'Sprint planning, backlog grooming, retrospectives', descriptionIt: 'Sprint planning, gestione backlog, retrospettive' },
      { name: 'Team Coordination', level: 3, icon: 'users', descriptionEn: 'Led a team of 7 students (EcoHouses)', descriptionIt: 'Coordinamento di un team di 7 studenti (EcoHouses)' },
      { name: 'Planning & Deadlines', level: 3, icon: 'blocks', descriptionEn: 'Milestones, risk tracking, communication', descriptionIt: 'Milestone, monitoraggio rischi, comunicazione' },
    ],
  },
  {
    id: 'gamedev',
    titleEn: 'Game Development',
    titleIt: 'Sviluppo Videogiochi',
    descriptionEn: 'A hobby that turned into real projects: an indie game and a popular Minecraft mod.',
    descriptionIt: 'Un hobby diventato progetti concreti: un gioco indie e una mod Minecraft molto scaricata.',
    items: [
      { name: 'Unity', level: 3, icon: 'unity', descriptionEn: '2D gameplay, UI and progression systems', descriptionIt: 'Gameplay 2D, UI e sistemi di progressione' },
    ],
  },
];
