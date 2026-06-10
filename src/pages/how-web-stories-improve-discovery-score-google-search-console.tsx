import Footer from "@/component/Footer";
import { StructuredData } from "@/component/SEO";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

const info = {
  title:
    "How Web Stories Can Improve Your Discovery Score in Google Search Console",
  description:
    "Learn how adding Google Web Stories can increase discovery opportunities in Search Console by improving visual search presence, internal linking, engagement paths, and structured content signals.",
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  url: "https://webstory.coolhead.in/how-web-stories-improve-discovery-score-google-search-console",
};

const data = StructuredData({
  link: info.url,
  title: info.title,
  description: info.description,
  authorName: "Pratik Sharma",
  authorUrl: "https://coolhead.in",
  image: info.image,
  publisherName: "Coolhead",
  publisherWebsite: "https://coolhead.in",
});

function WebStoriesDiscoveryScore() {
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
        id="web-stories-discovery-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
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
            alt="Search Console analytics dashboard"
            src={info.image}
            width={760}
            height={420}
            style={{ borderRadius: "4px", objectFit: "cover" }}
          />

          <p>
            Web Stories add a visual, mobile-first entry point to your content.
            When they are indexed, connected to your main articles, and included
            in your sitemap, they can create more discovery surfaces for Google
            Search Console to measure.
          </p>
          <h2>Why Web Stories Help Discovery</h2>
          <p>
            A good Web Story works like a lightweight preview of a deeper page.
            It can target long-tail questions, link users back to the full
            article, and give Google clearer topical context through title,
            description, publisher, author, and image metadata.
          </p>
          <h2>What to Track in Search Console</h2>
          <ul className="flex col gap-10">
            <li>Impressions from story URLs and their linked articles.</li>
            <li>Click-through rate after adding stronger story titles.</li>
            <li>Indexing status for AMP/Web Story URLs in your sitemap.</li>
            <li>Discovery queries that reveal new story topics.</li>
          </ul>
          <h2>Practical Setup</h2>
          <p>
            Create one Web Story for each important article, add a clear CTA to
            the canonical article, keep the story fast, and publish structured
            data for author and publisher trust. This gives users a visual path
            into your content while keeping Google&apos;s signals consistent.
          </p>
          <p>
            You can build that flow with the{" "}
            <Link href="/">free Web Story generator</Link>, no sign up
            required.
          </p>
        </article>
        <Footer />
      </main>
    </div>
  );
}

export default WebStoriesDiscoveryScore;
