import ExampleStoryPreview from "@/component/ExampleStoryPreview";
import { StructuredData } from "@/component/SEO";
import { exampleStories } from "@/lib/exampleStories";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

const seo = {
  title: "Google Web Stories Examples Created With Our Free Editor",
  description:
    "Preview real-life Google Web Stories examples and templates created with the free no sign up Web Story generator.",
  url: "https://webstory.coolhead.in/examples",
  image: "https://webstory.coolhead.in/og.jpeg",
};

const itemListData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Google Web Stories examples",
  itemListElement: exampleStories.map((story, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: story.title,
    url: `${seo.url}/${story.slug}`,
  })),
};

function ExamplesPage() {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta
          name="keywords"
          content="google web stories examples, best free web stories generator, create google web stories, chrome web stories"
        />
        <link rel="canonical" href={seo.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:url" content={seo.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Head>
      <Script
        id="examples-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            StructuredData({
              link: seo.url,
              title: seo.title,
              description: seo.description,
              image: seo.image,
              authorName: "Pratik Sharma",
              authorUrl: "https://coolhead.in",
              publisherName: "Coolhead",
              publisherWebsite: "https://coolhead.in",
            }),
            itemListData,
          ]),
        }}
      />

      <main className="examples-page inter">
        <section className="examples-hero">
          <div>
            <Link href="/" className="seo-article-eyebrow">
              Free Web Story editor
            </Link>
            <h1>Google Web Stories examples made with our editor</h1>
            <p>
              These examples use the same slide data shape as the editor, so
              they can become importable templates later. Each story shows how a
              real article, guide, or launch page could look as a mobile Web
              Story.
            </p>
          </div>
          <Link className="btn flex center gap-10 fs-12" href="/">
            Create your Web Story
          </Link>
        </section>

        <section className="examples-grid" aria-label="Web Story examples">
          {exampleStories.map((story) => (
            <article className="example-card" id={story.slug} key={story.slug}>
              <div className="example-preview-column">
                <ExampleStoryPreview story={story} />
                <Link
                  className="btn flex center gap-10 fs-12"
                  href={`/examples/${story.slug}`}
                >
                  View story
                </Link>
              </div>
              <div className="example-card-copy">
                <span className="new-badge">{story.category}</span>
                <h2>
                  <Link href={`/examples/${story.slug}`}>{story.title}</Link>
                </h2>
                <p>{story.description}</p>
                <dl>
                  <div>
                    <dt>Source</dt>
                    <dd>{story.sourceLabel}</dd>
                  </div>
                  <div>
                    <dt>SEO target</dt>
                    <dd>{story.keyword}</dd>
                  </div>
                  <div>
                    <dt>Slides</dt>
                    <dd>{story.slides.length}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default ExamplesPage;
