// rules of amp pages
// amp-story-page much have an id and children
// amp-cta much be a decendent of amp-story-page
// add move text settings
// animation is missing

// const newStory = AMP_STORY(AMP_STORY_PAGE(AMP_GRID_LAYER(AMP_IMAGE())))

//  AMP_STORY().AMP_STORY_PAGE().AMP_GRID_LAYER()
// animate-in can be added to amp_image, h1, p tags

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

const amp = {
  code: function (children: string) {
    return `<amp-story>${children}</amp-story>`;
  },
  children: {
    amp_story_page: {
      code: function (children: string) {
        return `<amp-story-page>${children}</amp-story-page>`;
      },
      children: {
        amp_grid_layout: "",
        code: function (children: string) {
          return `<amp-grid-layout>${children}</amp-grid-layout>`;
        },
        children: {
          h1: {
            code: function (children: string) {
              return `<h1>${children}</h1>`;
            },
          },
          p: {
            code: function (children: string) {
              return `<p>${children}</p>`;
            },
          },
          div: {
            code: function (children: string) {
              return `<div>${children}</div>`;
            },
          },
        },
      },
    },
  },
};

const dog: any = {
  is: "asdfsa",
  log() {
    console.log(this.is);
  },
  bark() {
    this.is = "woofing";
    this.log();
    return this;
  },
  walk() {
    this.is = "walking";
    this.log();
    return this;
  },
  eat() {
    this.is = "eating";
    this.log();
    return this;
  },
};

class story {
  content = "";
  newContent(children: string, type: string) {
    return `<${type}>${children} </${type}>`;
  }

  story_page(children: string) {
    this.content = `<amp-story>${this.newContent(
      children,
      "amp-story-page"
    )}<amp-story>`;

    return this.story_grid_layout(this.content);
  }

  story_grid_layout(children: string) {
    this.content = this.newContent(children, "amp-grid-layout");
    return this.story_image(this.content);
  }

  story_image(children: string) {
    this.content = this.newContent(children, "amp-image");
    return this;
  }
}

const newStory = new story();

console.log(newStory.story_grid_layout("somdafkm"));

// const newdata = amp_story().amp_story_page(id="this").amp_grid_layout().amp_image();

/*
<amp-story> 
  <amp-story-page id="">


  </amp-story-page>

</amp_story>
*/
