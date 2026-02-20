import { Project, Experience, Education, Certification, Skill, SocialLink } from '@/types';

export const siteConfig = {
  name: 'Sai Krishnan',
  fullName: 'Sai Krishnan R',
  title: 'Aspiring Product Engineer',
  tagline: 'Building practical AI solutions that remove real-world friction',
  bio: `A passionate developer from Kerala focused on building practical AI-powered solutions and full-stack applications. Currently exploring High-Level Design (HLD), System design, and Backend engineering with AI 

I don't build AI for buzzwords—I build it to quietly remove friction from everyday tasks. From automating invoice processing for my mom's tax practice to creating self-healing JSON parsers for LLMs, I enjoy solving real problems through code.

Recently completed hands-on work in Generative AI, with a focus on LangChain, LangGraph, agentic AI workflows, and FastAPI, building LLM-powered APIs and orchestration pipelines with real-world constraints in mind.. Currently diving deep into High-Level Design (HLD) and exploring Anthropic's AI technologies through hands-on certification programs.

Always learning. Always building.`,
  email: 'sai.krishna7663@gmail.com',
  location: 'Kerala, India',
  currentStatus: 'CS Undergraduate',
  university: 'APJ Abdul Kalam Technological University',
  gpa: '7.25',
  currentlyLearning: ['System Design (HLD)', 'Anthropic AI Technologies'],
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Inmakes Infotech',
    role: 'Fullstack Developer Intern',
    duration: 'Sept 2024 - Dec 2024',
    location: 'Kochi, Kerala',
    achievements: [
      'Completed Python full-stack internship focusing on Django backend and ReactJS frontend integration',
      'Deepened understanding of core Python functions, modular programming, and logic structuring',
      'Worked with MySQL for database management and RESTful API development',
      'Applied full-stack knowledge to solve real-world problems and contribute to dynamic features',
    ],
  },
  {
    id: 2,
    company: 'Mahaguru Institute of Technology',
    role: 'CS Association Coordinator (LOGIX-2024)',
    duration: 'Aug 2024 - Oct 2024',
    location: 'Kerala',
    achievements: [
      'Coordinated LOGIX-2024 association events',
      'Conducted programs including Robo Expo, Virtual Reality showcases, and gaming events',
      'Managed event logistics and team coordination',
    ],
  },
];

export const education: Education[] = [
  {
    id: 1,
    institution: 'APJ Abdul Kalam Technological University',
    degree: 'Bachelor of Technology - Computer Science',
    duration: 'Nov 2021 - Jun 2025',
    gpa: '7.25',
    courses: [
      'Operating Systems',
      'Data Structures',
      'Analysis of Algorithms',
      'Computer Architecture',
      'Networking',
      'Databases',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'DualForge',
    description: 'Autonomous multi-agent orchestration CLI that runs two AI agents in a self-improving coder↔validator feedback loop — implementing the same agent role architecture as CrewAI and AutoGen, built from scratch without framework abstraction. Claude Code acts as the autonomous Coder agent (plans, implements modules, writes tests) while Gemini CLI acts as the Validator agent (reviews code, scores 1-10 via rubric, returns structured markdown feedback). Agents reason and act independently per-module until approval threshold (score ≥ 8/10) is met, then advance to the next module in topological dependency order. Features filesystem-based zero-infrastructure state management, resumable pipelines from crash points, and a hard 5-round iteration cap preventing runaway agent loops. Ships 6 CLI commands: init, run, status, resume, report, and approve. Demonstrates deep understanding of agentic loop design, agent role separation, and multi-agent planning patterns. Installable via npm install -g dualforge.',
    tech: [
      'TypeScript',
      'Node.js',
      'Commander.js',
      'execa',
      'Claude Code CLI',
      'Gemini CLI',
      'Vitest',
      'tsup',
      'chokidar',
      'yaml',
      'ora',
      'chalk',
    ],
    demoUrl: '',
    githubUrl: 'https://github.com/itsMeSaikrishna/dualforge',
  },
   {
    id: 2,
   title: 'Creative Invoice',
  description: 'Full-stack AI SaaS platform for automated GST invoice processing. Production-grade system with user authentication (Supabase Auth + JWT), isolated data storage (Row Level Security), and Stripe payment integration. Processes scanned and text-based PDFs through Google Document AI (OCR) → Groq Llama 3.3 70B (extraction) → multi-layer validation pipeline. Exports to JSON, Tally-compatible XML, and CSV. Monorepo architecture with async processing, real-time status polling, and comprehensive test suite. Built to eliminate manual data entry for accounting firms handling 200+ invoices per client. Built using Claude Code for rapid backend API development and test suite generation.',
  tech: [
    'React',
    'TypeScript', 
    'Vite',
    'Tailwind CSS',
    'FastAPI',
    'Python',
    'Supabase',
    'PostgreSQL',
    'Google Document AI',
    'Groq LLM',
    'LangChain',
    'Pydantic',
    'JWT',
    'Row Level Security',
    'RazorPay',
    'Pytest',
    'ClaudeCode'
  ],
    demoUrl:'https://creative-invoice-jade.vercel.app/',
    githubUrl: 'https://github.com/itsMeSaikrishna/creative-invoice',
  },
  {
    id: 3,
    title: 'TubeRAG',
    description: 'End-to-end RAG pipeline that indexes YouTube video transcripts into a ChromaDB vector store and answers natural language questions using semantic retrieval + LLM generation. Pipeline: YouTube Transcript API → LangChain text chunking → HuggingFace all-MiniLM-L6-v2 embeddings → ChromaDB similarity search → Groq Llama 3.3 70B streaming response via SSE. Supports multi-video indexing with persistent vector storage so the same video is never re-embedded twice. Retrieves top-k semantically relevant chunks per query and returns answers with source timestamp citations — showing exactly which part of the video the answer came from. Demonstrates full RAG architecture: ingestion, chunking, embedding, retrieval, and augmented generation. Built to enable natural language Q&A over long-form video content without watching the full video.',
    tech: [
      'Python',
      'FastAPI',
      'LangChain',
      'ChromaDB',
      'HuggingFace Embeddings',
      'Groq LLM',
      'YouTube Transcript API',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'SSE',
      'Vite',
    ],
    demoUrl: '',
    githubUrl: 'https://github.com/itsMeSaikrishna/tuberag',
  },
  {
    id: 4,
    title: 'Creative Tax Accounting Software',
    description: 'Production-grade desktop ERP built for Indian tax practitioners — designed to replace legacy accounting tools like Tally for small and mid-size CA firms. Supports unlimited companies with 10,000+ transaction capacity and sub-second voucher save performance. Implements all 8 voucher types with bill-wise FIFO accounting, full GST compliance (GSTR-1, GSTR-3B, GSTR-4, e-invoicing, e-way bills, GSTR-2A/2B reconciliation), and automated bank reconciliation with 95%+ matching accuracy across 4 major bank statement formats. SQLite + Supabase hybrid architecture enables fully offline-first operation with background cloud sync — works without internet, syncs when connected. Built as an Electron desktop app with a React frontend for a native feel with web technology flexibility.',
    tech: [
      'Electron',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'SQLite',
      'Supabase',
      'PostgreSQL',
      'Node.js',
      'Row Level Security',
      'better-sqlite3',
    ],
    demoUrl: '',
    githubUrl: 'https://github.com/itsMeSaikrishna/creative-tax',
  },
 
  {
    id: 5,
    title: 'Invoice Automation System',
    description: 'Automated invoice processing system for real-world use. Takes PDF invoices (scanned + text-based), automatically detects type, uses OCR for scanned invoices and LLM with Pydantic schema for reliable data extraction. Built to help my mom\'s tax practice reduce manual data entry from 200+ bills per firm.',
    tech: ['Python', 'OCR', 'LangChain', 'Pydantic', 'Pandas', 'Streamlit'],
    demoUrl: 'https://itsmesaikrishna-invoice-extractor-app-6af989.streamlit.app',
    githubUrl: 'https://github.com/itsMeSaikrishna/invoice-extractor',
  },
 
  {
    id: 6,
    title: 'YouTube Sentiment Analyzer',
    description: 'Product recommendation tool that analyzes sentiment in YouTube comment sections to evaluate and compare products. FastAPI backend processes comments using Groq api LLama model for accurate sentiment classification, helping users make data-driven purchase decisions.',
    tech: ['Python', 'FastAPI', 'Groq', 'React19', 'NLP'],
    demoUrl: 'https://youtube-sentiment-analyzer-chi.vercel.app',
    githubUrl: 'https://github.com/itsMeSaikrishna/youtube-sentiment-analyzer',
  },
  {
    id: 7,
    title: 'Full-Stack Lead Management CRM',
    description: 'Complete lead management system for streamlined lead acquisition, tracking, and categorization. Features dynamic dashboard, automated status tracking from "New" to "Qualified", and relational data mapping with a clean minimalist UI.',
    tech: ['ReactJS', 'TailwindCSS', 'Django', 'DRF', 'MySQL'],
    githubUrl: 'https://github.com/itsMeSaikrishna/CRM',
  },
   {
    id: 8,
    title: 'JSON Output Fixer for LangChain',
    description: 'A self-healing JSON output fixer for LangChain using Pydantic and recursion. Instead of failing on validation errors, the LLM fixes its own output through recursive validation with safety limits. Plug-and-use solution that integrates seamlessly into LangChain pipelines.',
    tech: ['Python', 'LangChain', 'Pydantic', 'LLaMA'],
    githubUrl: 'https://github.com/itsMeSaikrishna/json-output-fixer-langchain',
  },
  {
  id: 9,
  title: 'Simple Streamlit Chatbot',
  description: 'A minimal ChatGPT-style chatbot built using Streamlit, LangChain, and Hugging Face LLMs. Powered by Meta LLaMA-3-8B-Instruct, it maintains a simple chat history, supports clearing conversations, uses secure environment variable handling, and efficiently loads models with caching.',
  tech: ['Python', 'Streamlit', 'LangChain', 'Hugging Face', 'Meta LLaMA-3'],
  demoUrl: 'https://itsmesaikrishna-simple-streamlit-langchain-chatbot-app-zmnmev.streamlit.app/', 
  githubUrl: 'https://github.com/itsMeSaikrishna/simple-streamlit-langchain-chatbot', 
},
  {
  id: 10,
  title: 'Customer Churn Analysis & Prediction Dashboard',
  description: 'End-to-end customer churn prediction system built using rigorous statistical feature selection and machine learning. Includes deep EDA, hypothesis testing (Mann-Whitney U, Chi-Square), multicollinearity checks with VIF, class imbalance handling using SMOTE-NC, and optimized models (XGBoost, RandomForest) tuned via GridSearchCV. Deployed as an interactive Streamlit dashboard for real-time and batch churn prediction.',
  tech: [
    'Python',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'XGBoost',
    'Imbalanced-learn',
    'SciPy',
    'Statsmodels',
    'Streamlit'
  ],
  demoUrl: 'https://itsmesaikrishna-churn-prediction-app-rdnt2i.streamlit.app/', 
  githubUrl: 'https://github.com/itsMeSaikrishna/Churn_Prediction', 
},
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C', 'SQL'],
  },
  {
    category: 'AI & Agentic',
    items: [
      'LangChain',
      'RAG Pipelines',
      'CrewAI',
      'LLM Orchestration',
      'Prompt Engineering',
      'Autonomous Agents',
      'Multi-Agent Systems',
      'Claude Code',
      'MCP',
    ],
  },
  {
    category: 'AI/ML Models & Tools',
    items: [
      'Groq (Llama 3.3 70B)',
      'HuggingFace',
      'Google Document AI',
      'OCR',
      'Embeddings',
      'Pydantic',
      'NLP',
      'DistilBERT',
    ],
  },
  {
    category: 'Vector & Data',
    items: ['ChromaDB', 'FAISS', 'PostgreSQL', 'MySQL', 'SQLite', 'Supabase'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Django', 'Django REST Framework', 'Node.js', 'JWT Auth', 'SSE'],
  },
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Electron', 'Streamlit'],
  },
  {
    category: 'Tools & Cloud',
    items: ['Git', 'Docker', 'Supabase', 'Vertex AI', 'Linux', 'PowerBI'],
  },
  {
    category: 'Currently Learning',
    items: ['System Design', 'Advanced LangChain', 'AutoGen', 'Reinforcement Learning'],
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: 'Claude Code in Action',
    issuer: 'Anthropic',
    url: '#', // Add your certificate URL here
  },
  {
    id: 2,
    name: 'MCP (Model Context Protocol)',
    issuer: 'Anthropic',
    url: '#', // Add your certificate URL here
  },
  {
    id: 3,
    name: 'Advanced MCP',
    issuer: 'Anthropic',
    url: '#', // Add your certificate URL here
  },
  {
    id: 4,
    name: 'Claude through Google Vertex AI',
    issuer: 'Anthropic',
    url: '#', // Add your certificate URL here
  },
  {
    id: 5,
    name: 'Python Full Stack',
    issuer: 'Inmakes Infotech',
    url: '#', // Add your certificate URL here
  },
  {
    id: 6,
    name: 'Java Programming',
    issuer: 'NPTEL - Government of India',
    url: '#', // Add your certificate URL here
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/itsMeSaikrishna',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sai-krishnan-r-706786250/',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:sai.krishna7663@gmail.com',
    icon: 'mail',
  },
];

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];
