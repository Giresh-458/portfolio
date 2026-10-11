import {
  Bot,
  BrainCircuit,
  Database,
  GitBranch,
  MessagesSquare,
  Network,
  SlidersHorizontal
} from "lucide-react";
import type { Project, ResearchTopic, SkillCategory, Stat } from "@/types";

function resolveSiteUrl(): string {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredSiteUrl) return new URL(configuredSiteUrl).origin;

  // Vercel preview URLs are safe fallbacks for previews; production must set
  // the canonical public origin explicitly.
  if (process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "preview") {
    throw new Error("Set NEXT_PUBLIC_SITE_URL to the production website origin before building.");
  }

  const vercelHost = process.env.VERCEL_URL?.trim();
  return vercelHost ? `https://${vercelHost}` : "http://localhost:3000";
}

export const siteConfig = {
  name: "Giresh Komal Velaga",
  role: "Aspiring AI Engineer · Full-Stack Developer",
  email: "gireshvelaga@gmail.com",
  github: "https://github.com/Giresh-458",
  linkedin: "",
  siteUrl: resolveSiteUrl(),
  description:
    "Computer Science student at IIIT Sri City building AI systems and full-stack products, from retrieval and agent workflows to user-facing applications."
};

export const stats: Stat[] = [
  { label: "Public repositories", value: 12 },
  { label: "Engineering tracks", value: 2 },
  { label: "Featured projects", value: 7 },
  { label: "Live demos", value: 2 }
];

export const projects: Project[] = [
  {
    id: "ai-operations-agent",
    title: "AI Operations Agent",
    eyebrow: "AI Systems · Agentic Workflows",
    description:
      "A stateful AI operations platform for workflow automation and knowledge retrieval, with guardrails and human approval before sensitive actions.",
    problem:
      "Operational requests can require intent extraction, policy lookup, validation, and action execution. The system separates those steps so that tool use is bounded and reviewable.",
    architecture:
      "Streamlit interface → FastAPI backend → LangGraph workflow. Routes requests through safety checks, operational validation, or corrective retrieval using PostgreSQL with pgvector.",
    models:
      "LangGraph, FastAPI, Streamlit, PostgreSQL/pgvector, corrective RAG, and multi-provider LLM routing.",
    contributions: [
      "Structured a stateful workflow with explicit routing and guardrail checks",
      "Included human-in-the-loop approvals for sensitive operations",
      "Connected knowledge retrieval with operational workflows and observability"
    ],
    tech: ["Python", "LangGraph", "FastAPI", "PostgreSQL", "pgvector"],
    githubUrl: "https://github.com/Giresh-458/ai-operations-agent",
    image: "/projects/ai-operations.svg",
    accent: "from-cyan-950 via-slate-900 to-[#0B1015]"
  },
  {
    id: "healthcare-rag",
    title: "Healthcare Document Intelligence",
    eyebrow: "Generative AI · RAG",
    description:
      "A document question-answering system for clinical reports, combining semantic retrieval, keyword search, query routing, and privacy-aware processing.",
    problem:
      "Clinical documents contain dense terminology and exact numeric values. A useful retrieval pipeline needs semantic matching without losing precise keyword and lab-value matches.",
    architecture:
      "PDF extraction and redaction → clinical entity extraction and chunking → dense and BM25 indexes → Reciprocal Rank Fusion → LLM response generation.",
    models:
      "FastAPI, Streamlit, ChromaDB, BM25, LangChain, all-MiniLM-L6-v2 embeddings, and adaptive query routing.",
    contributions: [
      "Combined dense semantic retrieval with sparse keyword search",
      "Added query routing for fact lookup, aggregation, and irrelevant requests",
      "Designed redaction and healthcare-aware document chunking stages"
    ],
    tech: ["Python", "RAG", "ChromaDB", "BM25", "FastAPI"],
    githubUrl: "https://github.com/Giresh-458/Healthcare-Document-RAG-Assitant",
    image: "/projects/healthcare-rag.svg",
    accent: "from-emerald-950 via-teal-950 to-[#0B1015]"
  },
  {
    id: "multimodal-mood",
    title: "Multimodal Mood Drift Analysis",
    eyebrow: "Machine Learning · Multimodal",
    description:
      "An end-to-end pipeline that combines speech, text, temporal mood trends, and language-model reasoning to describe how a speaker’s mood changes over time.",
    problem:
      "Single emotion predictions miss the broader story. This pipeline aims to move from isolated audio and text predictions toward a sequence-level explanation of mood changes.",
    architecture:
      "Audio emotion recognition + text emotion classification + Whisper transcription → multimodal fusion → per-speaker timelines → temporal trend modelling → LLM-generated explanations.",
    models:
      "CRNN, fine-tuned DistilRoBERTa, Whisper Base, attention-based fusion, LSTM, and Mistral-7B with QLoRA.",
    contributions: [
      "Organized the workflow into reproducible pipeline stages",
      "Combined separate audio and text signals into mood timelines",
      "Added a reasoning stage to explain temporal patterns in natural language"
    ],
    tech: ["PyTorch", "Transformers", "Whisper", "LSTM", "QLoRA"],
    githubUrl: "https://github.com/Giresh-458/Multimodal-Mood-drift-analysis",
    image: "/projects/mood-drift.svg",
    accent: "from-violet-950 via-indigo-950 to-[#0B1015]"
  },
  {
    id: "restoconnect",
    title: "RestoConnect",
    eyebrow: "Full-Stack · Product Engineering",
    description:
      "A restaurant management platform with a React + Vite frontend and an Express/MongoDB backend, organized as a deployable multi-service application.",
    problem:
      "Restaurant workflows need a consistent interface across frontend and backend services, while deployment configuration must work outside a developer’s machine.",
    architecture:
      "React/Vite client → Express REST API → MongoDB, with Redis and Docker Compose available in the local production-style stack.",
    models: "",
    contributions: [
      "Separated frontend and backend applications",
      "Moved runtime configuration into environment variables",
      "Added Dockerfiles and deployment configuration for the application services"
    ],
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Docker"],
    githubUrl: "https://github.com/Giresh-458/RestoConnect-React",
    image: "/projects/restoconnect.svg",
    accent: "from-amber-950 via-orange-950 to-[#0B1015]"
  },
  {
    id: "mood-tracker",
    title: "Mood Tracker",
    eyebrow: "Full-Stack · Deployed Application",
    description:
      "A personal mood journal with account management, weekly visualizations, and data export, built with Node.js and MongoDB.",
    problem:
      "A journal becomes more useful when entries can be revisited, emotional patterns can be seen over time, and personal data can be exported.",
    architecture:
      "Express + EJS application with MongoDB/Mongoose persistence, session-based authentication, Chart.js trend views, and PDF export.",
    models: "",
    contributions: [
      "Implemented daily mood and note logging",
      "Built weekly mood visualizations and history export",
      "Added account management and input protections documented in the project README"
    ],
    tech: ["Node.js", "Express", "EJS", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/Giresh-458/Mood_Tracker",
    liveUrl: "https://mood-tracker-1-h1l8.onrender.com/",
    image: "/projects/mood-tracker.svg",
    accent: "from-rose-950 via-pink-950 to-[#0B1015]"
  },
  {
    id: "cgpa-calculator",
    title: "IIITS CGPA Calculator",
    eyebrow: "Full-Stack · Student Tool",
    description:
      "An academic calculator for IIIT Sri City students to calculate and save SGPA and CGPA across CSE, ECE, and AIDS grading paths.",
    problem:
      "Manual academic calculations are repetitive and easy to get wrong when subject choices, honors, or BTP paths differ by semester.",
    architecture:
      "Node.js + Express + EJS application with MongoDB Atlas persistence, password hashing, sessions, and branch-specific subject configuration.",
    models: "",
    contributions: [
      "Implemented SGPA/CGPA calculation flows for supported branches",
      "Account-based access with hashed passwords and persisted sessions",
      "Stored results in the cloud so students can revisit them"
    ],
    tech: ["Node.js", "Express", "EJS", "MongoDB Atlas"],
    githubUrl: "https://github.com/Giresh-458/IIITS_CGPA_Calc",
    liveUrl: "https://iiits-cgpa-calculator.onrender.com/",
    image: "/projects/cgpa-calculator.svg",
    accent: "from-blue-950 via-slate-900 to-[#0B1015]"
  },
  {
    id: "bpow-simulator",
    title: "Proof-of-Work Blockchain Simulator",
    eyebrow: "Systems · Interactive Simulation",
    description:
      "A Streamlit simulator for exploring mining races, difficulty adjustments, network delay, and stale branches in a proof-of-work blockchain.",
    problem:
      "Blockchain mining is easier to understand when competing miners and temporary chain splits can be observed rather than described only with diagrams.",
    architecture:
      "Interactive controls drive a mining simulation with configurable miner hash rates and difficulty, randomized message latency, chain visualization, and stale-branch pruning.",
    models: "",
    contributions: [
      "Visualized main-chain and stale-block relationships",
      "Modelled mining competition under network latency",
      "Added dynamic difficulty adjustment and background pruning"
    ],
    tech: ["Python", "Streamlit", "Blockchain", "Simulation"],
    githubUrl: "https://github.com/Giresh-458/BPoW_Simulator",
    image: "/projects/bpow-simulator.svg",
    accent: "from-purple-950 via-slate-900 to-[#0B1015]"
  }
];

export const researchTopics: ResearchTopic[] = [
  { name: "AI Agents", description: "Stateful tool use, bounded autonomy, workflow routing, and human checkpoints.", icon: Bot },
  { name: "RAG Systems", description: "Hybrid retrieval, grounding, chunking, routing, and answer quality.", icon: Database },
  { name: "Multimodal ML", description: "Combining speech, text, and temporal representations into richer signals.", icon: Network },
  { name: "LLM Applications", description: "Turning language models into reliable product features and workflows.", icon: BrainCircuit },
  { name: "Product Engineering", description: "Designing APIs, data flows, and responsive application experiences.", icon: MessagesSquare },
  { name: "Evaluation & Safety", description: "Guardrails, validation, observability, and human review around AI systems.", icon: SlidersHorizontal },
  { name: "Developer Workflow", description: "Version control, reproducible setup, containers, and deployment practices.", icon: GitBranch }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & intelligent systems",
    skills: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "LangGraph" },
      { name: "RAG / Retrieval" },
      { name: "Hugging Face" },
      { name: "Multimodal ML" }
    ]
  },
  {
    title: "Full-stack engineering",
    skills: [
      { name: "JavaScript / TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js / Express" },
      { name: "MongoDB" },
      { name: "REST APIs" }
    ]
  },
  {
    title: "Data & infrastructure",
    skills: [
      { name: "PostgreSQL / pgvector" },
      { name: "ChromaDB" },
      { name: "Docker" },
      { name: "Git / GitHub" },
      { name: "Streamlit" },
      { name: "Deployment workflows" }
    ]
  }
];



