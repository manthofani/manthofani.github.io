import { EngineeringPrinciple } from '../types';

export const philosophyPrinciples: EngineeringPrinciple[] = [
  {
    id: "build-for-production",
    title: "Build for Production",
    tagline: "Software must survive real users, peak traffic, and network realities.",
    description: "Writing code that passes unit tests in local dev is only 30% of the job. True engineering means building defensive validation, transaction handling, offline fallbacks, and failure boundaries that survive real operational stress.",
    iconName: "ShieldAlert"
  },
  {
    id: "diagnose-before-rewriting",
    title: "Diagnose Before Rewriting",
    tagline: "Metrics and Root Cause Analysis over speculative code churn.",
    description: "When performance or reliability drops, I inspect thread dumps, database query execution plans, and Grafana trace metrics first. Refactoring without profiling is guesswork; targeted diagnosis yields lasting performance gains.",
    iconName: "Stethoscope"
  },
  {
    id: "keep-systems-observable",
    title: "Keep Systems Observable",
    tagline: "A production system should continuously explain its internal state.",
    description: "Every microservice and database query should emit structured telemetry. With Grafana dashboards and proactive alerts, operational issues are detected and remediated before end users even notice a glitch.",
    iconName: "Activity"
  },
  {
    id: "optimize-where-it-matters",
    title: "Optimize Where It Matters",
    tagline: "Surgical tuning across DB queries, API latency, and UI renders.",
    description: "Premature optimization wastes time, but ignoring query indexing or unthrottled API polls degrades user experience. I focus optimization on high-cardinality database joins, network payloads, and 60fps mobile frame rates.",
    iconName: "Zap"
  },
  {
    id: "automate-delivery",
    title: "Automate Delivery Pipelines",
    tagline: "Standardized Docker containers and repeatable CI/CD.",
    description: "Manual server deployments introduce human error. By wrapping services in multi-stage Docker containers and enforcing automated CI/CD builds, deployments become routine, reliable, and instantaneous.",
    iconName: "GitBranch"
  },
  {
    id: "ai-engineering-multiplier",
    title: "AI as an Engineering Multiplier",
    tagline: "Accelerating execution while preserving strict human oversight.",
    description: "I leverage AI coding assistants to speed up exploration, boilerplate generation, unit test coverage, and documentation—while maintaining complete ownership over system architecture, code review, and production safety.",
    iconName: "Sparkles"
  }
];
