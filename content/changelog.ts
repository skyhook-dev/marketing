export type ChangelogSection = {
  title: string;
  items: string[];
};

export type ChangelogUpdate = {
  label: string;
  sections: ChangelogSection[];
};

export const changelogUpdates: ChangelogUpdate[] = [
  {
    "label": "October 2025",
    "sections": [
      {
        "title": "Features",
        "items": [
          "**Cluster View (New)** — A single place to see key information about your Kubernetes clusters, surface problems quickly, and review useful events.",
          "**Guided Permissions Setup** — New guided/semi-automated flows for setting up **GitHub Actions**, **OIDC**, **Argo CD ↔ GitHub** integration, and the **Skyhook support role**.",
          "**Ingress Active Testing (in Deployment Details)** — We detect each org’s specific ingress configuration and instantly run layer-by-layer network tests (DNS resolution, certificate checks, reachability, and more) to pinpoint the exact misconfiguration causing a failed rollout.",
          "**Demo Mode** — Explore Skyhook safely with seeded data and preconfigured flows; great for quick previews and enablement."
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "**Custom Log Link Templates** — Define your own deep-link templates to your logging backend; links are shown in context for each service/environment.",
          "**Revamped \"New Service\" Flow** — Cleaner steps, clearer defaults, and faster setup.",
          "**Cluster Resource Viewer Polish** — Better layout, stronger filters, a richer details pane, and a **Raw YAML** view across the board."
        ]
      }
    ]
  },
  {
    "label": "September 2025",
    "sections": [
      {
        "title": "Features",
        "items": [
          "**Unified Deployment Orchestration & Status** — New Deployments page that tracks CI pipelines and Kubernetes state together, presenting a single, consistent view from commit → config → live rollout (with post-deploy visibility).",
          "**Self-Onboarding for Cloud** — One-click self-onboarding for **GCP (Terraform)** and **AWS (Terraform & CloudFormation)** to bootstrap GitOps and platform resources quickly.",
          "**Public GitHub Actions & Modular Workflows** — Simplified CI/CD with Skyhook-maintained public actions and cleaner, composable workflows for faster setup and reuse.",
          "**Jobs & Workflows Runtime Insights** — Drill into detailed execution info for Kubernetes Jobs and Argo Workflows, with improved triggering and deploy/execute flows.",
          "**Quick Search with Context-Preserving Navigation** — Jump directly to hidden/advanced configuration (service settings, environments, clusters, add-ons, etc.). When switching services, Skyhook keeps your current context (e.g., Env Vars → Env Vars).",
          "**Observability Stack: Sealed Secrets & UI Config** — Add sealed-secrets support and manage Grafana (and related) credentials directly from the Skyhook UI, alongside the full observability bundle.",
          "**“Addons” Navigation & Centralized GitOps** — “Control Plane” is now **Addons** with a clearer **Extension** icon. New **GitOps** tab centralizes ArgoCD settings, repo configuration, and observability access. New **Management Cluster** tab provides a dedicated place for managing the management cluster. Includes one-click jump from Addons → Settings → GitOps."
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "**Logs Viewer Polish** — Smoother scrolling/streaming and UI refinements for long sessions.",
          "**Better Defaults for New Services** — Standard k8s labels by default and a dedicated ServiceAccount created for every new service.",
          "**Sidebar/Icon Update** — Replaced the old cell-tower icon with **Extension** for the Addons area.",
          "**Route Cleanup** — Internal paths moved from `/:orgId/controlplane/*` to `/:orgId/addons/*` for consistency."
        ]
      },
      {
        "title": "Bug Fixes",
        "items": [
          "**Stability & Reliability** — Numerous fixes improving deployment flow robustness, GitOps sync stability, and long-running logs streaming.",
          "**Navigation** — Resolved edge cases to ensure context is preserved reliably when switching between services."
        ]
      }
    ]
  },
  {
    "label": "August 2025",
    "sections": [
      {
        "title": "Features",
        "items": [
          "**Organization Settings (GA)** — Centralized “Org settings” tab with **Repository Settings**, **Code Preferences**, **Service Templates**, **Notification Rules & Channels**, and **Deployment Permissions**.",
          "**Copy Secrets Across Services** — Reuse secrets from other services without manually re-entering values.",
          "**Cluster Logs Upgrades** — Full-screen logs, adjustable viewing controls, and shareable filters via query strings across tabs.",
          "**GitHub Connections via OAuth** — Manage the organization's GitHub connection with OAuth directly from Skyhook."
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "**Env Vars & Secrets UX** — Redesigned tab with streamlined flows, guardrails to prevent mistakes, and clearer cross-environment autocomplete indicators.",
          "**Production Deployment Approvals** — Require an additional approval step before deploying to production environments.",
          "**Standard Labels & Annotations** — New services automatically include common k8s labels/annotations and image metadata for better debugging, provenance, and code correlation.",
          "**Deploy Dialog Polish** — Minor UI improvements to the deploy popup.",
          "**Sidebar Compact Mode** — Smaller sidebar option and layout refinements across primary views.",
          "**Tag Autocomplete Context** — Added commit timestamp next to git tags in autocomplete.",
          "**Skyhook Agent UI Tuning** — Behavior and UI refinements for a smoother interaction.",
          "**Production Deployment Approvals** — Require an additional approval step before deploying to production environments."
        ]
      },
      {
        "title": "Bug Fixes",
        "items": [
          "**Jobs & Workflows Editing** — Multiple fixes when editing Kubernetes Jobs and Argo Workflow configurations.",
          "**Skyhook Agent Button** — Reliability fix for invoking the Skyhook Agent from the UI."
        ]
      }
    ]
  },
  {
    "label": "July 2025",
    "sections": [
      {
        "title": "Features",
        "items": [
          "**Initial Jobs support** — manage Kubernetes Jobs and Argo Workflows directly from Skyhook.",
          "**Enhanced Service Settings** — control which settings apply to specific environments (or all).",
          "**Healthcheck probes** — configure readiness and liveness probes directly from the Skyhook UI.",
          "**Billing & Plan Upgrades** — new self-service subscription flow.",
          "**Observability Bundle** — orchestrate multi-addon observability stack installations with synced configuration and architecture view.",
          "**Improved VCS integration** — faster branch and tag fetching from GitHub with smart caching (10ms after prefetch).",
          "**AI-powered Service Migration (Preview)** — initial support for Dockerfile import/creation, workflow & env var auto-import."
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "Published a public GitHub Action to ensure ECR repos exist before login, streamlining build workflows.",
          "Improved logs viewer rendering, performance, and loading indicators.",
          "Tweaked Kustomization file editing to retain YAML formatting and comments.",
          "Greatly improved data loading performance and reduced unnecessary re-renders.",
          "UI improvements on the Deploy screen, including branch sorting by commit date.",
          "Open-sourced updates to **helmify-kustomize** with advanced features like working YAML anchors in Helm values files."
        ]
      },
      {
        "title": "Bug Fixes",
        "items": [
          "Fixed excessive GitHub API usage that could cause temporary outages.",
          "Fixed caching issues that sometimes showed incorrect or partial data in the UI.",
          "Fixed host field bug in Control Plane Management Cluster page.",
          "Fixed missing commit date display in autocomplete tags.",
          "Fixed login/logout flow issues.",
          "Fixed Skyhook DNS issues (missing or misconfigured DNS records).",
          "Fixed branch/tag fetching bug that sometimes cached bad commit dates."
        ]
      }
    ]
  },
  {
    "label": "June 2025",
    "sections": [
      {
        "title": "Features",
        "items": [
          "[Beta] Support for Jobs as first-class citizens next to Services, with initial support for plain Kubernetes Jobs and Argo Workflows",
          "[Beta] Automatically discover some service properties during import, to reduce need for manual configuration"
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "Visual improvements to various parts of the UI, including service settings and Skyhook Cluster Connector"
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Added flexibility for matching services in k8s with various naming conventions (with/without specific prefix and suffix)"
        ]
      }
    ]
  },
  {
    "label": "May 2025",
    "sections": [
      {
        "title": "Features",
        "items": [
          "Automatically wrap a set of services for deployment in a Helm chart, without giving up the Kustomize-based environment management."
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "Improved UX when creating/importing a service, to show pending PRs/branches instead of errors until they are merged.",
          "Minor improvements to various selection boxes, ordering and autocomplete",
          "Security and performance improvements.",
          "Minor enhancements to autoscaling tools (HPA, KEDA) configuration"
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Fix slack messages for service deployments sometimes not going out or with missing information"
        ]
      }
    ]
  },
  {
    "label": "April 2025",
    "sections": [
      {
        "title": "Features",
        "items": [
          "Added KEDA autoscaling support for more advanced use cases, such as scaling on queue length."
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "More performance improvements for large git repos",
          "GitHub Actions workflows now attempt to cache Docker layers by default"
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Optimizations to avoid hitting users' GitHub API rate limits",
          "Fixed handling of env vars with quotes, spaces etc.",
          "Fixed Events not being fetched from clusters in some cases"
        ]
      }
    ]
  },
  {
    "label": "March 2025",
    "sections": [
      {
        "title": "Features",
        "items": [
          "Enhanced Deploy Service page with improved controls over branches used for code / deployment files / CI/CD workflows, as well as tag sorting, labeling and filtering.",
          "Support any default branch for git repos",
          "New dedicated Service “Settings” tab"
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "Improved generated GitHub Actions workflows with better modularity, flexibility, more code reuse, and better security best practices.",
          "Visual improvements to make Skyhook UI elements more visually distinct and appealing, including more well-defined cards, menus and tooltips, as well as code change notifications and links."
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Fixed errors and improved performance for large code repos"
        ]
      }
    ]
  },
  {
    "label": "February 2025",
    "sections": [
      {
        "title": "Features",
        "items": [
          "Organization Settings section (Preview)"
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "Run deploy workflows from different branches",
          "Richer networking configuration options (for Ingress, Service)",
          "Current service health (pod status) shown in main service page.",
          "Add option to manage GitHub permissions for the org.",
          "Many UI improvements for greater consistency, better support for different screen sizes (all the way down to mobile phones) and more.",
          "Skyhook Cluster Connector can now clean up ephemeral/preview environments."
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Fixed a few incorrect/outdated links and quick commands for some users."
        ]
      }
    ]
  },
  {
    "label": "January 2025",
    "sections": [
      {
        "title": "Features",
        "items": [
          "Overhauled service Deploy page to allow more control over the branch/ref used for building code, deploying Kubernetes manifests and Helm charts, and CI workflows.",
          "Added support for using tags from the image repository for deployments."
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "Significantly improved app performance, primarily through Skyhook Cluster Connector optimizations."
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "More flexible handling of different naming conventions for Kubernetes objects (e.g. with/without env name prefix, object type suffix)."
        ]
      }
    ]
  },
  {
    "label": "December 2024",
    "sections": [
      {
        "title": "Features",
        "items": [
          "Skyhook Google Cloud Partnership: Skyhook is now an official Google Cloud Partner!",
          "Created and introduced [Helmify-Kustomize](https://github.com/hisco/helmify-kustomize) as part of Skyhook, enabling seamless generation of Helm charts from Kustomize configurations to simplify and enhance deployment workflows."
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "Enhanced mono-repo support",
          "Advanced GitHub RBAC Capabilities - Based on service token"
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Optimized GitHub rate limit",
          "Monorepo import fixes",
          "Fixed HPA edits",
          "Made cluster name conditional",
          "Fixed issues related to adding new clusters to GitOps configuration and for specific addons."
        ]
      }
    ]
  },
  {
    "label": "November 2024",
    "sections": [
      {
        "title": "Features",
        "items": [
          "Role-Based Deployment Permissions: Implemented role-based access control to allow or restrict specific users from deploying services to certain environments.",
          "Custom Templates: Introduced the ability to create and select custom predefined templates during the service creation process.",
          "Env Vars Portal (AI Enhanced, Preview): Added a feature to intelligently extract potential global/environment variables from README and Dockerfiles directly into the Skyhook portal.",
          "Static Website Support (Preview): Now supports out-of-the-box deployments for custom websites."
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "Improved consistency in editing k8s deployment files."
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Resolved an issue preventing Slack alerts from triggering in some build-and-deploy workflows.",
          "Fix the display of pending (not yet running) pods in the logs viewer."
        ]
      }
    ]
  },
  {
    "label": "October 2024",
    "sections": [
      {
        "title": "Features",
        "items": [
          "Preview/Ephemeral Environments Support - Generally Available",
          "Deployment  - Deploy code separately from the deployment configuration"
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "Ephemeral Environments capabilities:",
          "Auto DNS Support",
          "Pull and present the latest deployed version"
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Minor issue with auto-complete branch names"
        ]
      }
    ]
  },
  {
    "label": "September 2024",
    "sections": [
      {
        "title": "Features",
        "items": [
          "Full Preview/Ephemeral Environments Support ! (Preview)"
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "Support for advanced Slack notifications configurations",
          "Kustomize Build - Added the ability to pass key/values to build"
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Sealed secrets editing issue"
        ]
      }
    ]
  },
  {
    "label": "August 2024",
    "sections": [
      {
        "title": "Features",
        "items": [
          "Advanced rollout strategies with Argo Rollouts - Beta",
          "Remote deployment repo",
          "Automatically reload pods on config maps and secret changes"
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "Improved ArgoCD setup automation and guide",
          "Search Branches/Tags in the Deployment section",
          "Support for Kustomize replacements"
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Search capabilities for projects with a large number of versions"
        ]
      }
    ]
  },
  {
    "label": "July 2024",
    "sections": [
      {
        "title": "Features",
        "items": [
          "Skyhook is now SOC2 Type II compliant!!",
          "Azure support in private beta"
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "Improved Addons organization (Managed with GitOps, other Installed Addons, Featured Addons, and search more)"
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Fixed Python FastAPI template tests"
        ]
      }
    ]
  },
  {
    "label": "June 2024",
    "sections": [
      {
        "title": "Features",
        "items": [
          "Integrated Log Viewer in k8s cluster resources viewer",
          "New Events, ConfigMaps and CustomResources tabs in cluster resources viewer"
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "Improved flexibility for naming of related kubernetes resources.",
          "Misc UI improvements: improved error handling, handling of missing/empty data in various places, text explanations of various functionality."
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Fixed caching bug causing occasional crash and temporary unavailability",
          "Fixed misc crashes and bad links"
        ]
      }
    ]
  },
  {
    "label": "May 2024",
    "sections": [
      {
        "title": "Features",
        "items": [
          "Integrated Cluster Resources View - see your Kubernetes resources directly from the Skyhook UI. No need to hunt for the just right kubectl incantation!"
        ]
      },
      {
        "title": "Minor Changes",
        "items": [
          "New “Batch Build & Deploy” - select multiple services and trigger build from main and directly deploy to any env.",
          "Monorepos: new “Deploy All” option",
          "GitOps: expanded support for a wide range of cluster addons directly from the UI",
          "Updated quick-start terraform templates to be SOC2-compliant"
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Improved handling of GitHub API requests to avoid exceeding quota for users.",
          "Improved DB and caching mechanisms that caused occasional backend errors."
        ]
      }
    ]
  },
  {
    "label": "April 2024",
    "sections": [
      {
        "title": "Features",
        "items": [
          "**Secrets Management** - Using Sealed Secrets. Sealed secrets are a way to securely store sensitive information, like passwords or API keys, in a code repository, even a public one. They work by encrypting the secrets before storing them in the repo."
        ]
      },
      {
        "title": "Minor changes",
        "items": [
          "Demo Sandbox enhancements."
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Interface speed improvements."
        ]
      }
    ]
  },
  {
    "label": "March 2024",
    "sections": [
      {
        "title": "Features",
        "items": [
          "**Display OpenAPI spec** from services that expose it live and not in code."
        ]
      },
      {
        "title": "Minor changes",
        "items": [
          "Allow updating gitops-managed clusters from the UI",
          "Allow setting default domain to use for central management-cluster services"
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Fix fetching events related to a service from your k8s clusters"
        ]
      }
    ]
  },
  {
    "label": "February 2024",
    "sections": [
      {
        "title": "Features",
        "items": [
          "**Horizontal Pod Autoscaling** configuration for each service environment.",
          "**Tracing** support (beta) with Open Telemetry - set up traces collection with Open Telemetry and view in Grafana Tempo, across services, out of the box."
        ]
      },
      {
        "title": "Minor changes",
        "items": [
          "Streamline service creation flow and service import flow from existing repos, with smarter defaults, autocomplete, validations, and more.",
          "Improved backend error handling.",
          "Stabilize new preview Skyhook Agent tab with various UI and performance improvements."
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Misc performance, stability, and security improvements.",
          "Fix edge case impacting new user accounts.",
          "Fix minor navigation and UI rendering issues."
        ]
      }
    ]
  },
  {
    "label": "January 2024",
    "sections": [
      {
        "title": "Features",
        "items": [
          "Skyhook Agent (Preview) - The Skyhook Agent is available in the context of a specific Service. You can find the assistant in the \"Skyhook Agent\" tab of any of your services. The assistant is fully aware of your service's configuration out of the box and can create PRs for your service according to your requirements.",
          "Import existing service (from single repo or monorepo) - You are now able to import services from existing repositories.",
          "Support for all major Container Registries.",
          "New Service Templates - Python FastAPI template.",
          "Initial Bitbucket support."
        ]
      },
      {
        "title": "Minor changes",
        "items": [
          "New env vars view.",
          "Allow showing OpenAPI (Swagger) view from live services, not just yaml files.",
          "Significant UI latency improvements via smarter optimized caching.",
          "Minor Go service template updates (Go version, OpenAPI generated code).",
          "Many small UI improvements."
        ]
      },
      {
        "title": "Bug fixes",
        "items": [
          "Fix loading CRDs in the UI in some cases.",
          "Fixed bugs where not all data in the UI was loaded depending on the page you started at / refreshed.",
          "Fixed a couple of rare potential UI crashes."
        ]
      }
    ]
  },
  {
    "label": "December 2023",
    "sections": [
      {
        "title": "Features",
        "items": [
          "**Platform Launch** — Skyhook goes live with comprehensive Kubernetes deployment automation",
          "**Multi-Cloud Support** — Full support for GCP and AWS with unified deployment experience",
          "**GitOps Workflow** — ArgoCD-based continuous deployment with Git as the source of truth",
          "**Service Management** — Create, import, and manage services with automated repository setup",
          "**Cluster Integration** — Connect and manage multiple Kubernetes clusters with the Skyhook Cluster Connector",
          "**CI/CD Automation** — Automated GitHub Actions workflows for build and deploy pipelines",
          "**Environment Management** — Multi-environment support with environment-specific configurations",
          "**Observability Integration** — Built-in metrics collection with Google Managed Prometheus",
          "**Logs Viewer** — Integrated log streaming and viewing directly from the Skyhook UI",
          "**Monorepo Support** — First-class support for monorepos built with Turborepo",
          "**Control Plane Management** — Dedicated interface for managing GitOps and cluster configuration",
          "**Cluster Connector Versioning** — Versioned cluster connectors with upgrade notifications",
          "**Port Forwarding** — Easy access to services with integrated port forwarding capabilities"
        ]
      }
    ]
  }
] as const;
