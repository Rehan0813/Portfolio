/**
 * Central portfolio data — generated from Mohammed Rehan Shaikh's resume.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Mohammed Rehan Shaikh',
  displayName: 'Mohammed Rehan',
  firstName: 'REHAN',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A REHAN ORIGINAL',
  role: 'Software Engineer • Backend & Full-Stack',
  tagline: ['Software Engineering', 'Backend & Python', 'FastAPI & ML'],
  intro:
    'Computer Science Engineering student at Dayananda Sagar College of Engineering (CGPA 8.72) with hands-on software development experience across independent projects and hackathons. Builds backend services and REST APIs in Python and FastAPI, backed by PostgreSQL, MongoDB, and MySQL, containerized with Docker, and integrated with ML pipelines.',
  location: 'Bengaluru, Karnataka',
  email: 'rs2425071@gmail.com',
  phone: '+91 8310177216',
  links: {
    linkedin: 'https://www.linkedin.com/in/rehan-shaikh-47403229b',
    github: 'https://github.com/Rehan0813',
  },
  resumePdf: '/assets/Mohammed_Rehan_Shaikh_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Mohammed Rehan Shaikh',
  },
  interests: ['Distributed Systems', 'API Architecture', 'Machine Learning', 'Cloud & DevOps'],
};

export const education = [
  {
    school: 'Dayananda Sagar College of Engineering',
    place: 'Bengaluru, Karnataka',
    degree: 'Bachelor of Engineering — Computer Science & Engineering',
    period: '2022 – 2026',
    score: 'CGPA 8.72 / 10',
  },
];

export const experience = [
  {
    company: 'Dayananda Sagar College of Engineering',
    role: 'Software Engineering & Hackathon Lead',
    place: 'Bengaluru, KA',
    period: '2023 – Present',
    points: [
      'Engineered high-performance backend microservices and REST APIs in Python and FastAPI, backed by PostgreSQL, MongoDB, and MySQL.',
      'Won 1st Place at Atharva Hackathon (Adaptive Cache Management Engine) and 2nd Prize at TechFest Parichay 4.0 (SmartFlow AI).',
      'Awarded Special Domain Category Prize at ETHiCARE Codeathon for building an infant pain facial expression classification system with MobileNetV2 and LSTM.',
      'Containerized applications using Docker and deployed production services to Render with CI/CD and JWT authentication.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Proof = {
  badge: string;
  event: string;
  organizer: string;
  headline: string;
  summary: string;
  team?: string[];
  url: string;
  linkLabel: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  proof?: Proof;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'credimap',
    title: 'CrediMap – Portfolio Builder',
    year: '2026',
    genre: 'Full-Stack • AI / OCR • Cloud',
    logline: 'A portfolio platform on FastAPI and MongoDB with an OCR & Gemini API pipeline that extracts certificate details.',
    stack: ['Python', 'FastAPI', 'MongoDB', 'Gemini API', 'JWT', 'Render'],
    live: 'https://credimap-fd.onrender.com/dashboard',
    github: 'https://github.com/Rehan0813',
    build: [
      'Built a portfolio platform on FastAPI and MongoDB where users create and publish portfolios from customizable templates.',
      'Engineered an OCR pipeline to extract text from uploaded certificates, then integrated the Gemini API to identify courses and auto-populate certificate details, reducing manual data entry.',
      'Implemented JWT-based authentication and public/private portfolio sharing through unique links; deployed to production on Render.',
    ],
    features: [
      'Customizable portfolio templates',
      'Automated OCR pipeline for certificate extraction',
      'Gemini API course & credential identification',
      'JWT-based secure user authentication',
      'Public / private sharing through unique URLs',
      'Production deployment on Render cloud',
    ],
    metrics: [
      { value: 'FastAPI', label: 'REST API core' },
      { value: 'Gemini AI', label: 'smart certificate parsing' },
      { value: '100%', label: 'automated data extraction' },
      { value: 'JWT', label: 'secure access control' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'fraud-detection',
    title: 'Credit Card Fraud Detection System',
    year: '2026',
    genre: 'FinTech • Machine Learning • Docker',
    logline: 'An end-to-end fraud detection application that assesses real-time transaction risk using FastAPI, PostgreSQL, and an XGBoost model.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'XGBoost', 'Docker'],
    build: [
      'Developed an end-to-end fraud detection application that assesses real-time transaction risk using FastAPI, PostgreSQL, and an XGBoost model.',
      'Designed a risk-scoring workflow that processes transaction data and flags potentially fraudulent activity in real time.',
      'Containerized the application with Docker for consistent, reproducible deployment across environments.',
    ],
    features: [
      'Real-time transaction risk evaluation',
      'High-precision XGBoost machine learning model',
      'FastAPI asynchronous REST endpoints',
      'PostgreSQL persistent transaction store',
      'Reproducible Docker containerization',
    ],
    metrics: [
      { value: 'Real-time', label: 'transaction evaluation' },
      { value: 'XGBoost', label: 'risk scoring model' },
      { value: 'PostgreSQL', label: 'audit transaction store' },
      { value: 'Docker', label: 'containerized environment' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'adaptive-cache',
    title: 'Adaptive Cache Management Engine',
    year: '2026',
    genre: 'Systems • ML • React.js',
    logline: '1st Place Atharva Hackathon Winner: Random Forest model predicting optimal cache replacement policy (LRU, LFU, FIFO).',
    stack: ['Python', 'Random Forest', 'React.js', 'Machine Learning'],
    live: 'https://cachex-1.onrender.com/dashboard',
    proof: {
      badge: '🥇 1st Place Winner',
      event: 'Atharva Hackathon — DSCE',
      organizer: 'Dayananda Sagar College of Engineering',
      headline: '1st Place Champion — Adaptive Cache Management Engine',
      summary:
        'Won 1st Place at Atharva Hackathon for designing and building an Adaptive Cache Management Engine that uses Random Forest to predict optimal cache replacement policies (LRU, LFU, FIFO) with live telemetry and exportable analytics.',
      team: ['Mohammed Rehan Shaikh'],
      url: 'https://lnkd.in/p/gKsNgAXd',
      linkLabel: 'View Atharva Award Announcement & Proof ↗',
    },
    build: [
      'Built an engine that uses a Random Forest model to predict the best cache replacement policy (LRU, LFU, or FIFO) from access frequency, reuse distance, and temporal and spatial locality.',
      'Delivered a React dashboard showing cache hit rate and latency, with simulated performance gains and exportable PDF reports.',
    ],
    features: [
      'Random Forest predictive cache optimization',
      'Evaluates LRU, LFU, and FIFO replacement policies',
      'Locality & reuse distance feature engineering',
      'Interactive React performance dashboard',
      'Automated exportable PDF performance analytics',
    ],
    metrics: [
      { value: '1st Place', label: 'Atharva Hackathon' },
      { value: '3 Policies', label: 'LRU, LFU & FIFO predicted' },
      { value: 'React.js', label: 'telemetry dashboard' },
      { value: 'PDF', label: 'exportable reports' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'smartflow-ai',
    title: 'SmartFlow AI: Adaptive Traffic Signal System',
    year: '2026',
    genre: 'Computer Vision • AI • FastAPI',
    logline: '2nd Prize TechFest Parichay 4.0: Replaced fixed-timer signals with real-time YOLOv8 vehicle detection & lane density control.',
    stack: ['Python', 'FastAPI', 'YOLOv8', 'OpenCV'],
    proof: {
      badge: '🥈 2nd Prize Winner',
      event: 'TechFest Parichay 4.0 (2026)',
      organizer: 'Dept. of AI & ML, T John Institute of Technology',
      headline: 'Second hackathon. Second win. Staying consistent.',
      summary:
        'Secured 2nd Prize at TechFest Parichay 4.0 organized by the Department of AI & ML at T John Institute of Technology. Built SmartFlow AI — an Adaptive Traffic Signal System using YOLOv8 vehicle detection, OpenCV live video density analysis, and an adaptive 15–60s green signal decision engine.',
      team: ['Mohammed Rehan Shaikh', 'Iqbal Nawab', 'Ashilesh Desai'],
      url: 'https://lnkd.in/p/gK6aHyvh',
      linkLabel: 'View T. John Award Announcement & Team Proof ↗',
    },
    build: [
      'Replaced fixed-timer signals with real-time control by detecting vehicles from live video and computing lane-wise traffic density.',
      'Implemented a decision engine that sets green-signal timing (15–60 s), served through FastAPI with a dashboard comparing fixed and AI-controlled signals.',
    ],
    features: [
      'YOLOv8 & OpenCV computer vision detection',
      'Real-time lane-wise density calculation',
      'Adaptive 15–60s green signal decision logic',
      'FastAPI telemetry API endpoints',
      'Visual comparative analytics dashboard',
    ],
    metrics: [
      { value: '2nd Prize', label: 'TechFest Parichay 4.0' },
      { value: '15–60s', label: 'adaptive green timings' },
      { value: 'YOLOv8', label: 'live video detection' },
      { value: 'FastAPI', label: 'decision engine backend' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'infant-pain',
    title: 'Infant Pain Detection System',
    year: '2026',
    genre: 'HealthTech • Deep Learning • Full-Stack',
    logline: 'Special Domain Category Prize ETHiCARE: MobileNetV2 + LSTM classifying infant facial expressions into Pain / No Pain.',
    stack: ['Python', 'FastAPI', 'TensorFlow', 'React.js', 'OpenCV', 'MediaPipe'],
    proof: {
      badge: '🏆 Special Domain Prize',
      event: 'ETHiCARE Codeathon (Mar 2026)',
      organizer: 'Dept. of Medical & Electronics Eng., DSCE (Sponsored by DERBI Foundation & Sagar Hospitals)',
      headline: 'We came, we coded, we conquered — ETHiCARE Codeathon winners.',
      summary:
        'Awarded Special Domain Category Prize at the ETHiCARE Codeathon for building an AI Infant Pain Detection System using OpenCV, MediaPipe facial landmarks, and MobileNetV2 + LSTM neural network classifier with longitudinal clinical records.',
      team: ['Mohammed Rehan Shaikh', 'Tejasvi Pednekar', 'Ramsha Shaikh'],
      url: 'https://lnkd.in/p/gPvZEgvU',
      linkLabel: 'View ETHiCARE Award Announcement & Team Proof ↗',
    },
    build: [
      'Built a system that classifies infant facial expressions as Pain / No Pain with a confidence score, and stores pain history to generate structured medical reports.',
      'Combined OpenCV and MediaPipe face detection with a MobileNetV2 + LSTM model, integrated through a FastAPI backend, React.js frontend, and SQL database.',
    ],
    features: [
      'MediaPipe & OpenCV facial landmark tracking',
      'MobileNetV2 + LSTM neural network classifier',
      'Confidence scoring & clinical thresholding',
      'Structured diagnostic medical report generation',
      'SQL database longitudinal clinical history',
    ],
    metrics: [
      { value: 'Prize Winner', label: 'ETHiCARE Codeathon' },
      { value: 'MobileNetV2', label: 'deep learning classifier' },
      { value: 'MediaPipe', label: 'facial landmark tracking' },
      { value: 'SQL DB', label: 'structured medical reports' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
  linkLabel?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'atharva-hackathon',
    title: '1st Place Winner',
    org: 'Atharva Hackathon — DSCE',
    detail: 'Built an Adaptive Cache Management Engine using Random Forest to predict optimal cache replacement (LRU/LFU/FIFO) with a live React telemetry dashboard.',
    laurel: '1st Place',
    link: 'https://lnkd.in/p/gKsNgAXd',
    linkLabel: 'View Atharva Award Proof ↗',
  },
  {
    id: 'techfest-parichay',
    title: '2nd Prize Winner',
    org: 'TechFest Parichay 4.0 — T. John IT',
    detail: 'Dept. of AI & ML: Engineered SmartFlow AI, replacing fixed signals with real-time YOLOv8 vehicle detection and dynamic 15–60s green signal decision logic.',
    laurel: '2nd Prize',
    link: 'https://lnkd.in/p/gK6aHyvh',
    linkLabel: 'View T. John Award Proof ↗',
  },
  {
    id: 'ethicare-codeathon',
    title: 'Special Domain Category Prize',
    org: 'ETHiCARE Codeathon (Mar 2026) — DSCE',
    detail: 'Engineered Infant Pain Detection System with OpenCV, MediaPipe, MobileNetV2 + LSTM, FastAPI backend, React UI, and SQL medical reporting.',
    laurel: 'Domain Prize',
    link: 'https://lnkd.in/p/gPvZEgvU',
    linkLabel: 'View ETHiCARE Award Proof ↗',
  },
  {
    id: 'hackerrank-5star',
    title: '5-Star Rating',
    org: 'HackerRank',
    detail: 'Achieved 5-Star gold rating in Problem Solving, demonstrating strong algorithmic design, data structures, and edge-case handling.',
    laurel: '5-Star Rating',
    link: 'https://www.hackerrank.com/',
    linkLabel: 'View HackerRank Profile ↗',
  },
  {
    id: 'dsce-academic',
    title: 'CGPA 8.72 / 10',
    org: 'Dayananda Sagar College of Engineering',
    detail: 'Consistently strong academic performance in Computer Science & Engineering with deep focus on Operating Systems, Networks, and Distributed Systems.',
    laurel: 'Top Academics',
  },
];

export type Certification = {
  id: string;
  issuer: string;
  name: string;
  link: string;
  pdf?: string;
  badge?: string;
  date?: string;
  score?: string;
  credentialId?: string;
};

export const certifications: Certification[] = [
  {
    id: 'nptel-cn',
    issuer: 'NPTEL',
    name: 'Computer Networks and Internet Protocol (Elite — Top 5%)',
    link: '/assets/NPTEL_Elite_Computer_Networks.pdf',
    pdf: '/assets/NPTEL_Elite_Computer_Networks.pdf',
    badge: 'Elite · Top 5%',
    date: 'Jan–Apr 2026',
    score: 'Consolidated Score: 75% (Assignments: 22.35/25, Exam: 52.34/75)',
    credentialId: 'Roll No: NPTEL26CS35S550204040 · IIT Kharagpur',
  },
  {
    id: 'oracle-ai',
    issuer: 'Oracle',
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    link: '/assets/Oracle_Cloud_AI_Foundations_Associate.pdf',
    pdf: '/assets/Oracle_Cloud_AI_Foundations_Associate.pdf',
    badge: 'Oracle Certified',
    date: 'Sep 14, 2025 – Sep 14, 2027',
    score: 'Oracle University Recognized',
    credentialId: 'eCertificate ID: 102540475OCI25AICFA',
  },
  {
    id: 'dsce-atharva',
    issuer: 'DSCE',
    name: 'Atharva Hackathon Winner — 1st Place',
    link: 'https://lnkd.in/p/gKsNgAXd',
    badge: '1st Place Winner',
    date: '2026',
    credentialId: 'Adaptive Cache Engine · Dayananda Sagar College of Engineering',
  },
  {
    id: 'tjit-parichay',
    issuer: 'TJIT',
    name: 'TechFest Parichay 4.0 — 2nd Prize Winner',
    link: 'https://lnkd.in/p/gK6aHyvh',
    badge: '2nd Prize Winner',
    date: '2026',
    credentialId: 'SmartFlow AI · Dept. of AI & ML, T. John Institute of Technology',
  },
  {
    id: 'ethicare-prize',
    issuer: 'ETHiCARE',
    name: 'ETHiCARE Codeathon — Special Domain Prize',
    link: 'https://lnkd.in/p/gPvZEgvU',
    badge: 'Special Domain Prize',
    date: 'Mar 2026',
    credentialId: 'Infant Pain Detection · DERBI Foundation & Sagar Hospitals',
  },
  {
    id: 'swayam-elite',
    issuer: 'SWAYAM',
    name: 'Elite Certification in Computer Networks',
    link: '/assets/NPTEL_Elite_Computer_Networks.pdf',
    pdf: '/assets/NPTEL_Elite_Computer_Networks.pdf',
    badge: 'Elite Accredited',
    date: '2026',
    score: 'Score: 75% · 4 Recommended Credits',
    credentialId: 'SWAYAM & Ministry of Education, Govt. of India',
  },
  {
    id: 'hackerrank-ps',
    issuer: 'HackerRank',
    name: 'Problem Solving (5-Star Gold)',
    link: 'https://www.hackerrank.com/',
    badge: '5-Star Gold',
    date: '2026',
    credentialId: 'Algorithmic Problem Solving & Data Structures',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming foundations',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'SQL', mono: 'Sql' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'High performance & secure services',
    skills: [
      { name: 'FastAPI', mono: 'Fa', note: 'Core' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'JWT Auth', mono: 'Jw' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational & Document Stores',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'tools-infra',
    title: 'Tools & DevOps',
    subtitle: 'Shipping & environments',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'Render', mono: 'Rn' },
      { name: 'VS Code', mono: 'Vc' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'Machine Learning & Vision',
    subtitle: 'Intelligent pipelines & inference',
    skills: [
      { name: 'XGBoost', mono: 'Xg' },
      { name: 'Gemini API', mono: 'Gm' },
      { name: 'OCR Pipelines', mono: 'Oc' },
      { name: 'YOLOv8', mono: 'Yo' },
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'MediaPipe', mono: 'Mp' },
      { name: 'Random Forest', mono: 'Rf' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'Core computer science principles',
    skills: [
      { name: 'Data Structures & Algorithms', mono: 'Ds' },
      { name: 'Problem Solving', mono: 'Ps', note: '5-Star' },
      { name: 'Computer Networks', mono: 'Cn', note: 'Elite' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'DBMS', mono: 'Db' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['CrediMap', 'Fraud Detection', 'Adaptive Cache Engine', 'SmartFlow AI', 'Infant Pain Detection'],
  Java: ['Object-Oriented Programming', 'Problem Solving'],
  SQL: ['PostgreSQL Transactions', 'MySQL Medical Records Store', 'FastAPI Relational Backends'],
  FastAPI: ['CrediMap Platform', 'Credit Card Fraud API', 'SmartFlow AI Telemetry', 'Infant Pain System'],
  'REST APIs': ['CrediMap Endpoints', 'Real-Time Fraud Evaluation', 'SmartFlow AI Decision Engine'],
  'JWT Auth': ['CrediMap User Auth & Secure Sharing Links'],
  PostgreSQL: ['Credit Card Fraud Detection System'],
  MongoDB: ['CrediMap Portfolio Platform Data Store'],
  MySQL: ['Infant Pain Detection Patient History'],
  Docker: ['Credit Card Fraud Detection Containerization'],
  Git: ['Version Control across all hackathons and projects'],
  GitHub: ['Open-source repositories and team collaboration'],
  Linux: ['Development environment, shell tooling and server deployment'],
  Render: ['CrediMap Production Deployment'],
  XGBoost: ['Credit Card Fraud Detection Risk Scoring'],
  'Gemini API': ['CrediMap Automated Course Extraction & Certificate Parsing'],
  'OCR Pipelines': ['CrediMap Certificate Text Extraction'],
  YOLOv8: ['SmartFlow AI Real-time Vehicle Detection'],
  OpenCV: ['SmartFlow AI Video Analysis', 'Infant Pain Detection Face Cropping'],
  TensorFlow: ['Infant Pain Detection MobileNetV2 + LSTM Model'],
  MediaPipe: ['Infant Pain Detection Facial Landmark Detection'],
  'Random Forest': ['Atharva Hackathon 1st Place Adaptive Cache Engine'],
  'Data Structures & Algorithms': ['HackerRank 5-Star Problem Solving Rating'],
  'Problem Solving': ['HackerRank 5-Star Gold Badge'],
  'Computer Networks': ['NPTEL Elite Certification SWAYAM 2026'],
  DBMS: ['PostgreSQL, MongoDB, and MySQL Database Architecture'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
  link?: string;
  linkLabel?: string;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2022 – 2024',
    synopsis: 'B.E. in Computer Science & Engineering at Dayananda Sagar College of Engineering, Bengaluru.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Entering Engineering',
        description: 'B.E. Computer Science & Engineering at Dayananda Sagar College of Engineering — maintaining a strong 8.72 CGPA.',
        tags: ['B.E. CSE', 'DSCE', 'CGPA 8.72'],
        runtime: '2022 – Present',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: '5-Star Problem Solver',
        description: 'Mastering data structures, algorithms, and core competitive programming with a 5-Star gold rating on HackerRank.',
        tags: ['HackerRank', '5-Star', 'Algorithms'],
        runtime: 'Core Mastery',
        palette: violet,
        link: 'https://www.hackerrank.com/',
        linkLabel: 'View HackerRank ↗',
      },
    ],
  },
  {
    number: 2,
    title: 'Hackathon Arena',
    period: '2024 – 2026',
    synopsis: 'Three prestigious podium finishes across high-intensity hackathons and codeathons.',
    episodes: [
      {
        code: 'S02 E01',
        title: '1st Place — Atharva Hackathon',
        description: 'Built Adaptive Cache Management Engine predicting LRU, LFU, and FIFO replacement policies via Random Forest with a React dashboard.',
        tags: ['1st Place', 'Atharva', 'Random Forest', 'React'],
        runtime: '1st Place Winner',
        palette: crimson,
        link: 'https://lnkd.in/p/gKsNgAXd',
        linkLabel: 'View Atharva Proof ↗',
      },
      {
        code: 'S02 E02',
        title: '2nd Prize — TechFest Parichay 4.0',
        description: 'Developed SmartFlow AI replacing fixed traffic lights with YOLOv8 computer vision and dynamic 15–60s green timings via FastAPI.',
        tags: ['2nd Prize', 'TechFest', 'YOLOv8', 'OpenCV'],
        runtime: '2nd Prize Winner',
        palette: ocean,
        link: 'https://lnkd.in/p/gK6aHyvh',
        linkLabel: 'View T. John Proof ↗',
      },
      {
        code: 'S02 E03',
        title: 'Domain Prize — ETHiCARE Codeathon',
        description: 'Engineered Infant Pain Detection System with MobileNetV2 + LSTM, MediaPipe facial landmarks, and automated medical reporting.',
        tags: ['Domain Prize', 'ETHiCARE', 'TensorFlow', 'FastAPI'],
        runtime: 'Special Prize',
        palette: jade,
        link: 'https://lnkd.in/p/gPvZEgvU',
        linkLabel: 'View ETHiCARE Proof ↗',
      },
    ],
  },
  {
    number: 3,
    title: 'Building Production Backends',
    period: '2025 – 2026',
    synopsis: 'Developing robust web platforms, automated OCR pipelines, and real-time risk assessment systems.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'CrediMap & The Gemini Pipeline',
        description: 'Architected CrediMap on FastAPI and MongoDB with an OCR pipeline and Gemini API for auto-extracting certificate credentials.',
        tags: ['CrediMap', 'FastAPI', 'Gemini AI', 'MongoDB', 'Render'],
        runtime: '2026',
        palette: crimson,
        link: 'https://credimap-fd.onrender.com/dashboard',
        linkLabel: 'View CrediMap ↗',
      },
      {
        code: 'S03 E02',
        title: 'Credit Card Fraud Detection',
        description: 'Engineered high-throughput fraud risk engine with FastAPI, PostgreSQL, and an XGBoost model containerized with Docker.',
        tags: ['XGBoost', 'PostgreSQL', 'Docker', 'FastAPI'],
        runtime: '2026',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Elite Certification & Cloud Credentials',
    period: '2025 – 2026',
    synopsis: 'Achieving Elite accreditation in Computer Networks from SWAYAM NPTEL (IIT Kharagpur) and AI certification from Oracle University.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'NPTEL Elite — Computer Networks',
        description: 'Earned Elite status (Top 5% Topper, 75%) in Computer Networks and Internet Protocol on SWAYAM / NPTEL (IIT Kharagpur), mastering TCP/IP, routing protocols, and network architecture.',
        tags: ['NPTEL Elite', 'IIT Kharagpur', 'SWAYAM', 'Top 5%'],
        runtime: 'IIT Kharagpur',
        palette: ocean,
        link: '/assets/NPTEL_Elite_Computer_Networks.pdf',
        linkLabel: 'View NPTEL Certificate ↗',
      },
      {
        code: 'S04 E02',
        title: 'Oracle Certified AI Foundations Associate',
        description: 'Official certification from Oracle University in Oracle Cloud Infrastructure (OCI) 2025 AI Foundations, verifying deep understanding of ML, Deep Learning, and Cloud AI services.',
        tags: ['Oracle Certified', 'OCI AI Foundations', 'Cloud AI', 'Oracle Univ'],
        runtime: 'Oracle University',
        palette: crimson,
        link: '/assets/Oracle_Cloud_AI_Foundations_Associate.pdf',
        linkLabel: 'View Oracle Certificate ↗',
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now Streaming',
    synopsis: 'Focusing on distributed systems, large-scale backend engineering, and cloud microservices.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Level',
        description: 'Expanding into Distributed Systems, High-Concurrency APIs, and Scalable Cloud Infrastructure.',
        tags: ['Distributed Systems', 'Cloud', 'DevOps', 'FastAPI'],
        runtime: 'In Production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette; link?: string };

export const topPicks: TopPick[] = [
  { label: 'Hackathon Champion', title: 'Atharva 1st Place', detail: 'Adaptive Cache Engine with Random Forest & React', palette: crimson, link: 'https://lnkd.in/p/gKsNgAXd' },
  { label: 'Oracle Certified', title: 'OCI AI Foundations', detail: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', palette: amber, link: '/assets/Oracle_Cloud_AI_Foundations_Associate.pdf' },
  { label: 'Elite Credential', title: 'NPTEL Elite (Top 5%)', detail: 'Computer Networks Elite certification from IIT Kharagpur / SWAYAM', palette: jade, link: '/assets/NPTEL_Elite_Computer_Networks.pdf' },
  { label: 'Computer Vision', title: 'SmartFlow AI', detail: '2nd Prize TechFest Parichay 4.0 with YOLOv8 & OpenCV', palette: ocean, link: 'https://lnkd.in/p/gK6aHyvh' },
  { label: 'Healthcare ML', title: 'Infant Pain System', detail: 'Domain Prize ETHiCARE Codeathon with MobileNetV2 + LSTM', palette: crimson, link: 'https://lnkd.in/p/gPvZEgvU' },
  { label: 'Core Framework', title: 'FastAPI', detail: 'Primary backend framework for asynchronous REST APIs', palette: amber },
  { label: 'AI Platform', title: 'CrediMap', detail: 'Portfolio platform with OCR & Gemini API parsing', palette: ocean, link: 'https://credimap-fd.onrender.com/dashboard' },
  { label: 'FinTech ML', title: 'Fraud Detection', detail: 'Real-time risk scoring with XGBoost, PostgreSQL & Docker', palette: violet },
  { label: 'Coding Gold', title: '5-Star HackerRank', detail: 'Top rating in Problem Solving & Algorithmic Design', palette: amber, link: 'https://www.hackerrank.com/' },
  { label: 'Academic Standing', title: 'CGPA 8.72 / 10', detail: 'Dayananda Sagar College of Engineering, Bengaluru', palette: ocean },
  { label: 'Containerization', title: 'Docker & Render', detail: 'Containerized reproducible microservices & deployments', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. Computer Science',
    lines: ['Dayananda Sagar College of Engineering, Bengaluru', '2022 – 2026'],
    chips: ['CGPA 8.72 / 10'],
  },
  {
    kicker: 'Skills',
    title: 'Python & FastAPI',
    lines: ['Python, Java, SQL · FastAPI, REST APIs, JWT', 'PostgreSQL, MongoDB, MySQL · Docker, Linux, Render'],
    chips: ['Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Docker', 'XGBoost'],
  },
  {
    kicker: 'Hackathons',
    title: 'Podium Finishes',
    lines: [
      '1st Place — Atharva Hackathon (Adaptive Cache Management Engine)',
      '2nd Prize — TechFest Parichay 4.0 (SmartFlow AI Adaptive Signals)',
      'Special Domain Prize — ETHiCARE Codeathon (Infant Pain Detection)',
    ],
    chips: ['1st Place', '2nd Prize', 'Domain Prize'],
  },
  {
    kicker: 'Productions',
    title: 'Featured Builds',
    lines: [
      'CrediMap — Portfolio builder with OCR & Gemini API auto-extraction',
      'Fraud Detection — Real-time risk scoring with XGBoost & Docker',
      'SmartFlow AI — Vision-based adaptive signals with YOLOv8 & OpenCV',
    ],
  },
  {
    kicker: 'Credentials',
    title: 'Elite Recognition',
    lines: [
      'HackerRank 5-Star Problem Solving Rating',
      'NPTEL Computer Networks (Elite Certification, SWAYAM)',
    ],
    chips: ['5-Star Problem Solver', 'NPTEL Elite'],
  },
  {
    kicker: 'Next Mission',
    title: 'Now Scaling',
    lines: ['Distributed Systems · API Architecture · Scalable Cloud Engineering'],
  },
];

export type ProfileId = 'rehan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'rehan',
    name: 'Rehan',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Productions • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
