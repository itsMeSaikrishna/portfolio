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
    duration: 'Nov 2021 - May 2025',
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
    title: 'Invoice Automation System',
    description: 'Automated invoice processing system for real-world use. Takes PDF invoices (scanned + text-based), automatically detects type, uses OCR for scanned invoices and LLM with Pydantic schema for reliable data extraction. Built to help my mom\'s tax practice reduce manual data entry from 200+ bills per firm.',
    tech: ['Python', 'OCR', 'LangChain', 'Pydantic', 'Pandas', 'Streamlit'],
    demoUrl: 'https://itsmesaikrishna-invoice-extractor-app-6af989.streamlit.app',
    githubUrl: 'https://github.com/itsMeSaikrishna/invoice-extractor',
  },
  {
    id: 2,
    title: 'JSON Output Fixer for LangChain',
    description: 'A self-healing JSON output fixer for LangChain using Pydantic and recursion. Instead of failing on validation errors, the LLM fixes its own output through recursive validation with safety limits. Plug-and-use solution that integrates seamlessly into LangChain pipelines.',
    tech: ['Python', 'LangChain', 'Pydantic', 'LLaMA'],
    githubUrl: 'https://github.com/itsMeSaikrishna/json-output-fixer-langchain',
  },
  {
    id: 3,
    title: 'YouTube Sentiment Analyzer',
    description: 'Product recommendation tool that analyzes sentiment in YouTube comment sections to evaluate and compare products. FastAPI backend processes comments using DistilBERT model for accurate sentiment classification, helping users make data-driven purchase decisions.',
    tech: ['Python', 'FastAPI', 'DistilBERT', 'Streamlit', 'NLP'],
    demoUrl: 'https://youtube-sentiment-analyzer-chi.vercel.app',
    githubUrl: 'https://github.com/itsMeSaikrishna/youtube-sentiment-analyzer',
  },
  {
    id: 4,
    title: 'Full-Stack Lead Management CRM',
    description: 'Complete lead management system for streamlined lead acquisition, tracking, and categorization. Features dynamic dashboard, automated status tracking from "New" to "Qualified", and relational data mapping with a clean minimalist UI.',
    tech: ['ReactJS', 'TailwindCSS', 'Django', 'DRF', 'MySQL'],
    githubUrl: 'https://github.com/itsMeSaikrishna/CRM',
  },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Streamlit'],
  },
  {
    category: 'Backend',
    items: ['Django', 'FastAPI', 'Django REST Framework'],
  },
  {
    category: 'AI/ML',
    items: ['LangChain', 'Hugging Face', 'DistilBERT', 'NLP', 'OCR', 'Pydantic'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'PowerBI', 'Linux'],
  },
  {
    category: 'Currently Learning',
    items: ['System Design', 'Vertex AI', 'MCP', 'Advanced LangChain'],
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
