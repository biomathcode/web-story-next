import Head from "next/head";

export const config = {
  amp: true,
};

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>What is HTTP/3? - protocol explained</title>
        <meta
          name="description"
          content="HTTP/3 relies on the User Datagram Protocol (UDP), not the Transmission Control Protocol (TCP). Switching to UDP will enable faster connections and a faster user experience when browsing online."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="What is HTTP/3? - protocol explained"
        />
        <meta
          property="og:image"
          content="https://cdn.hashnode.com/res/hashnode/image/upload/v1680348307662/93133ef5-fb0a-4e2c-bffa-24f2c9660242.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
        />

        <meta
          property="og:description"
          content="HTTP/3 relies on the User Datagram Protocol (UDP), not the Transmission Control Protocol (TCP). Switching to UDP will enable faster connections and a faster user experience when browsing online."
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
          href="https://webstory.coolhead.in/https-3-explained"
        ></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              mainEntityOfPage: "what-is-http3-protocol-explained",
              headline: "What is HTTP/3? - protocol explained",
              description:
                "HTTP/3 relies on the User Datagram Protocol (UDP), not the Transmission Control Protocol (TCP). Switching to UDP will enable faster connections and a faster user experience when browsing online.",
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
                url: "https://cdn.hashnode.com/res/hashnode/image/upload/v1680348307662/93133ef5-fb0a-4e2c-bffa-24f2c9660242.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
              },
              datePublished: "2023-04-01T18:09:14.989Z",
              dateModified: "2023-04-01T18:09:14.989Z",
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
        title="What is HTTP/3? - protocol explained"
        publisher="Coolhead"
        publisher-logo-src="https://webstory.coolhead.in/apple-icon.png"
        poster-portrait-src="https://images.unsplash.com/photo-1549317336-206569e8475c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDYxOTZ8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG5ldHdvcmtpbmd8ZW58MHwxfHx8MTY4MDM3MTc2Nw&ixlib=rb-4.0.3&q=80&w=400"
      >
        <amp-story-page id="0">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1549317336-206569e8475c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDYxOTZ8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG5ldHdvcmtpbmd8ZW58MHwxfHx8MTY4MDM3MTc2Nw&ixlib=rb-4.0.3&q=80&w=400"
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
              Learn about HTTP/3 Protocol - Explained in detail here
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
                top: "57%",
                fontSize: "24px",
                padding: "14px 8px",
                textAlign: "center",
                lineHeight: "66px",
                fontFamily: "Inter",
              }}
              animate-in="fly-in-bottom"
            >
              Companies like Pinterest and google have already move to HTTP/3 -
              So what is this new Protocol
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
                top: "57%",
                fontSize: "18px",
                padding: "14px 8px",
                textAlign: "center",
                lineHeight: "42px",
                fontFamily: "Inter",
              }}
              animate-in="fly-in-bottom"
            >
              HTTP/3 is based on QUIC(Quick UDP Internet Connections), and thus
              UDP, rather than transmission control protocol (TCP), and TCP’s
              limitations are what caused my streaming video problems.
            </p>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="3">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1680337338795/d984c82f-0463-4800-a1ef-228641e9f7d1.png"
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
                top: "63%",
                fontSize: "16px",
                padding: "20px 10px",
                textAlign: "left",
                lineHeight: "25px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              The use of QUIC means that HTTP/3 relies on the User Datagram
              Protocol (UDP), not the Transmission Control Protocol (TCP).
              Switching to UDP will enable faster connections and a faster user
              experience when browsing online.
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

          <amp-story-grid-layer template="fill">
            <div className="overlay"></div>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <p
              style={{
                color: "rgba(255, 255, 255, 1)",
                background: "rgba(0, 0, 0, 1)",
                position: "absolute",
                top: "58%",
                fontSize: "16px",
                padding: "20px 10px",
                textAlign: "left",
                lineHeight: "26px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              HTTP/3 also includes features like improved header compression,
              server push, and early data, which can further improve the
              performance of web communication.
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
                top: "42%",
                fontSize: "16px",
                padding: "20px 19px",
                textAlign: "left",
                lineHeight: "40px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              Additionally, HTTP/3 uses TLS 1.3 as the default security
              protocol, which provides better security and privacy than previous
              versions of TLS.
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
                top: "41%",
                fontSize: "18px",
                padding: "20px 10px",
                textAlign: "left",
                lineHeight: "27px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              Benefits of HTTP/3 is that it can improve web performance,
              especially on mobile devices and in environments with poor network
              conditions. HTTP/3&apos;s use of UDP protocol helps to reduce the
              number of round trips required to establish a connection, which
              improves the overall latency.
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

          <amp-story-grid-layer template="fill">
            <div className="overlay"></div>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical">
            <p
              style={{
                color: "rgba(255, 255, 255, 1)",
                background: "rgba(0, 0, 0, 1)",
                position: "absolute",
                top: "45%",
                fontSize: "19px",
                padding: "20px 21px",
                textAlign: "left",
                lineHeight: "29px",
                fontFamily: "Inter",
              }}
              animate-in="fade-in"
            >
              However, it&apos;s worth noting that HTTP/3 is still a relatively
              new protocol, and not all web servers and clients support it yet.
            </p>
          </amp-story-grid-layer>

          <amp-story-page-outlink layout="nodisplay">
            <a
              href="https://blog.coolhead.in/what-is-http3-protocol-explained"
              title="Link Description"
            >
              Swipe Up to Learn More
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
