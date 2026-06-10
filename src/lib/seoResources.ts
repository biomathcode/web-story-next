export type SeoResourceLink = {
  href: string;
  title: string;
  description: string;
};

export type SeoArticle = SeoResourceLink & {
  slug: string;
  keyword: string;
  image: string;
  date: string;
  sections: {
    heading: string;
    body: string[];
    bullets?: string[];
  }[];
  related: string[];
};

export const seoResourceLinks: SeoResourceLink[] = [
  {
    href: "/best-free-web-stories-generator",
    title: "Best Free Web Stories Generator",
    description: "Create Google Web Stories for free with no sign up required.",
  },
  {
    href: "/google-web-stories-examples",
    title: "Google Web Stories Examples",
    description: "See practical story formats for articles, lists, and guides.",
  },
  {
    href: "/create-google-web-stories-no-login",
    title: "Create Google Web Stories Without Login",
    description: "Build AMP-ready stories without a Google Web Stories login.",
  },
  {
    href: "/how-web-stories-improve-discovery-score-google-search-console",
    title: "Improve Search Console Discovery",
    description: "Use Web Stories to create more visual discovery paths.",
  },
  {
    href: "/add-carousel-structured-data-google-rich-view",
    title: "Carousel Structured Data",
    description: "Connect story collections for richer search understanding.",
  },
  {
    href: "/seo-tips-for-google-web-stories",
    title: "SEO Tips for Google Web Stories",
    description: "Improve titles, contrast, indexing, analytics, and CTAs.",
  },
];

export const editorLearnLinks: Record<string, SeoResourceLink[]> = {
  content: [seoResourceLinks[0], seoResourceLinks[3], seoResourceLinks[5]],
  unsplash: [seoResourceLinks[1], seoResourceLinks[5], seoResourceLinks[3]],
  template: [seoResourceLinks[4], seoResourceLinks[1], seoResourceLinks[0]],
  styles: [seoResourceLinks[5], seoResourceLinks[1], seoResourceLinks[3]],
  animation: [seoResourceLinks[1], seoResourceLinks[3], seoResourceLinks[5]],
  cta: [seoResourceLinks[2], seoResourceLinks[3], seoResourceLinks[4]],
};

export const seoArticles: Record<string, SeoArticle> = {
  "best-free-web-stories-generator": {
    slug: "best-free-web-stories-generator",
    href: "/best-free-web-stories-generator",
    title: "Best Free Web Stories Generator: No Sign Up Required",
    keyword: "best free web stories generator",
    description:
      "Learn how to use a free Web Stories generator to turn articles into AMP-ready Google Web Stories without signup friction.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    date: "June 11, 2026",
    sections: [
      {
        heading: "Why free and no sign up matters",
        body: [
          "A Web Story workflow works best when writers can test an idea quickly. Removing signup friction lets a publisher paste a source URL, review extracted text and images, and decide whether the topic deserves a full visual story.",
          "That is useful for editorial teams, solo bloggers, and SEO experiments because you can validate the format before committing to a larger content production process.",
        ],
      },
      {
        heading: "What a good generator should produce",
        body: [
          "A useful generator should create valid story markup, keep image and text editing simple, and expose author, publisher, analytics, monetization, and SEO fields before export.",
        ],
        bullets: [
          "AMP-ready Web Story structure.",
          "Editable text, images, colors, CTA, and animation controls.",
          "Metadata fields for titles, descriptions, publisher, and author.",
          "A clean path back to the canonical article.",
        ],
      },
      {
        heading: "How to use it for SEO",
        body: [
          "Start with an existing article, create a short visual summary, then add a CTA back to the full post. Publish the story URL in your sitemap and link it from related articles so crawlers can discover the relationship.",
          "For clusters, combine multiple story URLs with carousel structured data so your pages describe the collection instead of living as isolated assets.",
        ],
      },
    ],
    related: [
      "/create-google-web-stories-no-login",
      "/google-web-stories-examples",
      "/add-carousel-structured-data-google-rich-view",
    ],
  },
  "google-web-stories-examples": {
    slug: "google-web-stories-examples",
    href: "/google-web-stories-examples",
    title: "Google Web Stories Examples for Blogs, Guides, and SEO",
    keyword: "google web stories examples",
    description:
      "Review Google Web Stories examples you can create from blog posts, tutorials, product guides, listicles, and search-driven content.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    date: "June 11, 2026",
    sections: [
      {
        heading: "Article summary story",
        body: [
          "Turn a long article into five to eight slides. Use one idea per slide, a strong visual, and a final CTA that sends readers back to the complete article.",
        ],
        bullets: [
          "Slide 1: promise or problem.",
          "Slides 2-6: key takeaways.",
          "Final slide: read the full guide CTA.",
        ],
      },
      {
        heading: "Listicle story",
        body: [
          "Listicles are a natural fit for Web Stories because each point can become a slide. Keep the layout consistent and use short, scannable copy so the story feels native on mobile.",
        ],
      },
      {
        heading: "How-to story",
        body: [
          "For tutorials, treat each slide as one step. Add a clear CTA to the complete tutorial when the task needs code snippets, screenshots, or deeper context.",
          "This structure helps search users understand the result quickly while still giving the original article a useful internal link.",
        ],
      },
    ],
    related: [
      "/best-free-web-stories-generator",
      "/seo-tips-for-google-web-stories",
      "/how-web-stories-improve-discovery-score-google-search-console",
    ],
  },
  "create-google-web-stories-no-login": {
    slug: "create-google-web-stories-no-login",
    href: "/create-google-web-stories-no-login",
    title: "Create Google Web Stories Without a Google Web Stories Login",
    keyword: "create google web stories",
    description:
      "Create Google Web Stories from a URL without signing in, then export story markup with SEO metadata, CTA, analytics, and monetization settings.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    date: "June 11, 2026",
    sections: [
      {
        heading: "Start with a URL",
        body: [
          "Paste an article URL into the editor and pull usable text and images into the content panel. From there, drag the strongest ideas into the story canvas and refine each slide.",
        ],
      },
      {
        heading: "Edit the story before publishing",
        body: [
          "Tune the text size, position, background, overlay, animation, and CTA. The goal is not just to create a story quickly, but to create one that is readable, fast, and aligned with the original article.",
        ],
        bullets: [
          "Use high-contrast text and backgrounds.",
          "Keep slide copy short.",
          "Add one clear CTA when the story should drive traffic.",
          "Fill author, publisher, and SEO fields before export.",
        ],
      },
      {
        heading: "Publish with internal links",
        body: [
          "After export, link the story from the source article and link the story back to the source article. This gives readers a loop and gives crawlers a clearer relationship between the story and canonical content.",
        ],
      },
    ],
    related: [
      "/best-free-web-stories-generator",
      "/how-web-stories-improve-discovery-score-google-search-console",
      "/add-carousel-structured-data-google-rich-view",
    ],
  },
};
