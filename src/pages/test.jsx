import Head from "next/head";
import { useAmp } from "next/amp";

export const config = {
  amp: true,
};

export default function IndexPage() {
  const isAmp = useAmp();
  return (
    <>
      <Head>
        <title>Notes on API Modelling</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="Notes taken from the book  Designing Great Web APIs By James HigginbothamThe goal of API modelling is to translate the product requirements into the beginnings of a high-level API design. API modelling ensures that both developers and end users hav..."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Notes on API Modelling" />
        <meta
          property="og:image"
          content="https://cdn.hashnode.com/res/hashnode/image/unsplash/RyrFRsVoe2Q/upload/v1646386860067/z7UXATirf.jpeg"
        />

        <meta
          property="og:description"
          content="Notes taken from the book  Designing Great Web APIs By James HigginbothamThe goal of API modelling is to translate the product requirements into the beginnings of a high-level API design. API modelling ensures that both developers and end users hav..."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        ></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              mainEntityOfPage: "notes-on-api-modelling",
              headline: "Notes on API Modelling",
              description:
                "Notes taken from the book  Designing Great Web APIs By James Higginbotham\n\nThe goal of API modelling is to translate the product requirements into the beginnings of a high-level API design. API modelling ensures that both developers and end users hav...",
              author: {
                "@type": "Person",
                name: "Pratik Sharma",
                url: "http://coolhead.in",
              },
              publisher: {
                "@type": "Organization",
                name: "Coolhead",
                url: "https://webstory.coolhead.in",
              },
              image: {
                "@type": "ImageObject",
                url: "https://cdn.hashnode.com/res/hashnode/image/unsplash/RyrFRsVoe2Q/upload/v1646386860067/z7UXATirf.jpeg",
              },
              datePublished: "2023-03-02T12:34:49.628Z",
              dateModified: "2023-03-02T12:34:49.628Z",
              isAccessibleForFree: "http://schema.org/True",
            }),
          }}
          key="product-jsonld"
        />
      </Head>

      <style jsx>
        {`
          .overlay {
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, transparent 0%, black 100%);
          }
        `}
      </style>

      <amp-story
        standalone
        title="Notes on API Modelling"
        publisher="Coolhead"
        publisher-logo-src="https://webstory.coolhead.in/apple-icon.png"
        poster-portrait-src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80"
      >
        <amp-story-page id="0">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80"
              width="360"
              height="720"
              layout="fill"
              animate-in="fly-in-bottom"
            ></amp-img>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="fill">
            <div className="overlay"></div>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <h1
              style={{
                color: "#ffffff",
                position: "absolute",
                top: "36%",
                fontSize: "15px",
                textAlign: "center",
                fontFamily: "Inter",

                padding: "0px",
              }}
              animate-in="fly-in-bottom"
            >
              <span
                style={{
                  borderRadius: "10px",
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                  display: "inline",
                  background: "rgba(0, 0, 0,0.7)",
                  padding: "15px 12px",
                  lineHeight: "53px",
                }}
              >
                **Server-side Rendering**: As a lovely little bonus, you can use
                React to render pages on the server side to improve the app’s
                overall page loading speed and SEO.
              </span>
            </h1>
          </amp-story-grid-layer>

          <amp-story-page-outlink layout="nodisplay">
            <a href="https://coolhead.in" title="Link Description">
              Read More
            </a>
          </amp-story-page-outlink>
        </amp-story-page>

        <amp-story-page id="1">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              width="360"
              height="720"
              layout="fill"
              animate-in="fade-in"
            ></amp-img>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <p
              style={{
                color: "rgba(255, 255, 255, 1)",
                position: "absolute",
                top: "36%",
                fontSize: "24px",
                textAlign: "center",
                fontFamily: "Inter",

                padding: "0px",
              }}
              animate-in="fade-in"
            >
              <span
                style={{
                  borderRadius: "10px",
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                  display: "inline",
                  background: "rgba(0, 0, 0, 1)",
                  padding: "20px 10px",
                  lineHeight: "25px",
                }}
              >
                This is another preview
              </span>
            </p>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="2">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              width="360"
              height="720"
              layout="fill"
              animate-in="fade-in"
            ></amp-img>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <p
              style={{
                color: "rgba(255, 255, 255, 1)",
                background: "rgba(42, 70, 140,0.49)",
                position: "absolute",
                top: "38%",
                fontSize: "20px",
                padding: "28px 24px",
                textAlign: "right",
                lineHeight: "31px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              Adidas
            </p>
          </amp-story-grid-layer>

          <amp-story-page-outlink layout="nodisplay">
            <a href="" title="Link Description"></a>
          </amp-story-page-outlink>
        </amp-story-page>

        <amp-story-page id="3">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              width="360"
              height="720"
              layout="fill"
              animate-in="fade-in"
            ></amp-img>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="fill">
            <div className="overlay"></div>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <p
              style={{
                color: "rgba(255, 255, 255, 1)",
                background: "rgba(0, 0, 0, 1)",
                position: "absolute",
                top: "36%",
                fontSize: "16px",
                padding: "20px 10px",
                textAlign: "left",
                lineHeight: "25px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              4
            </p>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="4">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              width="360"
              height="720"
              layout="fill"
              animate-in="fade-in"
            ></amp-img>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <p
              style={{
                color: "rgba(255, 255, 255, 1)",
                background: "rgba(0, 0, 0, 1)",
                position: "absolute",
                top: "36%",
                fontSize: "16px",
                padding: "20px 10px",
                textAlign: "left",
                lineHeight: "25px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              5
            </p>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="5">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80"
              width="360"
              height="720"
              layout="fill"
              animate-in="fade-in"
            ></amp-img>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <p
              style={{
                color: "rgba(255, 255, 255, 1)",
                background: "rgba(0, 0, 0, 1)",
                position: "absolute",
                top: "36%",
                fontSize: "16px",
                padding: "20px 10px",
                textAlign: "left",
                lineHeight: "25px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              6
            </p>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="6">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1554595666-19ceabf46a84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              width="360"
              height="720"
              layout="fill"
              animate-in="fade-in"
            ></amp-img>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <p
              style={{
                color: "rgba(255, 255, 255, 1)",
                background: "rgba(0, 0, 0, 1)",
                position: "absolute",
                top: "36%",
                fontSize: "16px",
                padding: "20px 10px",
                textAlign: "left",
                lineHeight: "25px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              7
            </p>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="7">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              width="360"
              height="720"
              layout="fill"
              animate-in="fade-in"
            ></amp-img>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <p
              style={{
                color: "rgba(255, 255, 255, 1)",
                background: "rgba(0, 0, 0, 1)",
                position: "absolute",
                top: "36%",
                fontSize: "16px",
                padding: "20px 10px",
                textAlign: "left",
                lineHeight: "25px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              8
            </p>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="8">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1579389083395-4507e98b5e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDYxOTZ8MHwxfHNlYXJjaHw5fHxhcHBsaWNhdGlvbnxlbnwwfDF8fHwxNjc3NzU5ODI2&ixlib=rb-4.0.3&q=80&w=400"
              width="360"
              height="720"
              layout="fill"
              animate-in="fade-in"
            ></amp-img>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <p
              style={{
                color: "rgba(255, 255, 255, 1)",
                background: "rgba(0, 0, 0, 1)",
                position: "absolute",
                top: "36%",
                fontSize: "16px",
                padding: "20px 10px",
                textAlign: "left",
                lineHeight: "25px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              9
            </p>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-auto-analytics gtag-id="G-5K7VWB3071"></amp-story-auto-analytics>

        <amp-story-auto-ads>
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: {
                "ad-attributes": {
                  type: "adsense",
                  "data-ad-client": "ca-pub-7971530262943091",
                  "data-ad-slot": "2891356213",
                },
              },
            }}
          ></script>
        </amp-story-auto-ads>
      </amp-story>
    </>
  );
}
