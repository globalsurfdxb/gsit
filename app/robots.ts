import type { MetadataRoute } from "next";

// Development build: block all crawlers. Switch to allow "/" before going live.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
