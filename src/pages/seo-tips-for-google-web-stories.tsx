import Footer from "@/component/Footer";

import { StructuredData } from "@/component/SEO";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

const info = {
  title: "10 SEO tips to increase views on google web stories",
  description:
    "Google Web Stories are a great way to attract more visitors to your website. By optimizing them for search engines, you can increase your visibility and drive more traffic to your site. There are several ways to do this, including using relevant keywords, adding meta descriptions, and building backlinks.",
  image:
    "https://images.unsplash.com/photo-1553830591-42e4fd7035ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
};

const data = [
  StructuredData({
    link: "https://webstory.coolhead.in/10-seo-tips-for-google-web-stories",
    title: info.title,
    description: info.description,
    authorName: "Pratik Sharma",
    authorUrl: "http://coolhead.in",
    image: info.image,
    publisherName: "Coolhead",
    publisherWebsite: "https://coolhead.in",
  }),
];

function SeoTips() {
  return (
    <div>
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
          content="http://webstory.coolhead.in/how-to-monetize-web-stories"
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
        <article
          className="flex col gap-10 inter"
          style={{ maxWidth: "800px", margin: "20px", padding: "50px" }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 300,
            }}
          >
            {info.title}
          </h1>

          <section className="flex col gap-20 ">
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
              <span data-title="March 29, 2023 12:00">March 29, 2023</span>
            </p>
            <div className="flex center jc">
              <Image
                alt="monetization preview"
                style={{ borderRadius: "4px" }}
                width={600}
                height={400}
                src="https://images.unsplash.com/photo-1553830591-42e4fd7035ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              />
            </div>

            <p>
              Search engine optimization (SEO) is an integral part of any
              digital marketing strategy. As web stories continue to gain
              popularity, it is important to optimize them for search engines to
              ensure they are easily discoverable by users. Here are 10 tips to
              help you optimize your web stories for search engines:
            </p>
            <ul className="flex col gap-20 mt-10 mb-10 ">
              <ol className=" mt-10">
                <b>1.</b> Use relevant keywords in your web story title,
                description, and content.
              </ol>
              <ol className=" mt-10">
                <b>2.</b> Optimize your images by using descriptive file names
                and alt tags.
              </ol>
              <ol className=" mt-10">
                <b>3. </b> Use internal and external links to provide context
                and authority to your web story.
              </ol>
              <ol className=" mt-10">
                <b>4. </b> Use social media to promote your web story and
                increase its visibility.
              </ol>
              <ol className=" mt-10">
                <b>5.</b> Make sure your web story is mobile-friendly and loads
                quickly.
              </ol>
              <ol className=" mt-10">
                <b>6.</b> Use structured data to help search engines understand
                the content of your web story.
              </ol>
              <ol className=" mt-10">
                <b>7.</b> Use header tags (H1, H2, H3) to structure your content
                and make it easier to read for users and search engines.
              </ol>
              <ol className=" mt-10">
                <b>8.</b> Use meta descriptions to provide a brief summary of
                your web story and entice users to click.
              </ol>
              <ol className=" mt-10">
                <b>9.</b> Make sure your web story is shareable by including
                social media sharing buttons.
              </ol>
              <ol className=" mt-10">
                <b>10.</b> Monitor your web story&apos;s performance and adjust
                your SEO strategy accordingly.
              </ol>
            </ul>
          </section>
          <p className="mt-10">
            By following these tips, you can help improve the visibility and
            reach of your web stories, ultimately driving more traffic to your
            website and increasing engagement with your audience.
          </p>
          <p className="mt-10">
            Another way to improve your Google Web Stories SEO is to create
            high-quality content that users will want to share. This can include
            visually appealing graphics, engaging headlines, and helpful
            information. By creating content that users find valuable, you can
            increase the likelihood that they will share your stories on social
            media or other websites, which can drive more traffic to your site
            and improve your search engine rankings.
          </p>
          <p className="mt-10">
            In addition to these strategies, it&apos;s important to stay
            up-to-date on the latest trends and best practices in Google Web
            Stories SEO. This can include monitoring your analytics data,
            conducting regular keyword research, and experimenting with
            different types of content and optimization techniques. By staying
            informed and taking a proactive approach to SEO, you can maximize
            the impact of your Google Web Stories and drive more traffic to your
            website.
          </p>
        </article>
        <Footer />
      </main>
    </div>
  );
}

export default SeoTips;
