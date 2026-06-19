import {
  Bot,
  BrainCircuit,
  Database,
  GitBranch,
  MessagesSquare,
  Network,
  SlidersHorizontal
} from "lucide-react";
import type {
  Project,
  Publication,
  ResearchTopic,
  SkillCategory,
  Stat,
  TimelineItem
} from "@/types";

export const siteConfig = {
  name: "Aryan Mehta",
  role: "GenAI Engineer & Full-Stack Developer",
  email: "hello@aryanmehta.dev",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-cinema-portfolio.vercel.app",
  description:
    "Generative AI engineer building multimodal intelligence, retrieval systems, and production-grade web products."
};

export const stats: Stat[] = [
  { label: "Projects completed", value: 12, suffix: "+" },
  { label: "Research studies", value: 3 },
  { label: "Months in industry", value: 8, suffix: "+" },
  { label: "GitHub contributions", value: 480, suffix: "+" }
];

export const projects: Project[] = [
  {
    id: "multimodal-emotion",
    title: "Multimodal Emotion Recognition",
    eyebrow: "Featured Research",
    description:
      "A research-grade affective computing pipeline that fuses facial, vocal, and textual cues for robust emotion classification.",
    problem:
      "Single-modality emotion systems break under noisy audio, occluded faces, and ambiguous language. The system learns complementary signals across vision, speech, and text.",
    architecture:
      "Three-stream late-fusion architecture with temporal attention. Video embeddings, wav2vec representations, and contextual text vectors are projected into a shared latent space before gated fusion.",
    dataset:
      "Benchmarked on MELD and IEMOCAP with speaker-aware splits, class-balanced sampling, and augmentation for low-resource emotion classes.",
    models:
      "Vision Transformer, wav2vec 2.0, RoBERTa, bi-directional cross-attention, and calibrated ensemble heads.",
    results:
      "Improved weighted F1 by 8.4% over the strongest unimodal baseline while preserving stable performance under simulated modality dropout.",
    contributions: [
      "Designed modality-dropout training for resilience",
      "Built reproducible preprocessing and evaluation pipelines",
      "Implemented interpretable attention visualizations"
    ],
    tech: ["PyTorch", "Transformers", "OpenCV", "Librosa", "MELD"],
    githubUrl: "https://github.com/",
    liveUrl: "#research",
    image: "/projects/emotion.svg",
    accent: "from-rose-950 via-red-900 to-zinc-950"
  },
  {
    id: "spacenet-height",
    title: "SpaceNet Building Height Estimation",
    eyebrow: "Geospatial AI",
    description:
      "SAR and optical satellite fusion for dense urban building-height estimation with uncertainty-aware prediction.",
    problem:
      "Accurate 3D urban maps are expensive to maintain. This project estimates building height from globally available satellite observations.",
    architecture:
      "Dual-encoder CNN with SAR-specific normalization, optical feature pyramids, cross-modal fusion blocks, and a multi-scale regression decoder.",
    dataset:
      "SpaceNet 6/7 aligned imagery with LiDAR-derived height targets, geospatial tiling, cloud masking, and spatially disjoint validation.",
    models:
      "EfficientNet encoders, feature pyramid fusion, Huber regression, boundary-aware auxiliary loss, and Monte Carlo dropout.",
    results:
      "Reached 2.7 m median absolute error on held-out urban tiles and reduced high-rise underestimation by 19% against the RGB-only baseline.",
    contributions: [
      "Built co-registration and geospatial tiling pipeline",
      "Designed SAR-optical fusion ablations",
      "Created uncertainty and residual map visualizations"
    ],
    tech: ["PyTorch", "Rasterio", "SAR", "CNN", "GeoPandas"],
    githubUrl: "https://github.com/",
    liveUrl: "#projects",
    image: "/projects/spacenet.svg",
    accent: "from-violet-950 via-indigo-900 to-zinc-950"
  },
  {
    id: "restoconnect",
    title: "RestoConnect",
    eyebrow: "Full-Stack Platform",
    description:
      "A multi-tenant restaurant operations platform spanning ordering, analytics, payments, and real-time kitchen workflows.",
    problem:
      "Independent restaurants juggle fragmented tools for menus, orders, inventory, and customer engagement. RestoConnect unifies the operating surface.",
    architecture:
      "MERN platform with role-based dashboards, REST APIs, event-driven order updates, Redis-backed sessions, and isolated tenant data.",
    dataset:
      "Synthetic operational dataset modelling 50K orders, peak-hour concurrency, inventory changes, and payment lifecycle events.",
    models:
      "Demand forecasting prototype using gradient-boosted trees alongside deterministic analytics and anomaly alerts.",
    results:
      "Sustained sub-180 ms p95 API response times in load tests with optimistic UI updates and idempotent payment webhooks.",
    contributions: [
      "Implemented JWT rotation and role-based access",
      "Integrated payment and transactional email workflows",
      "Built responsive analytics and kitchen dashboards"
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubUrl: "https://github.com/",
    liveUrl: "#contact",
    image: "/projects/restoconnect.svg",
    accent: "from-amber-950 via-orange-900 to-zinc-950"
  }
];

export const researchTopics: ResearchTopic[] = [
  { name: "Large Language Models", description: "Evaluation, inference, and product integration for open and proprietary foundation models.", icon: BrainCircuit },
  { name: "RAG Systems", description: "Hybrid retrieval, reranking, grounding, citations, and measurable answer quality.", icon: Database },
  { name: "AI Agents", description: "Tool-using systems with bounded autonomy, durable state, and human checkpoints.", icon: Bot },
  { name: "Transformers", description: "Attention architectures for language, vision, audio, and multimodal representation learning.", icon: Network },
  { name: "Prompt Engineering", description: "Structured prompting, context design, guardrails, and regression-tested workflows.", icon: MessagesSquare },
  { name: "Fine-Tuning", description: "PEFT, LoRA, preference optimization, data curation, and efficient model adaptation.", icon: SlidersHorizontal },
  { name: "Vector Databases", description: "Embedding pipelines, semantic indexing, metadata filters, and retrieval observability.", icon: GitBranch }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "C++", level: 78 }
    ]
  },
  {
    title: "AI / ML",
    skills: [
      { name: "PyTorch", level: 88 },
      { name: "TensorFlow", level: 78 },
      { name: "Hugging Face", level: 90 },
      { name: "Transformers", level: 86 }
    ]
  },
  {
    title: "Web Systems",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "Node.js", level: 86 },
      { name: "MongoDB", level: 82 }
    ]
  },
  {
    title: "Cloud & Delivery",
    skills: [
      { name: "Docker", level: 82 },
      { name: "AWS", level: 74 },
      { name: "GitHub Actions", level: 84 },
      { name: "Observability", level: 76 }
    ]
  }
];

export const publications: Publication[] = [
  {
    id: "robust-multimodal-affect",
    title: "Robust Multimodal Affect Recognition Under Partial Modality Failure",
    venue: "Undergraduate Research Review",
    year: "2026",
    abstract:
      "Studies emotion recognition when one or more input modalities become noisy or unavailable at inference time.",
    methodology:
      "Modality dropout, gated cross-attention, speaker-aware evaluation, and confidence calibration across MELD and IEMOCAP.",
    results:
      "The multimodal model retains 91% of full-input F1 under single-modality dropout and exceeds late fusion baselines.",
    futureWork:
      "Extend evaluation to multilingual dialogue, physiological signals, and online adaptation for new speakers.",
    tech: ["Multimodal AI", "Affective Computing", "PyTorch"]
  },
  {
    id: "sar-optical-fusion",
    title: "Cross-Modal SAR–Optical Fusion for Urban Height Regression",
    venue: "Geospatial AI Working Paper",
    year: "2025",
    abstract:
      "Explores learned fusion of radar and optical satellite representations for scalable building-height estimation.",
    methodology:
      "Dual encoders, feature-pyramid fusion, boundary losses, spatial holdouts, and uncertainty estimation.",
    results:
      "Fusion improves median absolute error by 14% over optical-only models, especially under cloud cover.",
    futureWork:
      "Evaluate foundation geospatial encoders and temporal satellite stacks for change-aware 3D mapping.",
    tech: ["Remote Sensing", "Computer Vision", "Geospatial ML"]
  }
];

export const timeline: TimelineItem[] = [
  { period: "2024", title: "ML Internship", description: "Built data pipelines and production model evaluation workflows." },
  { period: "2025", title: "Research Projects", description: "Moved from model demos to rigorous multimodal and geospatial experiments." },
  { period: "2025", title: "Hackathons", description: "Shipped time-boxed AI products with cross-functional teams." },
  { period: "2026", title: "Certifications", description: "Deepened cloud, MLOps, and responsible AI engineering practice." },
  { period: "Next", title: "Future Goals", description: "Contribute to frontier multimodal systems and trustworthy AI infrastructure." }
];
