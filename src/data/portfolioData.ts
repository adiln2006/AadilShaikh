export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: "Fintech" | "SaaS & Productivity" | "EdTech & AI" | "CleanTech & Mobility";
  year: string;
  role: string;
  timeline: string;
  tagline: string;
  overview: string;
  heroGradient: string;
  accentColor: string;
  badge: string;
  problem: string;
  solution: string;
  keyFeatures: {
    title: string;
    description: string;
    iconName: string;
  }[];
  designHighlights: string[];
  impactMetrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
  figmaUrl?: string;
  prototypeUrl?: string;
  platform?: string;
  keyFocus?: string;
  isConfidential?: boolean;
  confidentialNotice?: string;
  methodologies?: string[];
  designGlimpses?: {
    title: string;
    subtitle: string;
    imageSrc: string;
    tag: string;
  }[];
}

export interface DevProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  architecture: string[];
  keyHighlights: string[];
  category: "Fullstack AI" | "Developer Tools" | "Fintech & Data";
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
  badge: string;
}

export interface Experience {
  company: string;
  linkText?: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  skills: string[];
  badgeColor: string;
}

export interface HackathonAward {
  event: string;
  year: string;
  result: "Winner" | "Runner-up" | "Finalist";
  accent: string;
  description: string;
  badge: string;
  linkedinUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Aadil Shaikh",
  title: "UI/UX Designer & Frontend-Focused Product Designer",
  punchline: "Crafting interfaces that make sense, and code that doesn't break.",
  status: "Available for High-Impact Product Roles & Internships",
  location: "Kopar Khairne, Navi Mumbai, India",
  email: "adimohd76@gmail.com",
  phone: "+91 9137513093",
  whatsappUrl: "https://wa.me/919137513093",
  links: {
    github: "https://github.com/adiln2006",
    linkedin: "https://www.linkedin.com/in/aadil-shaikh-701ab2321/",
    figma: "https://www.figma.com/design/mXDHCDNa9dkB1ib0xierAq/Aadil-portfolio?node-id=2151-16192&t=FfnRUWzEedTqc0Zp-0",
    resume: "/assets/aadil-shaikh-resume.pdf",
  },
  photos: {
    portrait: "/assets/aadil-portrait.jpg",
    casual: "/assets/aadil-casual.jpg",
  },
  taglines: [
    "I turn Figma layers into pixel-tight code before the coffee gets cold.",
    "Half designer, half frontend dev — 100% allergic to bad UX and 100vh layout shifts.",
    "Bridging the chasm between 'Can we build this?' and 'Hold my terminal.'",
    "Designing with 8pt grids, debugging with console.log, winning hackathons for breakfast.",
    "Components so clean you could eat off them; hooks so snappy they don't re-render unless provoked.",
  ],
  about: `UI/UX Designer and frontend-focused developer with hands-on experience designing user interfaces, mapping user flows, and building responsive, accessible front-end experiences. Skilled in Figma-based product design (wireframing, prototyping, design systems) and in translating those designs into functional interfaces using React and Angular. Experienced in shaping AI-powered product experiences — from personal finance apps to project-management and e-learning platforms — with a strong focus on usability, visual hierarchy, and consistent interaction patterns. Passionate about solving real user problems through clear, purposeful design and contributing to product-focused teams.`,
  education: [
    {
      institution: "Saraswati College of Engineering",
      degree: "Computer Engineering",
      period: "2023 – 2027",
      score: "7.8 CGPA",
      details: "Specializing in software architecture, human-computer interaction, and modern web systems.",
    },
    {
      institution: "Yaswantrao Chavan College of Science",
      degree: "Higher Secondary Education in Computer Science",
      period: "2021 – 2023",
      score: "Distinction",
      details: "Strong fundamentals in algorithmic problem solving, electronics, and object-oriented programming.",
    },
  ],
};

export const SKILL_CATEGORIES = [
  {
    category: "UI/UX & Product Design",
    description: "From napkin sketches to scalable design systems & interactive prototypes",
    icon: "Palette",
    skills: [
      { name: "Figma & FigJam", level: "Expert", tag: "Daily Driver" },
      { name: "Design Systems & Tokens", level: "Advanced", tag: "Scalability" },
      { name: "Wireframing & Prototyping", level: "Advanced", tag: "Rapid UX" },
      { name: "User Flows & Journey Maps", level: "Advanced", tag: "Information Arch" },
      { name: "Usability Testing & User Research", level: "Proficient", tag: "Validation" },
      { name: "Interaction Design & Micro-animations", level: "Advanced", tag: "Delight" },
    ],
  },
  {
    category: "Frontend Engineering",
    description: "Production-grade, accessible code with buttery smooth 60fps animations",
    icon: "Code2",
    skills: [
      { name: "React & Next.js (App Router)", level: "Advanced", tag: "Core Stack" },
      { name: "TypeScript & JavaScript (ESNext)", level: "Advanced", tag: "Type-Safe" },
      { name: "Angular", level: "Proficient", tag: "Enterprise" },
      { name: "Tailwind CSS & Vanilla CSS", level: "Expert", tag: "Pixel-Tight" },
      { name: "Framer Motion & Lenis Scroll", level: "Advanced", tag: "Kinetic UI" },
      { name: "Responsive & Accessible (a11y)", level: "Advanced", tag: "WCAG AAA" },
    ],
  },
  {
    category: "AI, Agents & Backend",
    description: "Connecting conversational LLMs, agentic workflows, and solid APIs",
    icon: "Sparkles",
    skills: [
      { name: "Generative AI & Prompt Engineering", level: "Advanced", tag: "LLM UX" },
      { name: "Model Context Protocol (MCP)", level: "Proficient", tag: "Agentic Systems" },
      { name: "Node.js & Express.js", level: "Proficient", tag: "REST & Sockets" },
      { name: "Python & FastAPI", level: "Proficient", tag: "Data & ML" },
      { name: "MongoDB, MySQL & Redis", level: "Proficient", tag: "Databases" },
      { name: "Java", level: "Proficient", tag: "Core OOP" },
    ],
  },
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    company: "Mathcoms",
    linkText: "Mathcoms Live",
    role: "UI/UX & Frontend Developer Intern",
    period: "April 26 – Present",
    location: "Navi Mumbai, India",
    type: "Current Role",
    badgeColor: "#ccff00",
    highlights: [
      "Contributing to UI/UX design for a project management solution with an integrated LLM-based chatbot — shaping user flows, screen layouts, and interaction patterns for task management and workflow automation.",
      "Building the frontend using Angular, translating design decisions into a responsive, intuitive, and accessible interface.",
      "Designing the chatbot's conversational UI/UX to support natural task queries and workflow guidance for end users.",
      "Improving usability across the product by refining navigation, information hierarchy, and visual consistency.",
      "Collaborating with backend engineers (Node.js, Express, PostgreSQL) to ensure UI decisions align with API structure and real data, and that the end-to-end experience feels seamless.",
    ],
    skills: ["Angular", "UI/UX Design", "Figma", "LLM Chatbot UX", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    company: "Upto Skills",
    linkText: "Upto Skills",
    role: "UI/UX Team Lead",
    period: "July 25 – Oct 25",
    location: "Navi Mumbai, India",
    type: "Team Lead",
    badgeColor: "#38bdf8",
    highlights: [
      "Led the design team for the UptoSkills AI Learning Platform, an AI-powered course platform connecting discovery, learning, community, and progress tracking.",
      "Designed the end-to-end learning journey in Figma — course discovery, video-based lesson workspace, in-context AI doubt-solving assistant, community discussion, and learning-history dashboards.",
      "Conducted user research and usability testing to refine workflows, improving navigation, accessibility, and learner engagement.",
      "Designed key features including personalized course cards, structured lesson modules with progress indicators, contextual AI assistance, and real-time notifications.",
    ],
    skills: ["UI/UX Leadership", "Figma", "Design Systems", "User Research", "EdTech UX", "Prototyping", "Usability Testing"],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "mpmiq",
    title: "MPM-IQ — Project Management Platform",
    subtitle: "Enterprise-grade sprint planning, role-based workflows & workspace analytics.",
    category: "SaaS & Productivity",
    year: "2025",
    role: "Lead UI/UX Designer",
    platform: "Web / Desktop",
    keyFocus: "Dashboards & Workflows",
    timeline: "Enterprise Platform",
    tagline: "Enterprise-grade sprint planning, role-based workflows & workspace analytics.",
    overview:
      "MPM-IQ is an end-to-end project management platform crafted to streamline team agility, sprint capacity forecasting, and complex permission hierarchies. Designed with an emphasis on low cognitive load during high-density data interactions.",
    badge: "SAAS / WEB APP",
    isConfidential: true,
    confidentialNotice:
      "Design assets & Figma live files are strictly protected under Company Confidentiality / NDA.",
    methodologies: [
      "Figma",
      "Canva",
      "User Flow Diagrams",
      "Interactive Prototyping",
      "Design Tokens in Figma",
      "Atomic Components",
      "Light/Dark Contrast Modes",
      "WCAG AA Standard",
    ],
    heroGradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentColor: "#38bdf8",
    problem:
      "Product and engineering teams constantly struggle with fragmented tools — switching between separate backlog boards, disconnected sprint trackers, calendar scheduling, and external AI assistants. High information density often creates visual fatigue and slows down sprint capacity forecasting.",
    solution:
      "Engineered an integrated desktop workspace combining Kanban backlogs, interactive sprint life-cycles, quick stand-up workflow actions, and high-level team workload analytics into one cohesive, low-cognitive-load design system.",
    keyFeatures: [
      {
        title: "Sprint Planning & Backlog Management",
        description:
          "Hierarchical sprint containers, capacity counters (planned vs active), and fast inline issue creation.",
        iconName: "LayoutGrid",
      },
      {
        title: "Kanban Board & Workflow Execution",
        description:
          "Column WIP limits, priority tags, quick standup triggers, and multi-filter criteria by assignee and status.",
        iconName: "Layers",
      },
      {
        title: "Executive Analytics & Member Workload",
        description:
          "7-day sprint metrics, status distribution donut chart, priority histograms, and team capacity distribution.",
        iconName: "LineChart",
      },
      {
        title: "Embedded AI Assistance",
        description:
          "Contextual assistant alongside tasks for auto-breakdowns and prompt recommendations without leaving the board.",
        iconName: "Cpu",
      },
    ],
    designHighlights: [
      "Density-optimized layout engine capable of rendering 500+ backlog cards without visual clutter.",
      "Custom keyboard shortcut maps and command palette (Cmd+K) for power users.",
      "Semantic status badges with automated contrast ratio checking.",
    ],
    designGlimpses: [
      {
        title: "Backlog & Sprint Planning View",
        subtitle: "Hierarchical sprint planning with active status markers, capacity numbers, and quick sprint completion actions.",
        imageSrc: "/assets/mpmiq-backlog.png",
        tag: "Sprint Agility",
      },
      {
        title: "Kanban Board & Workflow Execution",
        subtitle: "Dense multi-column board with assignee filters, stand-up actions, priority tags, and overdue trackers.",
        imageSrc: "/assets/mpmiq-board.png",
        tag: "Kanban Flow",
      },
      {
        title: "Executive Analytics & Member Workload Dashboard",
        subtitle: "Status donut charts, priority distribution bars, and individual member workload progress meters.",
        imageSrc: "/assets/mpmiq-summary.png",
        tag: "Analytics & Workload",
      },
    ],
    impactMetrics: [
      { label: "Context Switching", value: "-45%", subtext: "In simulated sprint planning sessions" },
      { label: "Task Query Speed", value: "2.5x", subtext: "Faster retrieval using sidecar AI suggestions" },
      { label: "System Usability Score", value: "89/100", subtext: "SUS score across 15 engineering managers" },
    ],
  },
  {
    id: "gocab",
    title: "GoCab — Zero-Carbon EV Cab Booking App",
    subtitle: "Electric vehicle ride-hailing, dynamic route intel & climate telemetry.",
    category: "CleanTech & Mobility",
    year: "2025",
    role: "UI/UX Designer",
    platform: "Mobile (iOS & Android)",
    keyFocus: "CleanTech & Green Mobility UX",
    timeline: "4 Weeks Case Study",
    tagline: "Turning daily commutes into visible, measurable climate positive action.",
    overview:
      "GoCab is a modern electric vehicle ride-hailing interface that turns eco-friendly choices into an intuitive, rewarding daily habit through real-time carbon averted telemetry, smart fleet battery monitoring, and rapid booking velocity.",
    badge: "CLEAN TRANSIT / MOBILE APP",
    figmaUrl:
      "https://www.figma.com/design/gKSLKtPphSmyAz8SiD7bbO/GoCab?node-id=0-1&p=f&t=ydxHtt8ZVGmgSIPx-0",
    methodologies: [
      "Figma",
      "User Journey Mapping",
      "Design Systems",
      "Interactive Prototyping",
      "Telemetry UX",
      "Micro-Interactions",
      "Carbon Analytics",
    ],
    heroGradient: "from-lime-500/20 via-emerald-500/10 to-transparent",
    accentColor: "#22C55E",
    problem:
      "Users want eco-friendly transportation, but green apps often burden riders with clunky interfaces, hidden surcharges, or guilt-inducing statistics.",
    solution:
      "Designed a sleek EV-only ride-hailing experience with familiar booking velocity, paired with real-time post-trip carbon savings visualization and cumulative environmental trophies.",
    keyFeatures: [
      {
        title: "Zero-Carbon Positioning",
        description:
          "Positioning every ride as an emission-saving act with upfront estimated CO2 savings vs conventional petrol/diesel cabs.",
        iconName: "Leaf",
      },
      {
        title: "Streamlined 3-Step Booking Flow",
        description:
          "Intuitive pickup/drop selection, instant EV vehicle tier matching, transparent fare estimate, and live driver battery telemetry.",
        iconName: "Navigation",
      },
      {
        title: "Post-Ride Carbon Savings Receipt",
        description:
          "Converts distance travelled into grams of CO2 averted and equivalent trees planted, making impact visceral and shareable.",
        iconName: "Share2",
      },
      {
        title: "Cumulative Impact Dashboard",
        description:
          "Personal and community leaderboard displaying total green kilometers, emissions averted, and eco-milestone badges.",
        iconName: "Flame",
      },
    ],
    designHighlights: [
      "Modern eco-themed palette (vibrant emerald accents, obsidian dark mode, crisp typography).",
      "Dynamic map markers displaying EV battery percentages in real-time.",
      "Tactile booking slider confirming dispatch with smooth haptic-style animation.",
    ],
    designGlimpses: [
      {
        title: "Rapid EV Dispatch & Map Telemetry",
        subtitle: "Live EV battery percentage markers, lifetime CO2 impact ticker, and 1-tap frequent trip dispatch.",
        imageSrc: "/assets/gocab-map.png",
        tag: "Live Map Dispatch",
      },
      {
        title: "Dynamic Route Intel & Eco Corridor",
        subtitle: "Real-time travel estimates, 1.23 kg CO2 savings vs combustion taxi, and average fleet charge status.",
        imageSrc: "/assets/gocab-route.png",
        tag: "Route Intel",
      },
      {
        title: "Vehicle Fleet Tier & Battery Status",
        subtitle: "GoEco Compact, GoComfort EV, GoGreen XL, and GoExecutive with upfront pricing and emissions averted.",
        imageSrc: "/assets/gocab-fleet.png",
        tag: "EV Ride Selection",
      },
      {
        title: "Cumulative Climate Telemetry & Badges",
        subtitle: "144.03 kg CO2 saved, urban tree absorption equivalents, carbon velocity charts, and green tiers.",
        imageSrc: "/assets/gocab-impact.png",
        tag: "Climate Telemetry",
      },
    ],
    impactMetrics: [
      { label: "Booking Time", value: "18 sec", subtext: "From app open to confirmed EV dispatch" },
      { label: "Shareable Receipt CTR", value: "31%", subtext: "Riders sharing carbon savings to social stories" },
      { label: "Retention Uplift", value: "+22%", subtext: "Driven by cumulative impact milestones" },
    ],
  },
  {
    id: "finflow",
    title: "FinFlow — AI-Powered Personal Finance App",
    subtitle: "Conversational AI coach, expense intelligence & milestone tracking.",
    category: "Fintech",
    year: "2025",
    role: "UI/UX Designer",
    platform: "Mobile (iOS & Android)",
    keyFocus: "Fintech & Conversational AI",
    timeline: "6 Weeks Case Study",
    tagline: "Transforming stressful financial tracking into an empowering, AI-guided ritual.",
    overview:
      "FinFlow is an intelligent personal finance mobile application designed to bridge the gap between complex budgeting spreadsheets and emotional financial clarity through conversational AI coaching and glanceable expense visual systems.",
    badge: "FINTECH / MOBILE APP",
    figmaUrl:
      "https://www.figma.com/design/cQ2knDBdmMhf1nje9isR2g/Finflow?node-id=0-1&p=f&t=jD0M7zxgUeYiunRr-0",
    methodologies: [
      "Figma",
      "User Flow Diagrams",
      "Design Tokens",
      "Wireframing",
      "Interactive Prototyping",
      "Conversational AI UX",
      "Micro-Interactions",
      "Usability Testing",
    ],
    heroGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "#10B981",
    problem:
      "Most personal finance apps suffer from dense spreadsheets disguised as mobile apps, causing severe onboarding drop-off and user guilt around budgeting rather than actionable guidance.",
    solution:
      "Designed FinFlow with a 4-step progressive disclosure onboarding flow, a glanceable status-driven budget system, and a friendly, conversational AI Coach that surfaces timely insights without cognitive overload.",
    keyFeatures: [
      {
        title: "4-Step Personalization Onboarding",
        description:
          "Progressive disclosure covering money goal, saving preference, spending level, and focus areas to calibrate the app before asking for account credentials.",
        iconName: "Compass",
      },
      {
        title: "Status-Driven Visual Budget System",
        description:
          "Glanceable budget health indicator (On Track / Warning / Over Budget) with dynamic color shifts and animated progress bars.",
        iconName: "BarChart3",
      },
      {
        title: "Conversational AI Coach Interface",
        description:
          "Zero-friction AI interface with suggested contextual prompts (savings tips, spending analysis, investing guidance) avoiding rigid chatbot loops.",
        iconName: "Bot",
      },
      {
        title: "Analytics Screen Hierarchy",
        description:
          "Structured overview: balance & savings rate at top, income vs expense context, spending trend charts, and category-level deep dives.",
        iconName: "TrendingUp",
      },
    ],
    designHighlights: [
      "8pt grid system with custom high-contrast financial tokens (Emerald for safe zones, Amber warning, Coral deficit).",
      "Micro-animations on card transitions and progress bar fills for positive financial reinforcement.",
      "Dark mode-first UI with frosted glassmorphic card overlays reducing eye strain during late-night expense audits.",
    ],
    designGlimpses: [
      {
        title: "Conversational AI Coach Interface",
        subtitle: "Zero-friction natural financial guidance, context-aware savings recommendations, and quick-prompt suggestions.",
        imageSrc: "/assets/finflow-coach.png",
        tag: "AI Financial Coach",
      },
      {
        title: "Status-Driven Expense Intelligence",
        subtitle: "Real-time month-to-date tracking with category breakdown, merchant identifiers, and transaction filtering.",
        imageSrc: "/assets/finflow-expenses.png",
        tag: "Expense Log",
      },
      {
        title: "Multi-Step Intuitive Expense Logging",
        subtitle: "Progressive disclosure flow with payment methods (UPI), merchant auto-suggestions, and category tags.",
        imageSrc: "/assets/finflow-add.png",
        tag: "Add Expense Flow",
      },
      {
        title: "Savings Goals & Dream Milestones Dashboard",
        subtitle: "Progress meters across multiple life goals, monthly target breakdowns, and milestone completion feedback.",
        imageSrc: "/assets/finflow-goals.png",
        tag: "Goals Tracking",
      },
    ],
    impactMetrics: [
      { label: "Onboarding Completion", value: "88%", subtext: "vs 54% industry baseline in usability tests" },
      { label: "Time to Log Expense", value: "< 3.2s", subtext: "Through quick-action radial drawers" },
      { label: "AI Prompt Engagement", value: "72%", subtext: "Of test users engaged with smart prompt suggestions" },
    ],
  },
  {
    id: "uptoskills",
    title: "UpToSkills — AI-Powered Learning Platform",
    subtitle: "In-context video doubt-solving assistant, curriculum discovery & community discussion.",
    category: "EdTech & AI",
    year: "2025",
    role: "Lead UI/UX Designer",
    platform: "Web / Desktop Workspace",
    keyFocus: "EdTech & In-Context AI Assistant",
    timeline: "Case Study & Product Rollout",
    tagline: "Connecting course discovery, video lessons, and real-time AI doubt solving.",
    overview:
      "UpToSkills is an end-to-end learning platform that eliminates study bottlenecks by integrating in-lesson doubt resolution directly into the video player workspace, complemented by gamified study streaks and peer Q&A.",
    badge: "EDTECH / WEB PLATFORM",
    figmaUrl:
      "https://www.figma.com/design/ntVv8LhrUEfkjaCM0lwlgG/uptoskill-course-web?node-id=0-1&p=f&t=QNRctVPgWRmUoITT-0",
    methodologies: [
      "Figma",
      "User Research",
      "Usability Testing",
      "Design Systems",
      "Video Workspace UX",
      "Interactive Prototyping",
      "In-Context AI Integration",
    ],
    heroGradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    accentColor: "#A855F7",
    problem:
      "Online learners abandon video courses at high rates (over 85%) because when they get stuck on a coding doubt, leaving the platform to search for answers causes distraction and friction.",
    solution:
      "Engineered an integrated learning environment featuring an in-context 'Ask Your Doubt' AI assistant directly alongside video lessons, paired with gamified streaks and peer discussion.",
    keyFeatures: [
      {
        title: "Confidence-First Course Discovery",
        description:
          "Course catalog with ratings breakdown, transparent syllabus preview, hands-on project roadmaps, and pricing clarity.",
        iconName: "BookOpen",
      },
      {
        title: "In-Context 'Ask Your Doubt' AI",
        description:
          "Learners click on any timestamp or code snippet to ask questions without leaving the lesson: Watch → Ask → Understand → Continue.",
        iconName: "HelpCircle",
      },
      {
        title: "Structured Lesson Workspace",
        description:
          "Synchronized module navigation, interactive video player, live transcript highlighting, and key-concept summary tabs.",
        iconName: "PlayCircle",
      },
      {
        title: "Community Q&A & Progress Dashboard",
        description:
          "Blends peer answers, AI suggestions, and learner progress metrics (hours studied, badges earned, completion streaks).",
        iconName: "Award",
      },
    ],
    designHighlights: [
      "Distraction-free focus mode with collapsible sidebars.",
      "Syntax-highlighted code blocks in AI responses matching the course IDE theme.",
      "Mobile-responsive companion view for watching lectures on tablet or mobile.",
    ],
    designGlimpses: [
      {
        title: "Ask Your Doubt – In-Context AI Assistant",
        subtitle: "Embedded real-time AI sidecar directly beside the video player, resolving programming doubts without leaving the workspace.",
        imageSrc: "/assets/uptoskills-doubt-ai.png",
        tag: "In-Context AI",
      },
      {
        title: "Structured Video Lesson Workspace & Key Concepts",
        subtitle: "Synchronized module navigation, video playback controls, lesson progress tracking, and highlighted core concepts.",
        imageSrc: "/assets/uptoskills-workspace.png",
        tag: "Lesson Workspace",
      },
      {
        title: "Course Detail & Curriculum Decision Engine",
        subtitle: "Transparent syllabus overview, pricing clarity, video previews, and student ratings breakdown.",
        imageSrc: "/assets/uptoskills-course.png",
        tag: "Course Details",
      },
      {
        title: "Learning Hub & Course Catalog Discovery",
        subtitle: "Popular AI & programming courses, categorized filters, ratings badges, and active enrollment switcher.",
        imageSrc: "/assets/uptoskills-catalog.png",
        tag: "Catalog Discovery",
      },
      {
        title: "Community Q&A & Peer Discussion Forum",
        subtitle: "Blended peer discussion forum with automated AI suggestions and verified expert community answers.",
        imageSrc: "/assets/uptoskills-community.png",
        tag: "Community Q&A",
      },
    ],
    impactMetrics: [
      { label: "Lesson Completion Rate", value: "+38%", subtext: "With embedded AI doubt assistance" },
      { label: "Doubt Resolution Time", value: "< 15s", subtext: "Average response latency for in-lesson queries" },
      { label: "Community Engagement", value: "64%", subtext: "Active daily learners participating in Q&A streaks" },
    ],
  },
];

export const DEV_PROJECTS: DevProject[] = [
  {
    id: "careerflip",
    title: "AI Mentor Platform",
    tagline: "Personalized career roadmaps with adaptive AI guidance & interactive node trees.",
    description:
      "Full-stack career mentorship platform helping students and professionals transition into new career domains through personalized roadmaps, adaptive learning schedules, AI-curated resources, and domain-specific communities.",
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "Redis",
      "Gemini API",
      "Socket.io",
      "React Flow",
    ],
    architecture: [
      "Interactive node-based skill tree using React Flow with dynamic dependency calculations.",
      "Socket.io bi-directional messaging layer for real-time peer & mentor communication.",
      "Gemini API integration with customized system prompts generating personalized milestones.",
      "Redis cache layer for sub-50ms roadmap retrieval and session states.",
    ],
    keyHighlights: [
      "Adaptive learning schedules that adjust dynamically when users complete or skip milestones.",
      "Real-time mentoring features including chat, gamification, and progress tracking.",
      "AI-based job and internship recommendations to improve engagement.",
    ],
    category: "Fullstack AI",
    liveUrl: "https://career-flip.vercel.app/",
    githubUrl: "https://github.com/adiln2006",
    gradient: "from-cyan-500/20 to-blue-600/20",
    badge: "Full-Stack + AI",
  },
  {
    id: "swagger-space",
    title: "Swagger Space",
    tagline: "Centralized API workspace for designing, testing, and sharing REST endpoints.",
    description:
      "API workspace enabling teams to design, document, test, and share REST APIs from a centralized platform with version control and workspace management.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "JWT Auth",
      "Swagger/OpenAPI",
      "Socket.io",
    ],
    architecture: [
      "Interactive HTTP client engine supporting custom headers, parameters, and multipart payloads.",
      "JWT authentication with granular workspace permissions (Viewer, Editor, Admin).",
      "Real-time team presence and collaborative schema editing via WebSockets.",
      "Automated OpenAPI 3.0 export and client SDK generation.",
    ],
    keyHighlights: [
      "Interactive API testing, environment management, and authentication support.",
      "Detailed request history, response headers inspector, and syntax-highlighted JSON viewer.",
      "Centralized team collaboration with revision history and workspace management.",
    ],
    category: "Developer Tools",
    liveUrl: "https://swagger-space-9o5g-two.vercel.app/",
    githubUrl: "https://github.com/adiln2006",
    gradient: "from-amber-500/20 to-orange-600/20",
    badge: "DevOps & Tooling",
  },
  {
    id: "finx",
    title: "Financial Data Platform",
    tagline: "Stock market dashboard with real-time analytics, interactive charts & modern fintech UI.",
    description:
      "Full-stack financial dashboard streaming real-time and historical stock data, interactive candlestick charts, technical moving averages, and Python-backed statistical indicators.",
    techStack: [
      "React",
      "Vite",
      "FastAPI",
      "Python",
      "Pandas",
      "Recharts",
      "yfinance",
    ],
    architecture: [
      "High-throughput FastAPI asynchronous backend fetching live market telemetry via yfinance.",
      "Pandas computation pipeline calculating rolling 50/200 DMA, RSI, and volatility scores.",
      "Smooth, high-framerate interactive charts rendered with Recharts and custom SVG indicators.",
      "Predictive trend model forecasting short-term directional momentum.",
    ],
    keyHighlights: [
      "Real-time market overview with customizable watchlists and ticker search.",
      "Interactive technical analysis indicators with custom timeframe toggles (1D, 1W, 1M, 1Y, 5Y).",
      "Fintech-grade dark interface designed for clarity under heavy data density.",
    ],
    category: "Fintech & Data",
    liveUrl: "https://stock-insight-platform.vercel.app/",
    githubUrl: "https://github.com/adiln2006",
    gradient: "from-emerald-500/20 to-teal-600/20",
    badge: "FastAPI + Python ML",
  },
];

export const HACKATHONS: HackathonAward[] = [
  {
    event: "INNOSPARK'2025",
    year: "2025",
    result: "Winner",
    accent: "#EAB308",
    description: "Secured 1st Place overall for building an innovative AI product prototype solving real-world workflow automation under tight 24-hour constraints.",
    badge: "🏆 1st Place Champion",
    linkedinUrl: "https://www.linkedin.com/posts/aadil-shaikh-701ab2321_innospark25-ideaothon-teamsuccess-activity-7316049154051387393-s8at/",
  },
  {
    event: "Avishkar'2025",
    year: "2025",
    result: "Runner-up",
    accent: "#94A3B8",
    description: "Awarded 2nd Place for exceptional UI/UX execution and full-stack architecture in university-level research & innovation showcase.",
    badge: "🥈 Runner-Up Award",
    linkedinUrl: "https://www.linkedin.com/posts/aadil-shaikh-701ab2321_careerflip-scoeavishkar2026-runnerup-ugcPost-7485027448359804928-pwl2",
  },
  {
    event: "MUMBAI HACKS'2025",
    year: "2025",
    result: "Finalist",
    accent: "#38BDF8",
    description: "Competed among 500+ top engineering teams across Mumbai; built an AI-powered community solution selected for Grand Finale presentation.",
    badge: "⚡ Grand Finalist",
    linkedinUrl: "https://www.linkedin.com/posts/aadil-shaikh-701ab2321_mumbaihacks2025-top100-agenticai-activity-7449478229180039168-YR2P/",
  },
  {
    event: "SANKALP IDEATHON'2025",
    year: "2025",
    result: "Finalist",
    accent: "#A855F7",
    description: "Selected as Top Finalist for pitching an impactful sustainable tech venture concept backed by rigorous user research and interactive Figma prototypes.",
    badge: "💡 Top Ideator",
    linkedinUrl: "https://www.linkedin.com/posts/aadil-shaikh-701ab2321_innovation-ideathon-teamwork-activity-7396642154531659776-FMFr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFF_lHEBTsYXKgBz8vED8F_zspuzUbtOsWU",
  },
  {
    event: "SIES IDEATION'2025",
    year: "2025",
    result: "Finalist",
    accent: "#F43F5E",
    description: "Recognized as Finalist for product design excellence and problem validation in state-level entrepreneurship challenge.",
    badge: "🎯 Finalist",
  },
];

export const TERMINAL_COMMANDS: Record<string, string | string[]> = {
  help: [
    "Available commands:",
    "  • aadil        - Who is Aadil? (Quick bio & mission)",
    "  • stack        - List core design & frontend weapons",
    "  • why-hire     - The unfair advantage of hiring a hybrid designer-dev",
    "  • hackathons   - View trophy cabinet & podium finishes",
    "  • coffee       - Check caffeine-to-code conversion efficiency",
    "  • contact      - Get email, phone, and direct links",
    "  • quote        - Generate a fresh developer/designer insight",
    "  • clear        - Clear the terminal screen",
  ],
  aadil: [
    "Aadil Shaikh: UI/UX Designer & Frontend-Focused Product Engineer.",
    "Based in Kopar Khairne, Navi Mumbai.",
    "Mission: Eradicating clunky interfaces and writing code that performs as well as it looks.",
    "Current status: Interning at Mathcoms, leading UI/UX systems, winning hackathons.",
  ],
  stack: [
    "🎨 Design: Figma, Tokens, Design Systems, User Research, Micro-interactions",
    "⚡ Frontend: Next.js, React, TypeScript, Angular, Tailwind CSS, Framer Motion",
    "🤖 AI & Backend: Generative AI, MCP, Node.js, FastAPI, Python, Socket.io",
  ],
  "why-hire": [
    "1. Zero 'Lost in Translation': I don't hand off static mockups and shrug. I know exactly how DOM trees, flexbox, and state machines render them.",
    "2. High Speed: Wireframe at 10 AM, interactive prototype at 2 PM, production PR merged by 6 PM.",
    "3. Obsessed with Quality: 60fps animations, accessible contrast ratios, and semantic HTML aren't optional extras — they're standard.",
  ],
  hackathons: [
    "🏆 INNOSPARK'2025 - Winner (1st Place)",
    "🥈 Avishkar'2025 - Runner-Up (2nd Place)",
    "⚡ MUMBAI HACKS'2025 - Finalist",
    "💡 SANKALP IDEATHON'2025 - Finalist",
    "🎯 SIES IDEATION'2025 - Finalist",
    "Total: 5 competitive podium finishes in 2025 alone.",
  ],
  coffee: [
    "☕ Coffee intake: 3 shots espresso / day",
    "⚡ Efficiency: 1 espresso = 4 Figma components + 1 clean git commit",
    "⚠️ Warning: Do not disturb while listening to lo-fi with Figma auto-layout active.",
  ],
  quote: [
    "\"A user interface is like a joke. If you have to explain it, it isn’t that good.\"",
    "\"Design systems don't slow engineers down; bad naming conventions do.\"",
    "\"Good design is invisible. Great design feels like someone read your mind.\"",
  ],
  contact: [
    "📧 Email: adimohd76@gmail.com",
    "📱 Phone/WhatsApp: +91 9137513093",
    "📍 Location: Kopar Khairne, Navi Mumbai",
    "📄 Resume: /assets/aadil-shaikh-resume.pdf",
  ],
};
