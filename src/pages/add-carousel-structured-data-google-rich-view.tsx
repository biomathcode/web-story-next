import Footer from "@/component/Footer";
import { StructuredData } from "@/component/SEO";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

const info = {
  title: "Add Carousel Structured Data to Qualify for Google Rich View",
  description:
    "Learn how carousel structured data can help Google understand a collection of Web Stories or articles and make your content eligible for richer search views.",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  url: "https://webstory.coolhead.in/add-carousel-structured-data-google-rich-view",
};

const articleData = StructuredData({
  link: info.url,
  title: info.title,
  description: info.description,
  authorName: "Pratik Sharma",
  authorUrl: "https://coolhead.in",
  image: info.image,
  publisherName: "Coolhead",
  publisherWebsite: "https://coolhead.in",
});

const carouselData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      url: "https://webstory.coolhead.in/seo-tips-for-google-web-stories",
      name: "SEO tips for Google Web Stories",
    },
    {
      "@type": "ListItem",
      position: 2,
      url: "https://webstory.coolhead.in/how-web-stories-improve-discovery-score-google-search-console",
      name: "How Web Stories improve discovery in Search Console",
    },
    {
      "@type": "ListItem",
      position: 3,
      url: "https://webstory.coolhead.in/how-to-add-google-analytics-in-web-stories",
      name: "How to add Google Analytics in Web Stories",
    },
  ],
};

function CarouselStructuredDataArticle() {
  return (
    <div>
      <Head>
        <title>{info.title}</title>
        <meta name="description" content={info.description} />
        <link rel="canonical" href={info.url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={info.title} />
        <meta property="og:description" content={info.description} />
        <meta property="og:image" content={info.image} />
        <meta property="og:url" content={info.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={info.title} />
        <meta name="twitter:description" content={info.description} />
        <meta name="twitter:image" content={info.image} />
      </Head>
      <Script
        id="carousel-article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleData, carouselData]),
        }}
      />

      <main className="flex center col jc gap-10 inter m-20">
        <article
          className="flex col gap-10 inter"
          style={{ maxWidth: "800px", margin: "20px", padding: "50px" }}
        >
          <h1 style={{ fontSize: "36px", fontWeight: 300 }}>
            {info.title}
          </h1>
          <p className="label">by Pratik Sharma · June 10, 2026</p>
          <img
            alt="Structured data carousel planning"
            src={info.image}
            width={760}
            height={420}
            style={{ borderRadius: "4px", objectFit: "cover" }}
          />

          <p>
            Carousel structured data helps describe a list of related pages.
            For publishers, that list can connect Web Stories, tutorials,
            product guides, or article collections so search engines can better
            understand the relationship between them.
          </p>
          <h2>What to Add</h2>
          <p>
            Use an <code>ItemList</code> with ordered <code>ListItem</code>{" "}
            entries. Each item should point to a real, indexable URL with a
            clear name and position. Keep every URL canonical and avoid listing
            thin or duplicate pages.
          </p>
          <h2>Why It Helps Rich Views</h2>
          <p>
            Structured data does not guarantee a rich result, but it improves
            machine readability. When your stories are fast, valid, crawlable,
            and connected through an accurate carousel list, Google has a
            cleaner content graph to evaluate for richer presentation.
          </p>
          <h2>Build the Workflow</h2>
          <p>
            Start with a topic cluster, generate Web Stories for each article,
            then publish a carousel list page that links the cluster together.
            The <Link href="/">free no sign up Web Story generator</Link> can
            create the story markup and SEO fields for that workflow.
          </p>
        </article>
        <Footer />
      </main>
    </div>
  );
}

export default CarouselStructuredDataArticle;
