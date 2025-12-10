import { Job } from "./types";

export const softwareEngineer: Job = {
  id: "software-engineer",
  title: "Software Engineer",
  department: "Engineering",
  location: "Remote / Hybrid (Tel Aviv)",
  type: "Full-time",
  description:
    "Join a small team building developer tools at the intersection of cloud infrastructure and AI. You'll learn fast, ship real features, and grow alongside the company.",
  content: {
    overview: `We're looking for a Software Engineer who's hungry to grow. Someone who's excited about building things that matter, learning new technologies fast, and doesn't need hand-holding to get things done.

You'll be joining at a stage where you can have real impact – not just writing code to spec, but shaping what we build and how we build it. We're a small team, so you'll get exposure to everything: backend, infrastructure, product decisions, customer conversations.

We're building with modern tools – TypeScript, Go, Kubernetes – and we're all-in on AI-assisted development. We use Claude Code, Cursor, and other AI tools daily. We're also building AI agents into our platform. If you want to be at the forefront of how software gets built in the AI era, this is your chance.`,
    responsibilities: [
      {
        title: "Build & Ship",
        items: [
          "Develop features across the stack – backend services, APIs, and UI components",
          "Own features end-to-end, from understanding the problem to deploying the solution",
          "Write code that goes to production quickly – we ship in days, not months",
          "Work directly with customers to understand what they need and iterate fast",
        ],
      },
      {
        title: "Learn & Grow",
        items: [
          "Master cloud-native development – Kubernetes, containers, CI/CD pipelines",
          "Level up your skills by working alongside experienced engineers who give real feedback",
          "Take on increasingly complex challenges as you grow",
          "Learn how a startup operates – product, customers, growth, not just code",
        ],
      },
      {
        title: "AI-Native Development",
        items: [
          "Use AI coding tools daily – this is how modern software gets built",
          "Help build AI agents that automate DevOps workflows for our customers",
          "Experiment with new AI capabilities and bring ideas to the team",
          "Be part of defining how engineering works in the age of AI assistants",
        ],
      },
    ],
    requirements: [
      "2+ years of professional software engineering experience",
      "Solid foundation in TypeScript or Go (or another language with eagerness to learn these)",
      "You've shipped code to production and understand what it takes to keep things running",
      "Comfortable learning new technologies quickly – we don't expect you to know everything, but you should pick things up fast",
      "Strong problem-solving skills – you can debug issues and figure things out independently",
      "Good communication – we're remote-friendly and async-heavy, clear writing matters",
    ],
    niceToHave: [
      "Experience with cloud platforms (GCP, AWS, Azure) or containerized environments",
      "Exposure to Kubernetes or interest in learning it deeply",
      "Experience with developer tools or platform engineering",
      "You've used AI coding assistants and are excited about how they change development",
      "Side projects or open source contributions that show you build things for fun",
    ],
    success: [
      "You're shipping features independently and customers are using what you built",
      "You've grown from needing guidance to being someone others can rely on",
      "You've become proficient in our stack and can debug issues across the system",
      "You're contributing ideas to product discussions, not just implementing specs",
      "You've embraced AI tools and are more productive than engineers who haven't",
    ],
  },
};
