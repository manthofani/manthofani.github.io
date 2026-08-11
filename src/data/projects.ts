import { Project } from '../types';

export const projectsData: Project[] = [
  {
    slug: "rf-scanner-mobile",
    title: "RF Scanner Mobile App",
    category: "Mobile",
    shortDescription: "Cross-platform industrial warehouse application for real-time inventory lookup, barcode scanning, and stock movement transactions.",
    fullDescription: "A rugged, mission-critical mobile solution designed for warehouse staff using physical handheld RF scanners and mobile devices. Engineered to operate flawlessly in industrial environments with fluctuating network coverage, facilitating instant inventory reconciliation, goods receiving, and transfer validation against Microsoft SQL Server backends.",
    technologies: ["React Native", "Microsoft SQL Server", "REST APIs", "TypeScript", "Barcode SDK", "Offline Queuing"],
    year: "2026",
    featured: true,
    highlights: [
      "Sub-100ms barcode parsing and instant stock verification against MSSQL database.",
      "Offline transactional buffer with auto-reconciliation upon Wi-Fi reconnect.",
      "Optimized touch UI tailored for single-handed industrial barcode scanner hardware."
    ],
    architectureNotes: "React Native UI layer communicating via encrypted REST endpoints to Spring Boot / Express microservices backed by stored procedure validations.",
    metrics: ["100% stock movement tracking accuracy", "Zero transaction loss during network dropouts"]
  },
  {
    slug: "pdf-studio",
    title: "PDF Studio Utility App",
    category: "Mobile",
    shortDescription: "Mobile document utility application for viewing, annotating, managing, and securely sharing PDF files on iOS and Android.",
    fullDescription: "Designed and built using Expo and React Native, PDF Studio provides mobile professionals with desktop-grade document tools on smartphones and tablets. It includes vector page rendering, highlight and freehand annotation tools, page re-ordering, file compression, and encrypted local storage.",
    technologies: ["Expo", "React Native", "TypeScript", "PDF Engine", "File System API", "iOS / Android"],
    year: "2025",
    featured: true,
    highlights: [
      "Smooth multi-page PDF rendering with touch-optimized zoom and pinch gestures.",
      "In-app vector drawing and digital signature placement.",
      "Integrated cross-platform native file sharing and cloud drive sync."
    ],
    architectureNotes: "Leverages native C++ PDF rendering bindings wrapped in a responsive React Native state pipeline for minimal RAM footprint."
  },
  {
    slug: "i-cerdas-mobile",
    title: "I-Cerdas Mobile Platform",
    category: "Mobile",
    shortDescription: "Cross-platform mobile application optimized for ultra-fast response times using Redis memory caching and streamlined payload design.",
    fullDescription: "A feature-rich education and information app built with React Native CLI. Designed to handle peak traffic during exam and announcement periods by offloading heavy relational queries to an in-memory Redis layer, delivering smooth 60fps interaction and near-instant content feeds.",
    technologies: ["React Native CLI", "Redis", "Node.js", "PostgreSQL", "REST APIs", "TypeScript"],
    year: "2024",
    featured: true,
    highlights: [
      "Redis caching layer reducing database server query load by up to 75%.",
      "Dynamic payload compression ensuring fast loading over 3G/4G cellular networks.",
      "Clean modular component layout with state management powered by Zustand."
    ],
    architectureNotes: "Node.js API gateway with Redis write-through cache feeding a React Native client."
  },
  {
    slug: "ppdb-admission-system",
    title: "PPDB — Student Admission System",
    category: "Web & Enterprise",
    shortDescription: "Enterprise web portal supporting student registration, document validation workflows, and role-based administrative control.",
    fullDescription: "A web-based student admission platform developed with PHP/Laravel and MySQL. It automates complex enrollment workflows, applicant score calculations, document verification queues, administrative approval levels, and real-time public admission ranking boards.",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "RBAC", "Form Validation", "PDF Export"],
    year: "2023",
    featured: true,
    liveUrl: "https://spmb-kuburayakab.id/",
    highlights: [
      "Strict Role-Based Access Control (RBAC) separating applicants, verification officers, and headmasters.",
      "Automated document verification system with status notification triggers.",
      "High-concurrency database indexing for real-time ranking leaderboards during submission deadlines."
    ],
    architectureNotes: "Monolithic Laravel architecture with queued background job processing for email alerts and score calculations."
  },
  {
    slug: "nexa-hr",
    title: "Nexa HR Management System",
    category: "Web & Enterprise",
    shortDescription: "Modern HR management web application built with Next.js for employee records, department structures, and core HR workflows.",
    fullDescription: "A clean, modern human resource management platform designed for fast organizational administration. Offers employee onboarding modules, leave request tracking, organizational chart rendering, and structured personnel reporting.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API", "Lucide Icons"],
    year: "2025",
    featured: true,
    liveUrl: "https://nexa-hr.temanservices.cloud/", // Marked as live showcase
    highlights: [
      "Responsive editorial layout built with Next.js App Router and Server Components.",
      "Interactive organizational tree view and employee profile card management.",
      "Exportable HR compliance summaries and real-time department headcount metrics."
    ],
    architectureNotes: "Next.js server-rendered views with optimistic UI updates for instant administrative feedback."
  },
  {
    slug: "stock-opname",
    title: "Stock Opname & Inventory Platform",
    category: "Systems & Integrations",
    shortDescription: "Inventory tracking and stock-opname application supporting stock reconciliation, structured data entry, and variance reporting.",
    fullDescription: "Built with Next.js and TypeScript, Stock Opname enables retail and warehouse teams to conduct physical stock counts, calculate variance against system records, generate audit reports, and stream real-time reconciliation summaries to central management.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts / D3", "Excel / PDF Generator"],
    year: "2025",
    featured: true,
    liveUrl: "https://stock-opname.temanservices.cloud/", // Marked as live showcase
    highlights: [
      "Real-time stock variance detection and visual highlighting for quick audit resolution.",
      "Bulk barcode CSV import/export with client-side validation.",
      "Executive summary charts detailing shrinkage rates and inventory asset value."
    ],
    architectureNotes: "Full-stack Next.js app utilizing memoized grid calculations for thousands of inventory SKUs."
  }
];
