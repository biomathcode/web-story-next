import Footer from "@/component/Footer";
import { StructuredData } from "@/component/SEO";
import { seoResourceLinks, SeoArticle } from "@/lib/seoResources";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

function SeoArticlePage({ article }: { article: SeoArticle }) {
  const url = `https://webstory.coolhead.in${article.href}`;
  const relatedLinks = article.related
    .map((href) => seoResourceLinks.find((link) => link.href === href))
    .filter(Boolean);

  const articleData = StructuredData({
    link: url,
    title: article.title,
    description: article.description,
    authorName: "Pratik Sharma",
    authorUrl: "https://coolhead.in",
    image: article.image,
    publisherName: "Coolhead",
    publisherWebsite: "https://coolhead.in",
  });

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Web Story Generator",
        item: "https://webstory.coolhead.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Learn",
        item: "https://webstory.coolhead.in/learn",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: url,
      },
    ],
  };

  return (
    <div>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.keyword} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={article.image} />
      </Head>
      <Script
        id={`${article.slug}-structured-data`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleData, breadcrumbData]),
        }}
      />

      <main className="seo-article-shell inter">
        <article className="seo-article">
          <Link href="/learn" className="seo-article-eyebrow">
            Web Stories SEO guide
          </Link>
          <h1>{article.title}</h1>
          <p className="label">by Pratik Sharma - {article.date}</p>
          <Image
            alt={article.title}
            src={article.image}
            width={1200}
            height={630}
            className="seo-article-image"
            priority
          />
          <p className="seo-article-summary">{article.description}</p>

          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul className="flex col gap-10">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="seo-related">
            <h2>Related resources</h2>
            <div>
              {relatedLinks.map((link) =>
                link ? (
                  <Link href={link.href} key={link.href}>
                    <b>{link.title}</b>
                    <small>{link.description}</small>
                  </Link>
                ) : null
              )}
            </div>
          </section>
        </article>
        <Footer />
      </main>
    </div>
  );
}

export default SeoArticlePage;
