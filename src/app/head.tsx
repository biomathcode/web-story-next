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

export default function Head() {
  return (
    <>
      <title>Web Story - Coolhead</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Create Web Stories from your hashnode blog"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Create Web Stories from your hashnode blog"
      />
      <meta
        property="og:image"
        content="https://webstory.coolhead.in/ogimage.png"
      />

      <meta
        property="og:description"
        content="Create Web Stories from your hashnode blog"
      />

      <meta
        name="twitter:image:alt"
        content="Create Web Stories from your hashnode blog"
      />
      <meta name="twitter:image:width" content="630" />
      <meta name="twitter:image:height" content="1200" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Webstory.coolhead.in" />

      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

      <meta name="twitter:creator" content="@biomathcode" />
      <link rel="icon" href="/favicon.ico" />
      {/* <script
        type="application/ld+json"
        // dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      >
        {JSON.stringify(schema)}
      </script> */}
    </>
  );
}
