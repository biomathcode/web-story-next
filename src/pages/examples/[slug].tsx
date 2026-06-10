import ExampleStoryPreview from "@/component/ExampleStoryPreview";
import { StructuredData } from "@/component/SEO";
import { exampleStories, ExampleStory } from "@/lib/exampleStories";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

function ExampleStoryPage({ story }: { story: ExampleStory }) {
  const url = `https://webstory.coolhead.in/examples/${story.slug}`;

  const storyData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: story.seoTitle,
    headline: story.seoTitle,
    description: story.seoDescription,
    url,
    image: story.coverImage,
    creator: {
      "@type": "Person",
      name: "Pratik Sharma",
      url: "https://coolhead.in",
    },
    about: story.keyword,
    isAccessibleForFree: true,
  };

  return (
    <>
      <Head>
        <title>{story.seoTitle}</title>
        <meta name="description" content={story.seoDescription} />
        <meta name="keywords" content={story.keyword} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={story.seoTitle} />
        <meta property="og:description" content={story.seoDescription} />
        <meta property="og:image" content={story.coverImage} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={story.seoTitle} />
        <meta name="twitter:description" content={story.seoDescription} />
        <meta name="twitter:image" content={story.coverImage} />
      </Head>
      <Script
        id={`${story.slug}-structured-data`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            StructuredData({
              link: url,
              title: story.seoTitle,
              description: story.seoDescription,
              image: story.coverImage,
              authorName: "Pratik Sharma",
              authorUrl: "https://coolhead.in",
              publisherName: "Coolhead",
              publisherWebsite: "https://coolhead.in",
            }),
            storyData,
          ]),
        }}
      />

      <main className="example-detail-page inter">
        <section className="example-detail-hero">
          <div>
            <Link href="/examples" className="seo-article-eyebrow">
              Google Web Stories examples
            </Link>
            <h1>{story.title}</h1>
            <p>{story.description}</p>
            <div className="example-detail-actions">
              <Link className="btn flex center gap-10 fs-12" href="/">
                Create your Web Story
              </Link>
              <Link className="btn subtle flex center gap-10 fs-12" href="/examples">
                Back to examples
              </Link>
            </div>
          </div>
          <dl>
            <div>
              <dt>Category</dt>
              <dd>{story.category}</dd>
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
        </section>

        <section className="example-detail-stage">
          <ExampleStoryPreview story={story} />
          <div className="example-detail-slides">
            <h2>Story structure</h2>
            {story.slides.map((slide, index) => (
              <article key={`${story.slug}-slide-${index}`}>
                <span>Slide {index + 1}</span>
                <p>{slide.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: exampleStories.map((story) => ({
    params: { slug: story.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = ({ params }) => {
  const story = exampleStories.find((item) => item.slug === params?.slug);

  if (!story) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      story,
    },
  };
};

export default ExampleStoryPage;
