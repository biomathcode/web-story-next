import CodeBlock from "@/component/Codeblock";
import Footer from "@/component/Footer";
import InfoCarousel from "@/component/InfoCarousel";
import { StructuredData } from "@/component/SEO";
import { AMP_ANALYTICS } from "@/lib";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const info = {
  title: "How to add google analytics in web Stories ?",
  description: "Intructions to add google analytics in web stories",
  image:
    "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
};

const data = StructuredData({
  link: "https://webstory.coolhead.in/how-to-add-google-analytics-in-web-stories",
  title: info.title,
  description: info.description,
  authorName: "Pratik Sharma",
  authorUrl: "http://coolhead.in",
  image: info.image,
  publisherName: "Coolhead",
  publisherWebsite: "https://coolhead.in",
});

function Blog() {
  return (
    <>
      <Head>
        <title>{info.title}</title>
        <meta property="title" content={info.title} />

        <meta property="description" content={info.description} />
        <meta property="og:title" content={info.title} />
        <meta property="og:description" content={info.description} />
        <meta property="og:image" content={info.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:title" content={info.title} />
        <meta name="twitter:description" content={info.description} />
        <meta name="twitter:image" content={info.image} />
        <meta
          name="twitter:image:alt"
          content="Webstory code generator - no code tool editor "
        />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:url"
          content="http://webstory.coolhead.in/how-to-add-google-analytics-in-web-stories"
        />
        <meta name="twitter:creator" content="@biomathcode" />
      </Head>
      <Script
        id="structedData"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data),
        }}
      />
      <main className="flex center col jc gap-10 inter m-20">
        <article className="flex ">
          <section
            className="flex col gap-10 mt-10"
            style={{
              maxWidth: "600px",
              minWidth: "240px",
              padding: "20px",
            }}
          >
            <h1
              style={{
                fontSize: "24px",
                fontWeight: 400,
              }}
            >
              {" "}
              How to add google analytics in web Stories ?
            </h1>
            <p
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
              }}
            >
              by{" "}
              <a
                href="http://twitter.com/biomathcode"
                target="_blank"
                rel="noreferrer"
              >
                Pratik Sharma
              </a>
              {" ·"}
              <span data-title="March 2, 2023 12:00">March 2, 2023</span>
            </p>
            <div className="flex center jc">
              <Image
                alt="analytics  preview"
                style={{ borderRadius: "4px" }}
                width={600}
                height={400}
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              />
            </div>
            <ul className="flex col gap-10">
              <h3>Instructions </h3>
              <div>Sign in Google analytics</div>
              <div>Click on Gear icon with the label Admin</div>
              <div>Click on the Create Property</div>
              <div>After completing the form about Property details</div>
              <p
                style={{
                  padding: "4px 10px",
                  border: "2px solid #eee",
                  margin: "10px 0px",
                }}
              >
                Recommended that you create a Google Analytics 4 property.
              </p>
              <div>
                Copy the G-tag and add it to the settings =&gt;
                <Link href="/">webstory.coolhead.in</Link>
              </div>
            </ul>
            <CodeBlock language="html" code={AMP_ANALYTICS("#G-tag")} />
          </section>
        </article>
        <Footer />
      </main>
    </>
  );
}

export default Blog;
