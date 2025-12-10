export function OrganizationJsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Skyhook",
    url: "https://skyhook.io",
    logo: "https://skyhook.io/logo.svg",
    description: "The one-click Kubernetes platform. Build, deploy, and scale your applications without the DevOps complexity.",
    sameAs: [
      "https://github.com/skyhook-io",
      // TODO: Add Twitter/X handle once created
      "https://linkedin.com/company/skyhook-io",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

export function WebSiteJsonLd() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Skyhook",
    url: "https://skyhook.io",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}
