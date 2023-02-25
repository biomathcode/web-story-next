import Footer from "@/component/Footer";
import InfoCheckBox from "@/component/InfoCheckbox/InfoCheckbox";
import { structuredData } from "@/component/SEO";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

function Learn() {
  const resources = [
    {
      text: "AMP SEO - Everything you need to know",
      link: "https://www.searchenginejournal.com/amp-seo-everything-you-need-to-know/375931/",
    },
    {
      text: "AMP Search report",
      link: "https://support.google.com/webmasters/answer/7450883?visit_id=638124340102566873-1453760594&rd=1#prioritize_fix_issues",
    },
    {
      text: "AMP Guidelines",
      link: "https://developers.google.com/search/docs/crawling-indexing/amp",
    },
    {
      text: "How to optimize amp stories for google search results",
      link: "https://www.searchenginejournal.com/how-to-optimize-amp-stories-for-google-search-results/348962/",
    },
    {
      text: "Web story Content Policy",
      link: "https://developers.google.com/search/docs/appearance/web-stories-content-policy",
    },
    {
      text: "Web Story SEO ",
      link: "https://blog.amp.dev/2020/02/12/seo-for-amp-stories/",
    },
    {
      text: "AMP Test ",
      link: "https://search.google.com/test/amp",
    },
    {
      text: "Rich Results Test",
      link: "https://search.google.com/test/rich-results",
    },
    {
      text: "Page Speed",
      link: "https://pagespeed.web.dev/",
    },
  ];
  return (
    <>
      <Head>
        <title>
          Learn about AMP web stories Search Engine Optimisation or SEO
        </title>
        <meta title="Learn about AMP web stories Search Engine Optimisation or SEO" />
        <meta
          property="title"
          content="Learn about AMP web stories Search Engine Optimisation or SEO"
        />

        <meta
          property="description"
          content="Learn the basic of seo of AMP web stories. Tips and tricks to improve the seo of your amp web stories. "
        />
        <meta
          property="og:title"
          content="Learn about AMP web stories search engine optimisation or SEO"
        />
        <meta
          property="og:description"
          content="Learn the basic of seo of AMP web stories. Tips and tricks to improve the seo of your amp web stories. - Coolhead || Web story"
        />
        <meta
          property="og:image"
          content="https://webstory.coolhead.in/ogimage.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="twitter:title"
          content="Learn about AMP web stories search engine optimisation or SEO"
        />
        <meta
          name="twitter:description"
          content=" Learn the basic of seo of AMP web stories. Tips and tricks to improve the seo of your amp web stories. - Coolhead || Web story"
        />
        <meta
          name="twitter:image"
          content=" http://webstory.coolhead.in/ogimage.png"
        />
        <meta
          name="twitter:image:alt"
          content="Webstory code generator - no code tool editor "
        />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="http://webstory.coolhead.in/learn" />
        <meta name="twitter:creator" content="@biomathcode" />
      </Head>
      <Script
        id="structedData"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="flex center col jc gap-10 inter p-20 m-20">
        <article
          className="flex col gap-10 mt-10"
          style={{
            maxWidth: "600px",
            minWidth: "240px",
            padding: "20px",
          }}
        >
          <h1>Learn about AMP web stories Search Engine Optimisation or SEO</h1>
          <p
            style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
          >
            by{" "}
            <a
              href="http://twitter.com/biomathcode"
              target="_blank"
              rel="noreferrer"
            >
              Pratik Sharma
            </a>{" "}
          </p>

          <InfoCheckBox
            size={15}
            icon="success"
            title="For Monitisation"
            description="To enable ads on your webstories, add google adsense to your domain website. Web story should atleast have more than 7 story pages to be enabled for auto-ads."
          />
          <InfoCheckBox
            size={15}
            icon="info"
            title="Structured Data"
            description=" Add schema json to enable rich results for your web stories . You can visit https://search.google.com/test/rich-results
             "
          />
          <InfoCheckBox
            size={15}
            icon="warning"
            title="Dead Page"
            description="Make sure your webstory is not a dead lock without any CTA(external Link). Add CTA link to your main blog article, or your site link. "
          />
          <InfoCheckBox
            size={15}
            icon="danger"
            title="Valid AMP"
            description=" Make sure your amp html is valid. You can visit https://search.google.com/test/amp
             "
          />

          <h2 className="mt-y">Tips To Make Better web stories</h2>

          <ul className="flex col gap-10">
            <li>Add Structued data to your webstories.</li>
            <li>
              Make sure there is enough contract between the text and the
              background image. <i>Tip: Add Overlay Effect</i>
            </li>
            <li>Text should be similar to tweets- short and informative.</li>
            <li>
              Add meta data - title, description, og:image, og:title,
              og:description - to get better link preview on social media.
            </li>
            <li>
              Add <b>Call To Action</b> link to your blog, article related to
              your webstory.
            </li>
            <li>
              Add your web stories into the XML sitemap, if you want your web
              stories to appear on Google search results. Also, add canonical
              tags to describe your web stories in an explicitly detailed way
            </li>
            <li>
              Authentic Stories grab more audience attention as compared to
              others. Be clear and write something you are passionate about. To
              rank well on Google, you need to nurture your brand by building
              its experience, expertise, authority, and trustworthiness
              (E-E-A-T). Hence being authentic will make your Web Stories more
              amazing.
            </li>
          </ul>
          <p
            style={{
              border: "1px solid #444",
              borderRadius: "4px",
              padding: "20px",
              margin: "40px 0px",
            }}
          >
            Read this next article{" "}
            <Link href="/how-to-monetize-web-stories">
              How to monetize web Stories ?
            </Link>
          </p>

          <h3>Resource to learn more</h3>
          <ul className="flex col gap-10">
            {resources.map((el) => {
              return (
                <div className="flex " key={el.text}>
                  <a href={el.link}>{el.text}</a>
                </div>
              );
            })}
          </ul>
        </article>
        <Footer />
      </div>
    </>
  );
}

export default Learn;
