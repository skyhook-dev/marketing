import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old blog post URLs (rebranding from KoalaOps to Skyhook)
      {
        source: "/blog/the-birth-of-koalaops-our-journey-to-simplify-devops",
        destination: "/blog/the-birth-of-skyhook-our-journey-to-simplify-devops",
        permanent: true,
      },
      // Missing "and" in URL
      {
        source: "/blog/platform-engineering-the-value-of-golden-paths-in-the-light-of-the-80-20-rule",
        destination: "/blog/platform-engineering-and-the-value-of-golden-paths-in-the-light-of-the-80-20-rule",
        permanent: true,
      },
      // Short legal URLs redirect to full paths
      {
        source: "/terms",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      // Legacy signup URL
      {
        source: "/sign-up",
        destination: "https://app.skyhook.io",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
