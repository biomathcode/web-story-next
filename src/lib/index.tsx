// rules of amp pages
// amp-story-page much have an id and children
// amp-cta much be a decendent of amp-story-page
// add move text settings
// animation is missing

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
    label: "Twirl In",
    value: "twirl-in",
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
  | "none"
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

const NEXTJS_TEMPLATE_STARTER = (children: string) => {
  return `<p>${children}</p>`;
};

const AMP_STORY = (
  children: string,
  title: string,
  publisher: string,
  publisherLogo: string,
  posterSrc: string
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

const HTML_TEMPLATE = (children: string, styles: string, links: string) => {
  return `<!DOCTYPE html>

<html ⚡ amp>
  <head>
    <meta charset="utf-8" />


    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script
      async
      custom-element="amp-story"
      src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
    ></script>
    <title>Hello, AMPs</title>
    <link
    rel="canonical"
    href="https://webstory.coolhead.in/new-amp"
  />

  ${links}

    <meta
      name="viewport"
      content="width=device-width,minimum-scale=1,initial-scale=1"
    />
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        "headline": "Open-source framework for publishing content",
        "datePublished": "2015-10-07T12:02:41Z",
        "image": ["logo.jpg"]
      }
    </script>
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
 
  
   
      
    ${styles}

    </style>
  </head>
  <body>
  ${children}

  </body>
  </html>
  
  `;
};

const AMP_TEXT = (
  content: string,
  animation: animationType = "fade-in"
): string => {
  return `
  <h1
  animate-in="${animation}"
  >
   ${content}
  </h1>`;
};

const AMP_OVERLAY = (): string => {
  return `
  <div
  class="overlay"
  >
  </div>

  `;
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

export {
  AMP_STORY,
  AMP_STORY_PAGE,
  AMP_GRID_LAYER,
  AMP_IMAGE,
  AMP_TEXT,
  AMP_CTA_LAYER,
  HTML_TEMPLATE,
};
