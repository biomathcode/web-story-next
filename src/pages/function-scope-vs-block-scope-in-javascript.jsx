import Head from "next/head";
import { useAmp } from "next/amp";

import { structuredData } from "../component/SEO/index";

const data = structuredData({
  link: "https://webstory.coolhead.in/function-scope-vs-block-scope-in-javascript",
  title: "Function Scope vs Block Scope in Javascript",
  description:
    "Difference between function scope and block scope in javascript. Scopes in Javascript",
  authorName: "Pratik Sharma",
  authorUrl: "http://coolhead.in",
  image:
    "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
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
          content="Learn to create AMP page in this visual story"
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
        {/* 
        <link
          rel="canonical"
          href="https://webstory.coolhead.in/function-scope-vs-block-scope-in-javascript"
        ></link> */}
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
              src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDYxOTZ8MHwxfHNlYXJjaHwzfHxkZXZlbG9wZXJ8ZW58MHwxfHx8MTY3NjYzMDIxNA&ixlib=rb-4.0.3&q=80&w=400"
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
        </amp-story-page>
      </amp-story>
    </>
  );
}

function getStaticProps() {}
