import CodeBlock from "@/component/Codeblock";
import Footer from "@/component/Footer";
import InfoCarousel from "@/component/InfoCarousel";
import InfoCheckBox from "@/component/InfoCheckbox/InfoCheckbox";
import { StructuredData } from "@/component/SEO";
import { AMP_STORY_AUTO_ADS } from "@/lib";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

const info = {
  title: "how to monetize web stories ?",
  description: "Intructions to add google adsense in web stories",
  image:
    "https://images.unsplash.com/photo-1494887205043-c5f291293cf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
};

const data = StructuredData({
  link: "https://webstory.coolhead.in/how-to-monetize-web-stories",
  title: info.title,
  description: info.description,
  authorName: "Pratik Sharma",
  authorUrl: "http://coolhead.in",
  image: info.image,
  publisherName: "Coolhead",
  publisherWebsite: "https://coolhead.in",
});

function Monetization() {
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
          style={{ maxWidth: "600px", margin: "20px", padding: "20px" }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 300,
            }}
          >
            How to monetize web stories?{" "}
          </h1>

          <section className="flex col gap-10 ">
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
              <img
                alt="monetization preview"
                style={{ borderRadius: "4px" }}
                width={600}
                height={400}
                src="https://images.unsplash.com/photo-1494887205043-c5f291293cf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              />
            </div>

            <InfoCheckBox
              size={15}
              icon="success"
              title="For Monitisation"
              description="To enable ads on your webstories, add google adsense to your domain website. Web story should atleast have more than 7 story pages to be enabled for auto-ads."
            />
            <ul className="flex col gap-10">
              <li>Connect your site to google adsense</li>
              <li>
                Create display ad <br />
              </li>
              <InfoCarousel
                info={[
                  "STEP 1: Ads",
                  "STEP 2: By Ads Unit",
                  "STEP 3: Display ads ",
                  "STEP 4: Click on Create button,keep the ads ",
                ]}
              />
              <li>
                Copy the <code>data ad client</code> and{" "}
                <code>data ad slot</code> string.
              </li>
              <li>Add the info into the Monetize section of Editor</li>
            </ul>
            <CodeBlock
              code={AMP_STORY_AUTO_ADS("#data-ad-client", "#data-ad-slot")}
              language="javascript"
            />
          </section>
        </article>
        <Footer />
      </main>
    </div>
  );
}

export default Monetization;
