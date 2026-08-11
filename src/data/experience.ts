import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-infinite-tech",
    role: "Senior Software Developer",
    company: "Infinite Tech",
    location: "Batam, Indonesia",
    period: "Feb 2026 – Present",
    summary: "Leading backend engineering, warehouse management RF scanning systems, and cross-platform mobile infrastructure with focus on real-time transaction accuracy, resilience, and operational observability.",
    achievements: [
      "Engineered industrial RF Scanner mobile applications for real-time warehouse inventory movement, stock receiving, and barcode dispatch.",
      "Architected backend microservices in Java Spring Boot & Next.js for high-speed transaction handling with Oracle database optimization.",
      "Established Docker-based container deployment pipelines and CI/CD workflows, cutting deployment friction and improving build reliability.",
      "Implemented comprehensive root-cause analysis (RCA) and Grafana monitoring for critical supply chain API endpoints."
    ],
    technologies: ["Java", "Spring Boot", "React", "Next.js", "React Native", "Oracle DB", "REST APIs", "Docker", "CI/CD", "Observability", "Grafana"],
    expandedDetails: {
      systemScope: "Mission-critical logistics & warehouse management systems operating under high concurrency and rugged industrial hardware constraints.",
      keyDeliverables: [
        "High-performance RF Barcode scanner module with offline transaction queuing and auto-reconciliation.",
        "Integrated Spring Boot REST APIs with PL/SQL stored procedures for microsecond inventory validation.",
        "System reliability dashboard using Grafana metrics and alerting for network latency spikes on warehouse floor devices."
      ],
      observabilityAndReliability: "Integrated structured logging and Grafana metrics to catch database transaction locks and network disconnections in real-time."
    }
  },
  {
    id: "exp-cpr-vision",
    role: "Software Developer",
    company: "CPR Vision Management",
    location: "Singapore",
    period: "Oct 2020 – Jan 2026",
    clientContext: "L'Oréal Regional Brand Digital & E-Commerce Platforms (APAC)",
    summary: "Developed enterprise full-stack platforms, POS integrations, and automated marketing API synchronization for major global cosmetics and beauty brands under L'Oréal in Singapore and regional markets.",
    achievements: [
      "Built and maintained high-throughput enterprise backend services using Java, Spring Boot, and TypeScript.",
      "Integrated POS (Point of Sale) systems with regional e-commerce channels including Lazada, Shopee, and Salesforce Marketing Cloud.",
      "Optimized Microsoft SQL Server database queries and stored procedures for consumer loyalty transactions handling millions of API calls.",
      "Maintained zero-downtime microservice pipelines using Docker, CI/CD, and Grafana system health alerts."
    ],
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "Microsoft SQL Server", "Grafana", "Docker", "CI/CD", "POS Integrations", "Lazada API", "Shopee API", "Salesforce Marketing Cloud", "OAuth2", "JWT"],
    expandedDetails: {
      systemScope: "Regional omni-channel e-commerce, consumer loyalty management, and multi-tenant brand APIs for L'Oréal Asia-Pacific.",
      keyDeliverables: [
        "Real-time event synchronization engine bridging brick-and-mortar retail POS terminals with online marketplace inventory.",
        "Salesforce Marketing Cloud journey automation API with secure OAuth2 and encrypted payload validation.",
        "Custom Grafana dashboard monitoring API error rates, queue depths, and token expiration lifecycles."
      ],
      observabilityAndReliability: "Established proactive Grafana alerting for marketplace API rate limits and token renewal failures, preventing transaction drops."
    }
  },
  {
    id: "exp-imtek",
    role: "Independent Software Developer / Contractor",
    company: "Imtek Media Data",
    location: "Indonesia",
    period: "Jan 2020 – Dec 2025",
    summary: "Delivered full-cycle software solutions across web, mobile, and cloud environments for corporate and institutional clients, managing complete engineering roadmaps from architecture to App Store/Google Play deployment.",
    achievements: [
      "Designed and deployed custom cross-platform mobile apps using React Native, Node.js, Python, and PHP/Laravel.",
      "Configured production database topologies across PostgreSQL, MySQL, NoSQL, and Redis caching layers.",
      "Managed Linux VPS server environments with Nginx reverse proxying, SSL termination, and Docker containerization.",
      "Successfully launched and maintained production mobile applications on Google Play Store and Apple App Store."
    ],
    technologies: ["React", "React Native", "Node.js", "Python", "PHP / Laravel", "PostgreSQL", "MySQL", "NoSQL", "Docker", "CI/CD", "WordPress", "Linux", "Nginx", "App Store", "Google Play"],
    expandedDetails: {
      systemScope: "End-to-end client applications, custom CMS engines, high-concurrency mobile backends, and cloud server provisioning.",
      keyDeliverables: [
        "Modular Laravel & React web portals with role-based access control (RBAC) and audit logging.",
        "React Native mobile clients optimized for smooth 60fps UI performance and offline state persistence.",
        "Automated deployment scripts for Linux VPS using Docker Compose and Nginx configuration."
      ],
      observabilityAndReliability: "Implemented automated uptime monitoring, Nginx access log parsers, and failover database backup cron jobs."
    }
  },
  {
    id: "exp-boon-software",
    role: "Software Developer",
    company: "Boon Software",
    location: "Singapore",
    period: "Oct 2018 – Oct 2020",
    summary: "Maintained, enhanced, and resolved defects across core enterprise systems, including Warehouse Management System (WMS), Order Management System (OMS), and Logistics Management System (LMS).",
    achievements: [
      "Maintained, enhanced, and resolved defects across core enterprise systems, including Warehouse Management System (WMS), Order Management System (OMS), and Logistics Management System (LMS).",
      "Designed, developed, and upgraded reporting solutions using JasperReports and Oracle Reports, improving data accuracy and business visibility.",
      "Collaborated directly with clients and branch managers to gather requirements, troubleshoot issues, and plan new feature development.",
      "Managed source code and version control processes using SVN, ensuring stable and trackable releases.",
      "Led development initiatives and contributed to project planning, delivery timelines, and technical decision-making.",
      "Supported onboarding and mentoring of new staff and interns, accelerating team productivity and knowledge transfer.",
      "Participated in system upgrades and performance optimization across database and application layers."
    ],
    technologies: ["Java", "React.js", "Oracle PL/SQL", "JasperReports", "Oracle Reports", "SVN", "Ubuntu", "WMS / OMS / LMS"],
    expandedDetails: {
      systemScope: "Enterprise Warehouse Management System (WMS), Order Management System (OMS), and Logistics Management System (LMS) serving Singapore and regional enterprise clients.",
      keyDeliverables: [
        "Upgraded and expanded reporting suite built with JasperReports and Oracle Reports for critical warehouse visibility.",
        "Performance optimization across Oracle PL/SQL database procedures and application layer modules.",
        "SVN version control governance and release management for multi-branch software deployments."
      ],
      observabilityAndReliability: "Conducted systematic defect resolution, database query optimization, and client requirement analysis to maintain robust WMS/OMS operational continuity."
    }
  },
  {
    id: "exp-freelance-it",
    role: "IT Support & Infrastructure Specialist",
    company: "Freelance",
    location: "Batam, Indonesia",
    period: "Oct 2018 – Oct 2019",
    summary: "Provided specialized IT infrastructure, network security, and hardware system setup for regional business networks.",
    achievements: [
      "Configured enterprise local networking, IP forwarding rules, DMZ security zones, and remote connection gateways.",
      "Deployed Synology NAS data storage servers with automated backup routines and multi-user access permissions.",
      "Troubleshot hardware and system-level bottlenecks to ensure continuous uptime for client operations."
    ],
    technologies: ["Hardware", "Networking", "IP Forwarding", "DMZ", "NAS", "Synology", "System Diagnostics", "Network Security"],
    expandedDetails: {
      systemScope: "Physical and virtual network topologies, secure local server environments, and centralized data storage.",
      keyDeliverables: [
        "Structured LAN cabling and managed switch network architecture.",
        "RAID array setup and Synology NAS disaster recovery strategy."
      ]
    }
  },
  {
    id: "exp-advantis",
    role: "Senior IT Support",
    company: "Advantis Sentra Technology",
    location: "Batam, Indonesia",
    period: "Oct 2016 – Oct 2018",
    summary: "Managed enterprise IT infrastructure, server administration, disaster recovery, and vendor relationships for technical operations.",
    achievements: [
      "Supervised corporate LAN/WAN server environments, network switches, and firewall security configurations.",
      "Implemented enterprise disaster recovery plans and automated data backup schedules.",
      "Provided technical leadership and vendor management for infrastructure procurement and hardware upgrades."
    ],
    technologies: ["Infrastructure", "LAN / WAN", "Server Administration", "NAS Storage", "Disaster Recovery", "IT Operations", "Vendor Management", "Technical Leadership"],
    expandedDetails: {
      systemScope: "Corporate IT systems, multi-site network infrastructure, and mission-critical server environments.",
      keyDeliverables: [
        "System maintenance schedules reducing network downtime across office locations.",
        "Enterprise backup procedures ensuring business continuity."
      ]
    }
  }
];
