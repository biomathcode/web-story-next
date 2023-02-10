// TODO: write a unit test for this file
// TODO: validate the AMP code created

import { type } from "os";

// rules of amp pages
// amp-story-page much have an id and children
// amp-cta much be a decendent of amp-story-page
// add move text settings
// animation is missing

// const newStory = AMP_STORY(AMP_STORY_PAGE(AMP_GRID_LAYER(AMP_IMAGE())))

//  AMP_STORY().AMP_STORY_PAGE().AMP_GRID_LAYER()
// animate-in can be added to amp_image, h1, p tags

//<p class="my-element"
// animate-in="fly-in-left"
// animate-in-delay="0.3s"
// animate-in-duration="0.5s">
// I'm going to fly into the page from the left!
// </p>
type animationType =
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
        standalone=""
        title="${title}"
        publisher="${publisher}"
        publisher-logo-src="${publisherLogo}"
        poster-portrait-src="${posterSrc}"
      >
      ${children}
    </amp-story>
    `;
};

const AMP_STORY_PAGE = (children: string): string => {
  return `
    <amp-story-page >
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

const AMP_TEXT = (
  content: string,
  animation: animationType = "fade-in"
): string => {
  return `<h1 animate-in="${animation}">${content}</h1>`;
};

const AMP_CTA_LAYER = (href: string, text: string): string => {
  return `
    <amp-story-cta-layer>
    <a
      style={{
        textDecoration: "none",
        fontSize: "24px",
        background: "#111",
        color: "#fff",
        width: "fit-content",
        padding: "10px",
        borderRadius: "4px",
        marginLeft: "100px",
      }}
      animate-in="fly-in-top"
      animate-in-delay="0.4s"
      href="${href}"
      class="button medium center"
    >
      <p class="20px">${text}</p>
    </a>
  </amp-story-cta-layer>
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
};
