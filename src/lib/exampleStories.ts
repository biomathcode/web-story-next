import { animationType } from "@/lib";
import { state } from "@/pages";

export type ExampleStory = {
  slug: string;
  title: string;
  category: string;
  description: string;
  keyword: string;
  sourceLabel: string;
  seoTitle: string;
  seoDescription: string;
  coverImage: string;
  slides: state[];
};

const slide = ({
  image,
  text,
  textPosition = 50,
  fontSize = 26,
  textAlign = "left",
  background = "rgba(0, 0, 0, 0.72)",
  color = "rgba(255, 255, 255, 1)",
  highlight = "box",
  overlay = true,
  cta = false,
  url = "",
  ctaText = "",
  textAnimation = "fade-in",
  imageAnimation = "fade-in",
}: {
  image: string;
  text: string;
  textPosition?: number;
  fontSize?: number;
  textAlign?: state["textAlign"];
  background?: string;
  color?: string;
  highlight?: state["highlight"];
  overlay?: boolean;
  cta?: boolean;
  url?: string;
  ctaText?: string;
  textAnimation?: animationType;
  imageAnimation?: animationType;
}): state => ({
  image,
  text,
  fontSize,
  textAlign,
  color,
  background,
  highlight,
  textPosition,
  lineHeight: Math.round(fontSize * 1.22),
  paddingX: 12,
  paddingY: 10,
  cta,
  url,
  ctaText,
  textAnimation,
  imageAnimation,
  overlay,
});

export const exampleStories: ExampleStory[] = [
  {
    slug: "seo-checklist-web-story",
    title: "SEO Checklist Story",
    category: "Marketing",
    keyword: "google web stories examples",
    sourceLabel: "Blog post to visual checklist",
    description:
      "A practical SEO checklist story that turns a long tutorial into a mobile-first summary with a final CTA.",
    seoTitle: "Google Web Stories SEO Checklist Example",
    seoDescription:
      "See how a blog SEO checklist can become a Google Web Story with short slides, strong contrast, and a final call to action.",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    slides: [
      slide({
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
        text: "A 5-slide SEO checklist built with the free Web Story editor",
        textPosition: 42,
        fontSize: 28,
        imageAnimation: "zoom-in",
      }),
      slide({
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        text: "Start with one search intent, not a broad topic",
        textPosition: 54,
        textAnimation: "fly-in-bottom",
      }),
      slide({
        image:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
        text: "Use a clear title, publisher logo, and poster image",
        textPosition: 58,
      }),
      slide({
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
        text: "Link the story back to the full guide",
        textPosition: 48,
        cta: true,
        url: "/seo-tips-for-google-web-stories",
        ctaText: "Read SEO tips",
      }),
    ],
  },
  {
    slug: "product-launch-web-story",
    title: "Product Launch Story",
    category: "Startup",
    keyword: "create google web stories",
    sourceLabel: "Launch announcement to story",
    description:
      "A launch announcement example with punchy product positioning and a conversion-focused CTA.",
    seoTitle: "Product Launch Google Web Story Example",
    seoDescription:
      "Preview a product launch Web Story created from a landing page or announcement article.",
    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    slides: [
      slide({
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
        text: "Launch your product story in minutes",
        textPosition: 46,
        fontSize: 30,
        imageAnimation: "pan-left",
      }),
      slide({
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
        text: "Show the problem before the feature list",
        textPosition: 56,
        textAnimation: "fly-in-left",
      }),
      slide({
        image:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80",
        text: "Use one proof point per slide",
        textPosition: 52,
      }),
      slide({
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
        text: "Send readers to the launch page",
        textPosition: 44,
        cta: true,
        url: "https://coolhead.in",
        ctaText: "Visit website",
      }),
    ],
  },
  {
    slug: "recipe-guide-web-story",
    title: "Recipe Guide Story",
    category: "Lifestyle",
    keyword: "google web stories examples",
    sourceLabel: "How-to article to step-by-step story",
    description:
      "A step-by-step recipe story showing how tutorial content can become a swipeable visual guide.",
    seoTitle: "Recipe Google Web Story Example",
    seoDescription:
      "See a real-life recipe Web Story format with steps, visuals, and a final recipe CTA.",
    coverImage:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=900&q=80",
    slides: [
      slide({
        image:
          "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=900&q=80",
        text: "Weekend pasta in four simple steps",
        textPosition: 50,
        fontSize: 30,
        imageAnimation: "zoom-in",
      }),
      slide({
        image:
          "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
        text: "Step 1: gather fresh ingredients",
        textPosition: 62,
        textAnimation: "fly-in-bottom",
      }),
      slide({
        image:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80",
        text: "Step 2: cook, toss, and plate",
        textPosition: 58,
      }),
      slide({
        image:
          "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80",
        text: "Save the full recipe for later",
        textPosition: 46,
        cta: true,
        url: "/best-free-web-stories-generator",
        ctaText: "Create yours",
      }),
    ],
  },
  {
    slug: "travel-itinerary-web-story",
    title: "Travel Itinerary Story",
    category: "Travel",
    keyword: "chrome web stories",
    sourceLabel: "Travel guide to story carousel",
    description:
      "A travel itinerary story that turns a guide into a visual route users can quickly scan on mobile.",
    seoTitle: "Travel Itinerary Web Story Example",
    seoDescription:
      "Preview a travel itinerary Web Story built from guide content, images, and destination CTAs.",
    coverImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    slides: [
      slide({
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        text: "Three days in the mountains",
        textPosition: 48,
        fontSize: 30,
        imageAnimation: "pan-right",
      }),
      slide({
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
        text: "Day 1: scenic drive and sunset viewpoint",
        textPosition: 56,
      }),
      slide({
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
        text: "Day 2: hike early, rest by noon",
        textPosition: 58,
        textAnimation: "fly-in-right",
      }),
      slide({
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
        text: "Turn any guide into a visual story",
        textPosition: 44,
        cta: true,
        url: "/create-google-web-stories-no-login",
        ctaText: "Build a story",
      }),
    ],
  },
];
