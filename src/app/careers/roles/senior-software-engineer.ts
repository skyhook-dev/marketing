import { Job } from "./types";

export const seniorSoftwareEngineer: Job = {
  id: "senior-software-engineer",
  title: "Senior Software Engineer",
  department: "Engineering",
  location: "Remote / Hybrid (Tel Aviv)",
  type: "Full-time",
  description:
    "Join our core engineering team and help build the future of developer platforms. You'll ship fast, work with cutting-edge tech, and have real ownership from day one.",
  content: {
    overview: `We're looking for a Senior Software Engineer who wants to build, not just maintain. Someone who gets excited about shipping features that real users touch, not sitting in meetings about roadmaps.

You'll be joining a small team where everyone has outsized impact. No layers of management, no months-long planning cycles. You'll write code that goes to production this week, talk to customers, and shape the product direction.

We're building with modern tools – TypeScript, Go, Kubernetes, and we're heavy users of AI coding assistants (Claude Code, Cursor). We're also building AI agents into our platform. If you're excited about the intersection of developer tools and AI, this is the place.`,
    responsibilities: [
      {
        title: "Build & Ship",
        items: [
          "Design and implement core platform features end-to-end – from database to UI",
          "Own entire features from idea to production, not just tickets handed down from above",
          "Work directly with customers to understand pain points and build solutions",
          "Ship incrementally – we'd rather have something good in users' hands today than perfect in 3 months",
        ],
      },
      {
        title: "Technical Leadership",
        items: [
          "Make architectural decisions that balance speed with maintainability",
          "Help define technical direction and best practices as we scale",
          "Review code and help level up the team (and be open to the same from others)",
          "Debug hard problems across the stack – cloud infra, Kubernetes, backend, frontend",
        ],
      },
      {
        title: "AI-Native Development",
        items: [
          "Use AI coding tools daily to move faster (we use Claude Code, Cursor, and others)",
          "Help build AI agents that automate DevOps workflows for our customers",
          "Experiment with new AI capabilities and figure out how they can improve our product",
        ],
      },
      {
        title: "Startup Stuff",
        items: [
          "Wear multiple hats – some days you're architecting, some days you're fixing a customer's urgent issue",
          "Contribute to product decisions, not just implementation",
          "Help us figure out what to build next, not just how to build it",
        ],
      },
    ],
    requirements: [
      "5+ years of professional software engineering experience",
      "Strong with TypeScript or Go (ideally both, but depth in one works)",
      "Experience with cloud platforms (GCP, AWS, or Azure) and containerized environments",
      "You've shipped products that real users depend on, not just internal tools or prototypes",
      "Comfortable working across the stack – you don't throw things over the wall",
      "Strong debugging skills – you can dig into a production issue and figure out what's wrong",
      "Clear written and verbal communication – we're remote-first and async-heavy",
    ],
    niceToHave: [
      "Experience with Kubernetes – operating it, building on it, or building tools for it",
      "Background in developer tools, DevOps, or platform engineering",
      "Experience at early-stage startups where you had to figure things out without a playbook",
      "Familiarity with AI/ML tooling or experience building AI-powered features",
      "Contributions to open source projects",
    ],
    success: [
      "You've shipped multiple significant features that customers actively use",
      "You're the go-to person for at least one part of our system",
      "You've made us faster – whether through better tooling, processes, or architecture decisions",
      "Customers mention features you built as reasons they love Skyhook",
      "You've helped hire and onboard other great engineers",
    ],
  },
};
