import { ArchitectureNode } from '../types';

export const architectureNodes: ArchitectureNode[] = [
  {
    id: "clients",
    label: "Client Applications",
    sublabel: "Web & Mobile Interfaces",
    tech: ["React", "Next.js", "React Native", "Expo"],
    description: "Responsive, touch-optimized web dashboards and handheld RF mobile scanner clients built with offline state persistence and sub-second UI feedback.",
    status: "high-throughput",
    details: "Sub-100ms UI responsiveness, touch targets for warehouse environments, SSR/SSG rendering for enterprise portals."
  },
  {
    id: "gateway",
    label: "API Gateway & Security",
    sublabel: "Authentication & Rate Limiting",
    tech: ["Spring Security", "Node Gateway", "JWT", "OAuth2"],
    description: "Centralized entry layer handling OAuth2 token validation, TLS termination, RBAC permission enforcement, and marketplace API rate limiting.",
    status: "operational",
    details: "Validates requests from L'Oréal e-commerce platforms, POS terminals, and mobile devices before routing."
  },
  {
    id: "services",
    label: "Domain Microservices",
    sublabel: "Business Logic & Integrations",
    tech: ["Java Spring Boot", "Express", "Laravel"],
    description: "Containerized Java & Node microservices orchestrating inventory reconciliation, order processing, POS sync, and third-party webhooks.",
    status: "high-throughput",
    details: "Decoupled domain services designed for fault tolerance, automatic retry queues, and low memory overhead."
  },
  {
    id: "storage",
    label: "Databases & Caching",
    sublabel: "Data Persistence & Speed",
    tech: ["Oracle DB", "MSSQL", "PostgreSQL", "Redis"],
    description: "Optimized relational storage with PL/SQL stored procedures, combined with in-memory Redis caching for peak traffic protection.",
    status: "operational",
    details: "ACID compliance for monetary/loyalty transactions, query execution plan tuning, and cache hit ratios exceeding 90%."
  },
  {
    id: "observability",
    label: "Observability & Infra",
    sublabel: "Monitoring & Reliability",
    tech: ["Grafana", "Docker", "CI/CD", "Linux Nginx"],
    description: "Continuous telemetry tracking API latency, database locks, error rates, and system resource metrics with automated alerting.",
    status: "monitoring",
    details: "Grafana boards with proactive Slack/Email alerts for anomaly detection before user impact."
  }
];
