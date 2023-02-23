import Script from "next/script";
import "./globals.css";

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  applicationCategory: "WebApplication",

  name: "Webstory code generator",
  mainEntityOfPage: "webstory.coolhead.in",
  headline:
    "Web story code generator - no code tool to create google web stories ",
  description:
    "Free, visual no code editor to create google web stories from your blogs - hashnode, medium and dev.to",
  author: {
    "@type": "Person",
    name: "Pratik Sharma",
    // The full URL must be provided, including the website's domain.
    url: "https://webstory.coolhead.in",
  },
  screenshot: {
    "@type": "ImageObject",
    url: "https://webstory.coolhead.in/ogimage.png",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    ratingCount: "8864",
  },

  image: {
    "@type": "ImageObject",
    url: "https://webstory.coolhead.in/ogimage.png",
  },

  isAccessibleForFree: "http://schema.org/True",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body>{children}</body>
    </html>
  );
}
