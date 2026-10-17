import { ResumeData } from './types';

export const sampleResume: ResumeData = {
  name: 'Aphiwish Aphisaksiri',
  title: 'Software Engineer',
  contact: {
    website: { label: 'Aphiwish.com', href: 'https://aphiwish.com' },
    email: { label: 'aphiwish.aph@gmail.com', href: 'mailto:aphiwish.aph@gmail.com' },
    github: { label: 'github.com/Aphiwish-Aphisaksiri', href: 'https://github.com/Aphiwish-Aphisaksiri' },
    linkedin: { label: 'linkedin.com/in/aphiwish-aphisaksiri', href: 'https://linkedin.com/in/aphiwish-aphisaksiri' },
    phone: '+66 814240959',
    location: 'Bangkok, Thailand',
  },
  summary:
    'Software Engineer specializing in agentic AI systems, from production backend services to full-stack platforms. At Omise, built a Go microservice for KYC automation and integrated three AI agents into a legacy Rails platform; independently architected ProjectHub, a full-stack agentic RAG platform with dual-path tool-calling over locally-hosted LLMs. Uses a self-built agent-workflow methodology to keep AI-assisted development disciplined, cutting rework without slowing delivery.',
  skills: [
    {
      id: 'languages-frameworks',
      name: 'Languages & Frameworks',
      skills: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Rails', 'SQL', 'Next.js', 'React', 'Node.js', 'FastAPI'],
    },
    {
      id: 'data-ai',
      name: 'Data & AI',
      skills: ['PostgreSQL', 'MongoDB', 'pgvector', 'ChromaDB', 'RAG Pipelines', 'Ollama', 'Vector Embeddings', 'Local LLM'],
    },
    {
      id: 'devops-tools',
      name: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'CI/CD', 'REST APIs', 'WebSocket', 'Vitest', 'pytest', 'Postman', 'Jira', 'Confluence'],
    },
  ],
  experiences: [
    {
      id: 'omise',
      role: 'Software Engineer Contractor - AI & Platform Engineering',
      company: 'Omise',
      period: 'May 2026 – Current',
      location: 'Bangkok, Thailand',
      techStack: ['Go', 'Ruby on Rails', 'GitOps', 'PII Filtering', 'Microservices Architecture', 'CI/CD', 'REST APIs', 'Event-Driven Systems'],
      summary:
        'Building AI-powered automation for merchant risk assessment, spanning backend microservices, legacy platform integration, and cross-functional delivery with Legal, Product, and Compliance teams.',
      bullets: [
        'Architected and shipped a Summary Agent microservice (Go) within an AI-driven KYC platform, including a custom PII-filtering layer to reduce sensitive data exposure to the LLM; owned the feature from requirements through production deployment via GitOps and a full CI/CD pipeline.',
        'Integrated three AI agents (OCR extraction, website verification, summary generation) into a legacy Ruby on Rails platform by building new frontend views, controllers, and API clients — bringing AI-assisted document validation and risk assessment into analysts\' existing workflow, with an estimated ~30 minutes per registration saved.',
        'Reworked OCR document storage from sparse columns to normalized child tables with a single schema registry, eliminating drift. De-risked the rewrite with golden-file API response tests and a migration replayer, proving it byte-identical on the wire.',
        'Architected KYC platform\'s agent APIs toward an event-driven design — shipping a fire-and-forget async interim solution with on-demand refresh as a cost-effective, infrastructure-free path to production, unblocking future batch-processing scale.',
      ],
    },
    {
      id: 'lineman-wongnai',
      role: 'Software Engineer in Test intern',
      company: 'LINE MAN Wongnai',
      period: 'May 2024 – July 2024',
      location: 'Bangkok, Thailand',
      techStack: ['JavaScript', 'MongoDB', 'Postman', 'API Testing', 'QA Automation', 'Jira', 'Confluence'],
      bullets: [
        'Performed QA and automated API testing (JavaScript, Postman) for new features on the LINE MAN food delivery platform, including payment-gateway flow validation and MongoDB data-integrity checks, within a full CI/CD delivery pipeline coordinated via Jira and Confluence.',
      ],
    },
  ],
  projects: [
    {
      id: 'projecthub',
      name: 'ProjectHub — Full-Stack Project Management App with Integrated AI Chatbot',
      link: { label: 'GitHub', href: 'https://github.com/Aphiwish-Aphisaksiri/ProjectHub' },
      period: 'Nov 2025 – Mar 2026',
      techStack: ['Next.js', 'FastAPI', 'Docker', 'Ollama', 'pgvector', 'SSE Streaming', 'Cloudflare Architecture'],
      bullets: [
        'Built a full-stack project management platform (Next.js, React, TypeScript, Tailwind CSS) with full CRUD for projects, tasks, and notes — using App Router, React Server Components, and Server Actions with NextAuth v4 authentication (bcrypt, JWT) and server-side identity guards on all data access via Prisma 7 ORM over PostgreSQL.',
        'Architected a Next.js + FastAPI hybrid backend — Next.js owns auth, UI, and data mutations while a separate async FastAPI service owns the AI/embedding pipeline, communicating over Docker\'s internal network with token-by-token SSE streaming proxied through an auth-enforced API route.',
        'Architected a dual-path inference engine featuring an agentic tool-calling loop (Gemma 4) and a fallback pipeline; implemented tool executor for semantic searches, structured DB queries, and full CRUD operations.',
        'Built a multiplexed streaming protocol that surfaced Ollama generation metrics and tool-call events in real time, supporting mixed workloads on Gemma 4 with thinking mode and up to 5 tool-calling iterations on RTX 5070, reaching ~185 tokens/s in throughput.',
      ],
    },
  ],
  education: [
    {
      id: 'mahidol',
      institution: 'Mahidol University',
      degree: 'Bachelor of Engineering in Biomedical Engineering',
      gpa: 'GPA: 3.99/4.00 (First Class Honors)',
      period: '2021 – 2025',
      honors: [
        'English – IELTS Academic 8.0',
        'Academic Excellence Medal - EIT',
        'Merit Scholarship (Faculty of Engineering)',
      ],
    },
  ],
};
