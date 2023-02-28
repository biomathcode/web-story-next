import Head from "next/head";
import { useAmp } from "next/amp";

import { StructuredData } from "../component/SEO/index";

// seo
// og:image
// image alt
// google analytics
// image format
// html lang
//

const data = StructuredData({
  link: "https://webstory.coolhead.in/function-scope-vs-block-scope-in-javascript",
  title: "Function Scope vs Block Scope in Javascript",
  description:
    "Difference between function scope and block scope in javascript. Scopes in Javascript",
  authorName: "Pratik Sharma",
  authorUrl: "http://coolhead.in",
  image:
    "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  publisherName: "Coolhead",
  publisherWebsite: "https://coolhead.in",
});

export const config = {
  amp: true,
};

export default function IndexPage() {
  const isAmp = useAmp();
  return (
    <>
      <Head>
        <title>Function Scope vs Block Scope in Javascript</title>
        <meta
          name="title"
          content="Function Scope vs Block Scope in Javascript"
        />
        <meta
          name="description"
          content=" Difference between function scope and block scope in javascript"
        />
        <meta property="og:type" content="blog" />
        <meta
          property="og:title"
          content="Function Scope vs Block Scope in Javascript"
        />

        <meta
          property="og:description"
          content="
          Difference between function scope and block scope in javascript
          "
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80"
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
          href="https://webstory.coolhead.in/function-scope-vs-block-scope-in-javascript"
        ></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          key="product-jsonld"
        />
      </Head>

      <style jsx>
        {`
          .p {
            font-size: 20px;
            padding: 20px;
            line-height: 28px;
            top: 50%;
            position: absolute;
            color: #ffffff;
            background: rgba(0, 0, 0, 0.5);

            font-family: "Inter", sans-serif;
          }
          .h1 {
            color: #ffffff;
            position: absolute;
            top: 50%;
            padding: 20px;
            font-size: 24px;
            font-weight: 600;
            font-family: "Inter", sans-serif;
          }

          body {
            background-color: #000;
            padding: 0 1rem;
            text-align: center;
          }

          .overlay {
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, transparent 0%, black 100%);
          }
        `}
      </style>

      <amp-story
        standalone=""
        title="Function Scope Vs Block Scope in Javascript"
        publisher="Coolhead"
        publisher-logo-src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        poster-portrait-src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      >
        <amp-story-page id="0">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1591710668263-bee1e9db2a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDYxOTZ8MHwxfHNlYXJjaHw0fHxKYXZhc2NyaXB0fGVufDB8MXx8fDE2NzcwODk2Njk&ixlib=rb-4.0.3&q=80&w=400"
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
            <h1 className="h1" animate-in="fly-in-top">
              Function Scope Vs Block Scope in Javascript
            </h1>
          </amp-story-grid-layer>
        </amp-story-page>
        <amp-story-page id="4">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1525373698358-041e3a460346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDYxOTZ8MHwxfHNlYXJjaHw1fHxwcm9ncmFtbWluZ3xlbnwwfDF8fHwxNjc3MzI3MzYy&ixlib=rb-4.0.3&q=80&w=400"
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
            <p className="p" animate-in="fly-in-top">
              Scope: It is a region of the program where a variable can be
              accessed. In other words, scope determines the
              accessibility/visibility of a variable.
            </p>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="4">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1525373698358-041e3a460346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDYxOTZ8MHwxfHNlYXJjaHw1fHxwcm9ncmFtbWluZ3xlbnwwfDF8fHwxNjc3MzI3MzYy&ixlib=rb-4.0.3&q=80&w=400"
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
            <p className="p" animate-in="fly-in-top">
              JavaScript has 3 types of scope: Global Scope, Function Scope and
              Block Scope
            </p>
          </amp-story-grid-layer>
        </amp-story-page>
        <amp-story-page id="5">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1608306448197-e83633f1261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDYxOTZ8MHwxfHNlYXJjaHw3fHxwcm9ncmFtbWluZ3xlbnwwfDF8fHwxNjc3MzI3MzYy&ixlib=rb-4.0.3&q=80&w=400"
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
            <p className="p" animate-in="fly-in-top">
              Global Scope: Variables declared Globally (outside any function)
              have Global Scope. Global variables can be accessed from anywhere
              in a JavaScript program.
            </p>
          </amp-story-grid-layer>
          <amp-story-page-outlink layout="nodisplay">
            <a
              href="https://blog.coolhead.in/difference-between-function-scope-and-block-scope-in-javascript"
              title="Link Description"
            >
              See code example
            </a>
          </amp-story-page-outlink>
        </amp-story-page>
        <amp-story-page id="4">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1528372444006-1bfc81acab02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDYxOTZ8MHwxfHNlYXJjaHwxMHx8cHJvZ3JhbW1pbmd8ZW58MHwxfHx8MTY3NzMyNzM2Mg&ixlib=rb-4.0.3&q=80&w=400"
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
            <p className="p" animate-in="fly-in-top">
              Local Scope: variables declared inside the functions are
              considered to be of the local scope and it is further divided into
              function scoped and block scoped.
            </p>
          </amp-story-grid-layer>
          <amp-story-page-outlink layout="nodisplay">
            <a
              href="https://blog.coolhead.in/difference-between-function-scope-and-block-scope-in-javascript"
              title="Link Description"
            >
              See code example
            </a>
          </amp-story-page-outlink>
        </amp-story-page>
        <amp-story-page id="1">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1668554245893-2430d0077217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDYxOTZ8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXJ8ZW58MHwxfHx8MTY3NjYzMDIxNA&ixlib=rb-4.0.3&q=80&w=400"
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
            <p className="p" animate-in="fly-in-top">
              Function scope is within the function. Block scope is within curly
              brackets.
            </p>
          </amp-story-grid-layer>
        </amp-story-page>
        <amp-story-page id="2">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1560235316-99f3ef4cbe98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDYxOTZ8MHwxfHNlYXJjaHw2fHxsYXRlJTIwbmlnaHR8ZW58MHwxfHx8MTY3NzMyODQ5MQ&ixlib=rb-4.0.3&q=80&w=400"
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
            <p className="p" animate-in="fly-in-top">
              Function Scope: When a variable is declared inside a function, it
              is only accessible within that function and cannot be used outside
              that function.
            </p>
          </amp-story-grid-layer>
          <amp-story-page-outlink layout="nodisplay">
            <a
              href="https://blog.coolhead.in/difference-between-function-scope-and-block-scope-in-javascript"
              title="Link Description"
            >
              See code example
            </a>
          </amp-story-page-outlink>
        </amp-story-page>
        <amp-story-page id="3">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://images.unsplash.com/photo-1668554245893-2430d0077217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDYxOTZ8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXJ8ZW58MHwxfHx8MTY3NjYzMDIxNA&ixlib=rb-4.0.3&q=80&w=400"
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
            <p className="p" animate-in="fly-in-top">
              Block Scope: A variable when declared inside the if/else
              conditions or inside for or while loops, are accessible within
              that particular condition or loop.
            </p>
          </amp-story-grid-layer>
          <amp-story-page-outlink layout="nodisplay">
            <a
              href="https://blog.coolhead.in/difference-between-function-scope-and-block-scope-in-javascript"
              title="Link Description"
            >
              See code example
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
