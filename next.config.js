/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  i18n: {
    locales: ["en-US", "fr", "nl-NL"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["images.unsplash.com", "cdn.hashnode.com"],
  },
};

module.exports = nextConfig;
