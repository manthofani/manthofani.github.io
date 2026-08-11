import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: "backend",
    categoryName: "Backend & Systems Architecture",
    iconName: "Server",
    skills: [
      { name: "Java", level: "Advanced", highlight: true, description: "Core language for enterprise microservices" },
      { name: "Spring Boot", level: "Advanced", highlight: true, description: "RESTful microservices, Security, Spring Data JPA" },
      { name: "Node.js / Express", level: "Advanced", highlight: true, description: "Asynchronous APIs and gateway services" },
      { name: "PHP / Laravel", level: "Proficient", description: "MVC Web portals, queue workers, Eloquent ORM" },
      { name: "REST APIs & Webhooks", level: "Advanced", highlight: true, description: "Contract design, rate-limiting, OAuth2 auth" },
      { name: "Microservices", level: "Advanced", description: "Decoupled domain services and IPC" },
      { name: "Event-Driven & GraphQL", level: "Proficient", description: "Async event streams & flexible API querying" }
    ]
  },
  {
    id: "languages",
    categoryName: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Java", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
      { name: "SQL (PL/SQL, T-SQL)", level: "Advanced", highlight: true },
      { name: "Python", level: "Proficient" },
      { name: "PHP", level: "Proficient" },
      { name: "Bash / Shell Scripting", level: "Proficient" }
    ]
  },
  {
    id: "frontend-mobile",
    categoryName: "Frontend & Mobile Engineering",
    iconName: "Smartphone",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true, description: "Custom hooks, state management, memoization" },
      { name: "Next.js", level: "Advanced", highlight: true, description: "App Router, SSR/SSG, Server Components" },
      { name: "React Native", level: "Advanced", highlight: true, description: "Cross-platform iOS/Android, physical RF hardware" },
      { name: "Expo", level: "Proficient", description: "Managed React Native toolchain & native modules" },
      { name: "Tailwind CSS", level: "Advanced", highlight: true, description: "Utility-first design systems & responsive UI" },
      { name: "HTML5 / CSS3 / Motion", level: "Advanced", description: "Accessible semantic structure & GPU animations" }
    ]
  },
  {
    id: "databases",
    categoryName: "Databases & Storage",
    iconName: "Database",
    skills: [
      { name: "Oracle DB / PL/SQL", level: "Advanced", highlight: true, description: "Stored procedures, complex joins, query tuning" },
      { name: "Microsoft SQL Server", level: "Advanced", highlight: true, description: "T-SQL, indexing strategies, POS sync" },
      { name: "PostgreSQL", level: "Advanced", highlight: true, description: "JSONB columns, ACID compliance, query plans" },
      { name: "MySQL / MariaDB", level: "Advanced", description: "Relational schema design and indexing" },
      { name: "Redis / NoSQL", level: "Proficient", highlight: true, description: "In-memory caching and session key-value stores" }
    ]
  },
  {
    id: "devops-observability",
    categoryName: "DevOps, Infra & Observability",
    iconName: "Cpu",
    skills: [
      { name: "Docker & Compose", level: "Advanced", highlight: true, description: "Containerization & multi-stage Dockerfiles" },
      { name: "CI/CD Pipelines", level: "Advanced", highlight: true, description: "Automated test, build, and container deployment" },
      { name: "Grafana & Metrics", level: "Advanced", highlight: true, description: "Production dashboards, latency & error monitoring" },
      { name: "Root Cause Analysis (RCA)", level: "Advanced", highlight: true, description: "Log parsing, thread dumps, stack trace triage" },
      { name: "Linux / Ubuntu / Nginx", level: "Advanced", description: "Server administration, SSL termination, reverse proxy" },
      { name: "AWS / Azure / K8s Basics", level: "Core", description: "Cloud VM provisioning & container orchestation fundamentals" }
    ]
  },
  {
    id: "integrations-security",
    categoryName: "Enterprise Integrations & Security",
    iconName: "ShieldCheck",
    skills: [
      { name: "POS Systems Integration", level: "Advanced", highlight: true, description: "Retail POS terminal synchronization with cloud APIs" },
      { name: "Marketplace APIs (Lazada, Shopee)", level: "Advanced", highlight: true, description: "E-commerce order & stock sync for L'Oréal platforms" },
      { name: "Salesforce Marketing Cloud", level: "Proficient", description: "Automated journey triggers and subscriber API feeds" },
      { name: "RF Hardware & Barcodes", level: "Advanced", highlight: true, description: "Handheld scanner integration for industrial logistics" },
      { name: "Authentication (JWT / OAuth2 / RBAC)", level: "Advanced", highlight: true, description: "Role-based security & stateless token auth" }
    ]
  }
];
