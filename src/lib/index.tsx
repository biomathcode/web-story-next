export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

type AnimationType = {
  label: String;
  value: animationType;
};

export const AnimationOptions: AnimationType[] = [
  {
    label: "Drop",
    value: "drop",
  },
  {
    label: "Fade In",
    value: "fade-in",
  },
  {
    label: "Fly In Bottom",
    value: "fly-in-bottom",
  },
  {
    label: "Fly In Top",
    value: "fly-in-top",
  },
  {
    label: "Fly In Right",
    value: "fly-in-right",
  },
  {
    label: "Fly In Left",
    value: "fly-in-left",
  },
  {
    label: "Pulse",
    value: "pulse",
  },
  {
    label: "Rotate In Left",
    value: "rotate-in-left",
  },
  {
    label: "Rotate In Right",
    value: "rotate-in-right",
  },

  {
    label: "Pan Left",
    value: "pan-left",
  },
  {
    label: "Pan Right",
    value: "pan-right",
  },
  {
    label: "Pan Up",
    value: "pan-up",
  },
  {
    label: "Pan Down",
    value: "pan-down",
  },
  {
    label: "Zoom In",
    value: "zoom-in",
  },
  {
    label: "Zoom Out",
    value: "zoom-out",
  },
];

export type animationType =
  | "drop"
  | "fade-in"
  | "fly-in-bottom"
  | "fly-in-top"
  | "fly-in-right"
  | "fly-in-left"
  | "pulse"
  | "rotate-in-left"
  | "rotate-in-right"
  | "twirl-in"
  | "whoosh-in-left"
  | "whoosh-in-right"
  | "pan-left"
  | "pan-right"
  | "pan-down"
  | "pan-up"
  | "zoom-in"
  | "zoom-out";

const HTML_TEMPLATE_STARTER = (children: string) => {
  return `<p>${children}</p>`;
};

const NEXT_SEO = () => {};

const NEXT_HEAD = (title: string, description: string, image: string) => {
  return `
  <Head>
        <title>${title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="${description}"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="${title}"
        />
        <meta
          property="og:image"
          content="${image}"
        />
  
        <meta
          property="og:description"
          content="${description}"
        />

  </Head>
  `;
};

const NEXT_TEMPLATE = () => {
  return `
    import Head from "next/head";
import { useAmp } from "next/amp";

import { StructuredData } from "../component/SEO/index";

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

    
    
    `;
};

const HTML_META = (title: string, description: string, image: string) => {
  return `
  <title>${title}</title>
  <meta
    name="description"
    content="${description}"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="${title}"
  />
  <meta
    property="og:image"
    content="${image}"
  />

  <meta
    property="og:description"
    content="${description}"
  />
  
  `;
};

const NEXTJS_TEMPLATE_STARTER = (children: string) => {
  return `<p>${children}</p>`;
};

const AMP_STORY = (
  children: string,
  title: string,
  publisher: string,
  publisherLogo: string,
  posterSrc: string,
  analytics: string = "",
  ads: string = ""
): string => {
  return `
    <amp-story
        standalone
        title="${title}"
        publisher="${publisher}"
        publisher-logo-src="${publisherLogo}"
        poster-portrait-src="${posterSrc}"
      >
      ${children}
      ${analytics}
      ${ads}
    </amp-story>
    `;
};

const AMP_STORY_PAGE = (children: string, id: string): string => {
  return `
    <amp-story-page id="${id}" >
    ${children}
    </amp-story-page>
    
    `;
};

const AMP_IMAGE = (
  src: string,
  width: number = 720,
  height: number = 1280,
  layout: string = "responsive",
  animation: animationType = "fade-in"
): string => {
  return `
    <amp-img
    src="${src}"
    width="${width}"
    height="${height}"
    layout="${layout}"
    animate-in="${animation}"
  ></amp-img>
    `;
};

const HTML_TEMPLATE = (
  children: string,
  styles: string,
  links: string,
  meta: string,
  canonicalLink?: string
) => {
  return `<!DOCTYPE html>

<html ⚡ amp lang="en">
  <head>
    <meta charset="utf-8" />
    ${meta}


    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script
      async
      custom-element="amp-story"
      src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
    ></script>
    <link
    rel="canonical"
    href="${canonicalLink}"
  />

  ${links}

    <meta
      name="viewport"
      content="width=device-width,minimum-scale=1,initial-scale=1"
    />
  
    <style amp-boilerplate>
      body {
        -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        animation: -amp-start 8s steps(1, end) 0s 1 normal both;
      }
      @-webkit-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @-moz-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @-ms-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @-o-keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      @keyframes -amp-start {
        from {
          visibility: hidden;
        }
        to {
          visibility: visible;
        }
      }
      
    </style>
   
    <noscript
      ><style amp-boilerplate>
        body {
          -webkit-animation: none;
          -moz-animation: none;
          -ms-animation: none;
          animation: none;
        }
      </style></noscript
    >
    <style amp-custom>

    .overlay {
      width: 100%;
     height: 100%;
      background: linear-gradient(to bottom, transparent 0%, black 100%);
   }
   h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }      
    ${styles}

    </style>
  </head>
  <body>
  ${children}

  </body>
  </html>
  
  `;
};

// for seo first element will be h1

// then all be the p

const AMP_HIGHLIGHTED_TEXT = (
  content: string,
  animation: animationType = "fade-in",
  color?: string,
  background?: string,
  tag: string = "p",
  textPosition: number = 36,
  fontSize: number = 24,
  textAlign: string = "center",
  paddingVertical: number = 10,
  paddingHorizontal: number = 10,
  lineHeight: number = 28
) => {
  return `
  <${tag}
  style="color:${color};
  position:absolute;
  top: ${textPosition}%;
  font-size: ${fontSize}px;
  padding:0px;
  "
  animate-in="${animation}"
  >
  <span
  style="background:${background};
  padding: ${paddingVertical}px ${paddingHorizontal}px;
  text-align: ${textAlign};
  line-height: ${lineHeight}px;
  display: inline;
  box-decoration-break: clone;
  border-radius: 10px;
 -webkit-box-decoration-break: clone;
  "
  >

   ${content}
   </span>
  </${tag}>
  `;
};

const AMP_TEXT = (
  content: string,
  animation: animationType = "fade-in",
  color?: string,
  background?: string,

  tag: string = "p",
  textPosition: number = 36,
  fontSize?: string,
  textAlign?: string,
  paddingVertical?: string,
  paddingHorizontal?: string,
  lineHeight?: string
): string => {
  return `
  <${tag}
  style="color:${color};
  background:${background};
  position:absolute;
  top: ${textPosition}%;
  padding: ${paddingVertical}px ${paddingHorizontal}px;
  font-size: ${fontSize}px;
  text-align: ${textAlign};
  line-height: ${lineHeight}px;
  "
  animate-in="${animation}"
  >
   ${content}
  </${tag}>`;
};

const AMP_NEXT_HIGHLIGHTED_TEXT = (
  content: string,
  animation: animationType = "fade-in",
  color?: string,
  background?: string,
  tag: string = "p",
  textPosition: number = 36,
  fontSize: number = 24,
  textAlign: string = "center",
  paddingVertical: number = 10,
  paddingHorizontal: number = 10,
  lineHeight: number = 28
) => {
  return `
 <${tag}
  style={{
  color:"${color}",
  position:"absolute",
  top: "${textPosition}%",
  fontSize: "${fontSize}px",
  padding:"0px",
  }}
  animate-in="${animation}"
  >
  <span
  style={{
    borderRadius: "10px",
    boxDecorationBreak: "clone",
    WebkitBoxDecorationBreak: "clone",
    display: "inline",
    background:"${background}",
    padding: "${paddingVertical}px ${paddingHorizontal}px",
    textAlign: "${textAlign}",
    lineHeight: "${lineHeight}px",
  }}
  >

   ${content}
   </span>
  </${tag}>
 `;
};

const AMP_NEXT_TEXT = (
  content: string,
  animation: animationType = "fade-in",
  color?: string,
  background?: string,

  tag: string = "p",
  textPosition: number = 36,
  fontSize?: number,
  textAlign?: string,
  paddingVertical?: number,
  paddingHorizontal?: number,
  lineHeight?: number
) => {
  return `
  <${tag}
  style={{
    color: "${color}",
    background: "${background}",
    position: "absolute", 
    top: "${textPosition}%",
    fontSize: "${fontSize}px",
    padding: "${paddingVertical}px ${paddingHorizontal}px", 
    textAlign: "${textAlign}", 
    lineHeight: "${lineHeight}px",
  }}
  animate-in="${animation}"
  >
  ${content}
  </${tag}>`;
};

const AMP_OVERLAY = (): string => {
  return `
  <div
  class="overlay"
  >
  </div>

  `;
};

const AMP_NEXT_OVERLAY = (): string => {
  return `<div className="overlay"></div>`;
};

const AMP_CTA_LAYER = (href: string, text: string): string => {
  return `

  <amp-story-page-outlink layout="nodisplay">
    <a href="${href}" title="Link Description">${text}</a>
  </amp-story-page-outlink>

  `;
};

// template = 'fill', 'thirds', 'vertical', 'horizontal'

type templateType = "fill" | "thirds" | "vertical" | "horizontal";

const AMP_GRID_LAYER = (children: string, template: templateType): string => {
  return `
    <amp-story-grid-layer template="${template}">
            ${children}
    </amp-story-grid-layer>
    `;
};

const AMP_STORY_AUTO_ADS = (client: string, slot: string) => {
  return `
  <amp-story-auto-ads>
  <script type="application/json">
  {
   "ad-attributes": {
    "type": "adsense",
    "data-ad-client": "${client}",
    "data-ad-slot": "${slot}"
   }
  }
  </script>
</amp-story-auto-ads>
  
  `;
};

const AMP_NEXT_STORY_AUTO_ADS = (client: string, slot: string) => {
  const data = JSON.stringify({
    "ad-attributes": {
      type: "adsense",
      "data-ad-client": client,
      "data-ad-slot": slot,
    },
  });

  return `
  <amp-story-auto-ads>
  <script type="application/json"
  dangerouslySetInnerHTML={{__html: ${data}}}
  >
  
  </script>
</amp-story-auto-ads>
  `;
};

const AMP_ANALYTICS = (tag: string) => {
  return `
  <amp-story-auto-analytics 
    gtag-id="${tag}"
  >
  </amp-story-auto-analytics>
  `;
};

const AMP_STYLES = (
  id: string,
  fontSize: string,
  color: string,
  background: string,
  textAlign: string
) => {
  return `
    .${id} {
      font-size: ${fontSize};
      color: ${color};
      background: ${background};
    }
  `;
};

export {
  AMP_STORY,
  AMP_STORY_PAGE,
  AMP_GRID_LAYER,
  AMP_IMAGE,
  AMP_TEXT,
  AMP_CTA_LAYER,
  AMP_OVERLAY,
  HTML_TEMPLATE,
  AMP_ANALYTICS,
  HTML_META,
  AMP_STYLES,
  AMP_STORY_AUTO_ADS,
  AMP_HIGHLIGHTED_TEXT,
  AMP_NEXT_HIGHLIGHTED_TEXT,
  AMP_NEXT_TEXT,
  AMP_NEXT_STORY_AUTO_ADS,
  AMP_NEXT_OVERLAY,
};
