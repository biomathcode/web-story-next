import Head from "next/head";

export const config = {
  amp: true,
};

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Demystifying JavaScript Terminology</title>
        <meta
          name="description"
          content="Learn the terms that are highly used in javascript, and that would help you learn javascript better."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Demystifying JavaScript Terminology"
        />
        <meta
          property="og:image"
          content="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/GhxWry42_zQ/upload/349e8a3644cf3c9cbd530f675565a9bb.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
        />

        <meta
          property="og:description"
          content="Learn the terms that are highly used in javascript, and that would help you learn javascript better."
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
        <link
          rel="canonical"
          href="https://webstory.coolhead.in/demystifying-javascript-terminology"
        ></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              mainEntityOfPage: "demystifying-javascript-terminology",
              headline: "Demystifying JavaScript Terminology",
              description:
                "Learn the terms that are highly used in javascript, and that would help you learn javascript better.",
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
                url: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/GhxWry42_zQ/upload/349e8a3644cf3c9cbd530f675565a9bb.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
              },
              datePublished: "2023-09-09T10:52:35.636Z",
              dateModified: "2023-09-09T10:52:35.636Z",
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
        standalone=""
        title="Demystifying JavaScript Terminology"
        publisher="Coolhead"
        publisher-logo-src="https://webstory.coolhead.in/apple-icon.png"
        poster-portrait-src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDYxOTZ8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wZXJ8ZW58MHwxfHx8MTY5NDI1NjIwOXww&ixlib=rb-4.0.3&q=80&w=400"
      >
        <amp-story-page id="0">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDYxOTZ8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wZXJ8ZW58MHwxfHx8MTY5NDI1NjIwOXww&ixlib=rb-4.0.3&q=80&w=400"
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
            <h1
              style={{
                color: "rgba(255, 255, 255,1)",
                background: "rgba(0, 0, 0,0.6)",
                position: "absolute",
                top: "57%",
                fontSize: "24px",
                padding: "14px 8px",
                textAlign: "center",
                lineHeight: "66px",
                fontFamily: "Inter",
              }}
              animate-in="fly-in-bottom"
            >
              Demystifying Javascript Terminology
            </h1>
          </amp-story-grid-layer>
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

          <amp-story-grid-layer template="fill">
            <div className="overlay"></div>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <p
              style={{
                color: "rgba(255, 255, 255,1)",
                background: "rgba(0, 0, 0,0.6)",
                position: "absolute",
                top: "39%",
                fontSize: "24px",
                padding: "14px 8px",
                textAlign: "center",
                lineHeight: "66px",
                fontFamily: "Inter",
              }}
              animate-in="fly-in-bottom"
            >
              Syntax Parser: A Program that reads and determines what it does
              and if the grammar is valid.
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

          <amp-story-grid-layer template="fill">
            <div className="overlay"></div>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <p
              style={{
                color: "rgba(255, 255, 255,1)",
                background: "rgba(0, 0, 0,0.6)",
                position: "absolute",
                top: "51%",
                fontSize: "23px",
                padding: "14px 8px",
                textAlign: "center",
                lineHeight: "42px",
                fontFamily: "Inter",
              }}
              animate-in="fly-in-bottom"
            >
              Lexical Environment: where something sits physically in the code
              you write.
            </p>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="3">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1553390774-b4822481c894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MDYxOTZ8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXZlbG9wZXJ8ZW58MHwxfHx8MTY5NDI1NjIwOXww&ixlib=rb-4.0.3&q=80&w=400"
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
                top: "54%",
                fontSize: "20px",
                padding: "20px 10px",
                textAlign: "left",
                lineHeight: "30px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              Execution Contexts: A wrapper to help the code that is running.
            </p>
          </amp-story-grid-layer>

          <amp-story-page-outlink layout="nodisplay">
            <a
              href="https://blog.coolhead.in/demystifying-javascript-terminology"
              title="Link Description"
            >
              Read More
            </a>
          </amp-story-page-outlink>
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

          <amp-story-grid-layer template="fill">
            <div className="overlay"></div>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <p
              style={{
                color: "rgba(255, 255, 255, 1)",
                background: "rgba(0, 0, 0, 1)",
                position: "absolute",
                top: "52%",
                fontSize: "19px",
                padding: "20px 10px",
                textAlign: "left",
                lineHeight: "28px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              Callbacks: A callback is a function passed as an argument to
              another function. This technique allows a function to call another
              function. A callback function can run after another function has
              finished.
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

          <amp-story-grid-layer template="fill">
            <div className="overlay"></div>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <p
              style={{
                color: "rgba(255, 255, 255, 1)",
                background: "rgba(0, 0, 0, 1)",
                position: "absolute",
                top: "51%",
                fontSize: "21px",
                padding: "20px 19px",
                textAlign: "left",
                lineHeight: "40px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              Coercion: Converting a value from one type to another
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
                top: "49%",
                fontSize: "21px",
                padding: "20px 10px",
                textAlign: "left",
                lineHeight: "27px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              IIFE: IIFE (Immediately Invoked Function Expression) is a
              JavaScript function that runs as soon as it is defined.
            </p>
          </amp-story-grid-layer>

          <amp-story-page-outlink layout="nodisplay">
            <a
              href="https://blog.coolhead.in/demystifying-javascript-terminology"
              title="Link Description"
            >
              Learn More
            </a>
          </amp-story-page-outlink>
        </amp-story-page>

        <amp-story-auto-analytics gtag-id="G-5K7VWB3071"></amp-story-auto-analytics>

        <amp-story-auto-ads>
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "ad-attributes": {
                  type: "adsense",
                  "data-ad-client": "ca-pub-7971530262943091",
                  "data-ad-slot": "2891356213",
                },
              }),
            }}
          ></script>
        </amp-story-auto-ads>
      </amp-story>
    </>
  );
}
