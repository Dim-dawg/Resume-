import { Brain, Settings, Database, Code, Activity, Shield, Layout, Zap, Terminal } from 'lucide-react';

export const techCapabilities = [
  {
    category: "AI & Intelligent Systems",
    icon: Brain,
    items: [
      "AI-powered assistants for support & operations",
      "Retrieval-Augmented Generation (RAG) implementation",
      "Prompt design & AI workflow orchestration",
      "AI-assisted decision support & data summarization"
    ]
  },
  {
    category: "Automation & Backend",
    icon: Settings,
    items: [
      "Google Sheets as structured structured backends",
      "Google Apps Script automation & integrations",
      "MySQL & structured data architecture",
      "API-based data flows & system connections"
    ]
  },
  {
    category: "Applications & Interfaces",
    icon: Layout,
    items: [
      "Lightweight web applications (React, TS)",
      "Internal dashboards & admin tools",
      "Secure forms & data pipelines",
      "AI-enhanced user interfaces"
    ]
  }
];

export const projects = [
  {
    title: "Sneak Peek AI Platform",
    problem: "Static e-commerce sites lack the interactive guidance of a real salesperson.",
    solution: "Built a fully browser-based shopping platform with an embedded AI concierge that interacts with product data in real-time.",
    tech: ["React", "Gemini 2.5", "Local Logic"],
    impact: "Live proof-of-concept for zero-latency AI web integration.",
    link: "https://cipherv2.netlify.app/"
  },
  {
    title: "Support Ticket AI Triaging",
    problem: "Customer support team was overwhelmed by manual ticket categorization, leading to slow response times.",
    solution: "Designed an automated pipeline using Apps Script to ingest emails, analyze intent via Gemini API, and route to appropriate departments.",
    tech: ["Google Apps Script", "Gemini API", "Gmail API"],
    impact: "Substantially reduced triage time and optimized routing accuracy."
  },
  {
    title: "Inventory Intelligence Dashboard",
    problem: "Warehouse managers struggled to predict stock outages using static spreadsheets.",
    solution: "Built a React-based dashboard connecting directly to MySQL that uses historical data trends to forecast demand.",
    tech: ["React", "MySQL", "Node.js", "Chart.js"],
    impact: "Consistently prevented projected stock-outs and visualized real-time velocity metrics."
  },
  {
    title: "Legal Document RAG System",
    problem: "Legal team spent hours searching through PDF contracts for specific clauses.",
    solution: "Developed an internal retrieval tool that indexes PDF text into vector storage, allowing natural language queries.",
    tech: ["Python", "Vector DB", "OpenAI API", "Streamlit"],
    impact: "Significantly reduced document review time per case file."
  }
];

export const experience = [
  {
    title: "Sneak Peek — AI-Enhanced Website",
    description: "Sneak Peek is an AI-integrated website designed to demonstrate how artificial intelligence can operate directly within a live web environment. The site includes an embedded AI assistant capable of interacting with structured product data, responding to user queries, and supporting discovery through natural language input.\n\nThe system is built around clean data structures that allow the AI to retrieve, summarize, and present information accurately. Automation logic connects the website interface to backend data sources, enabling dynamic responses without manual intervention.\n\nThis project highlights the use of AI as a functional layer inside a website rather than a standalone tool.",
    link: "https://cipherv2.netlify.app/"
  },
  {
    title: "DimDawg Finance — AI-Driven Financial Website",
    description: "DimDawg Finance is an AI-powered website focused on analyzing and interpreting financial data. The platform uses spreadsheets as the primary data engine, with automated calculations and structured logic feeding AI-generated summaries and insights.\n\nThe system demonstrates how spreadsheets can evolve beyond static tables into live analytical backends that support forecasting, summaries, and decision-oriented outputs through an AI interface."
  },
  {
    title: "Spreadsheet Versatility",
    description: "Spreadsheets are a core architectural component in my systems. I use them as structured backends, automation drivers, and administrative control panels. This includes designing complex formulas, validation logic, and automated scripts that transform unstructured inputs into reliable, queryable data.\n\nThis approach allows systems to remain transparent, adaptable, and easy to maintain while still supporting AI-driven workflows and web-based interfaces."
  }
];

export const skills = [
  "AI System Design",
  "Prompt Engineering",
  "Workflow Automation",
  "Google Apps Script",
  "React & TypeScript",
  "SQL / Database Design",
  "API Integration",
  "Technical Documentation"
];