import { useEffect, useState } from "react";

import useLocalStorage from "use-local-storage";

import {
  DndContext,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import NavBar from "@/component/Navbar";

import NewView from "@/component/NewView";

import LeftSidebar from "@/component/LeftSidebar";
import RightSidebar from "@/component/RightSidebar";
import {
  Group as PanelGroup,
  Panel,
  Separator as PanelResizeHandle,
} from "react-resizable-panels";
import { Item } from "@/component/Droppable";
import { animationType } from "@/lib";
import Script from "next/script";
import { StructuredData } from "@/component/SEO";
import withNoSSR from "@/component/Nossr";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { INFO, SCHEMA, STATE } from "@/lib/constants";
import { TasksProvider } from "@/context/data";
import { registerWebMcpTools } from "@/lib/webmcp";

const inter = { className: "inter" };

const seo = {
  title: "Best Free Web Stories Generator - No Sign Up Required",
  description:
    "Create Google Web Stories for free with a no-code editor. No Google Web Stories login or sign up required. Generate AMP-ready stories, examples, SEO metadata, structured data, analytics, and monetization markup in minutes.",
  url: "https://webstory.coolhead.in",
  image: "https://webstory.coolhead.in/og.jpeg",
  keywords:
    "best free web stories generator, google web stories, chrome web stories, google web stories examples, google web stories app, create google web stories, google web stories login, free web story generator, no sign up web stories, no-code AMP stories, structured data, carousel rich results, SEO",
};

const webApplicationStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Coolhead Web Story Generator",
  alternateName: [
    "Best Free Web Stories Generator",
    "Google Web Stories App",
    "Chrome Web Stories Generator",
  ],
  url: seo.url,
  image: seo.image,
  applicationCategory: "DesignApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires a modern browser such as Google Chrome",
  isAccessibleForFree: true,
  sameAs: [
    "https://coolhead.in",
    "https://github.com/biomathcode",
    "https://linkedin.com/in/biomathcode",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Create Google Web Stories",
    "Google Web Stories examples",
    "Structured data for rich results",
    "No Google Web Stories login required",
  ],
  description: seo.description,
};

export type state = {
  image: string;
  paddingX: number;
  paddingY: number;
  fontSize: number;
  textPosition: number;
  textAlign: "left" | "right" | "center";
  text: string;
  color: string;
  lineHeight: number;
  background: string;
  highlight: "box" | "mark" | "none";
  cta: boolean;
  url: string;
  ctaText: string;

  textAnimation: animationType;
  imageAnimation: animationType;
  overlay: boolean;
};

export type userState = {
  name: string;
  photo: string;
  numPosts: number;
  publicationDomain: string;

  username: string;
  publication: {
    posts: Posts[];
  };
};

export type Posts = {
  type: string;
  contentMarkdown: string;
  slug: string;
  title: string;
  brief: string;
  coverImage: string;
};

export type ContentType = {
  type: string;
  raw: string;
  text: string;
  tokens: string;
};

export type seoType = {
  title: string;
  description: string;
  image: string;
};

export type publisherType = {
  websiteUrl: string;
  websiteName: string;
  websiteLogo: string;
};

export type analyticsType = {
  gtag: string;
};

export type monetizeType = {
  client: string;
  slot: string;
};

export type authorType = {
  authorName: string;
  authorUrl: string;
  authorImage: string;
};

const image = [
  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80",
  "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80",
  "https://images.unsplash.com/photo-1554595666-19ceabf46a84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
];

function Home() {
  const [content, setContent] = useState<ContentType[]>([]);

  const [url, setUrl] = useState("https://coolhead.in");

  const [newSelect, setNewSelect] = useState(0);

  const [activeId, setActiveId] = useState<number | null>(null);

  const [schema, setSchema] = useLocalStorage<seoType>(
    SCHEMA,
    {
      title: "",
      description: "",
      image: "",
    },
    {
      syncData: true,
    }
  );

  const [newState, setNewState] = useLocalStorage<state[]>(STATE, [
    {
      image: image[0],
      text: "title ",
      lineHeight: 20,
      fontSize: 16,
      color: "#ffffff",
      paddingX: 10,
      paddingY: 20,
      textPosition: 36,

      textAlign: "center", // left, right or center
      background: "#000000", // string
      highlight: "mark",
      cta: false,
      ctaText: "",
      url: "",
      textAnimation: "fade-in",
      imageAnimation: "fade-in",
      overlay: false,
    },
  ]);

  useEffect(() => {
    const unregister = registerWebMcpTools({
      getStoryState: () => newState,
      setStoryText: (slideIndex, text) => {
        setNewState(
          newState.map((slide, index) =>
            index === slideIndex ? { ...slide, text } : slide
          )
        );
        setNewSelect(slideIndex);
      },
      setSeo: (nextSeo) => {
        setSchema({
          ...schema,
          ...nextSeo,
        });
      },
    });

    return unregister;
  }, [newState, schema, setNewState, setSchema]);

  const handleDragEnd = ({ active, over }: { active: any; over: any }) => {
    if (!over) {
      setActiveId(null);

      return;
    } else {
      if (active.id && active.data.current.title) {
        const state = newState.map((e, i) => {
          if (active.data.current.type === "template") {
            return {
              ...e,
              ...active.data.current.data,
            };
          }
          if (active.data.current.type === "image") {
            return i === newSelect
              ? {
                  ...e,
                  image: active.data.current.href,
                }
              : e;
          } else {
            return i === newSelect
              ? {
                  ...e,

                  text: active.data.current.title,
                }
              : e;
          }
        });

        setNewState(state);
      }
    }
    setActiveId(null);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragStart(event: any) {
    setActiveId(event.active.data.current);
  }

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="application-name" content="Coolhead Web Story Generator" />
        <link rel="canonical" href={seo.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@biomathcode" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <meta name="title" content={seo.title} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:url" content={seo.url} />
        <meta property="og:site_name" content="Coolhead Web Story" />
      </Head>
      <Script
        id="this"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [
              StructuredData({
                link: seo.url,
                title: seo.title,
                description: seo.description,
                image: seo.image,
                authorName: "Pratik Sharma",
                authorUrl: "https://coolhead.in",
                publisherName: "Coolhead",
                publisherWebsite: "https://coolhead.in",
              }),
              webApplicationStructuredData,
            ]
          ),
        }}
      />
      <TasksProvider>
        <div className={`${inter.className} app-shell`}>
          <Toaster />

          <NavBar url={url} setUrl={setUrl} setData={setContent} />

          <div className="editor-shell">
            <PanelGroup orientation="horizontal">
              <DndContext
                sensors={sensors}
                onDragStart={handleDragStart}
                onDragEnd={(e) => handleDragEnd(e)}
              >
                <Panel
                  defaultSize={28}
                  minSize={22}
                  className="side-panel left"
                >
                  <RightSidebar content={content} />
                </Panel>
                <PanelResizeHandle className="resize-handle">
                  <svg className="drag_handler" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M18,16V13H15V22H13V2H15V11H18V8L22,12L18,16M2,12L6,16V13H9V22H11V2H9V11H6V8L2,12Z"
                    ></path>
                  </svg>
                </PanelResizeHandle>
                <Panel defaultSize={46} minSize={36}>
                  <div className="canvas-stage">
                    <NewView
                      dragActive={activeId}
                      newState={newState}
                      newSelect={newSelect}
                      setNewSelect={setNewSelect}
                      setNewState={setNewState}
                    />
                  </div>
                </Panel>

                <DragOverlay>
                  {activeId ? <Item data={activeId} /> : null}
                </DragOverlay>

                <PanelResizeHandle className="resize-handle">
                  <svg className="drag_handler" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M18,16V13H15V22H13V2H15V11H18V8L22,12L18,16M2,12L6,16V13H9V22H11V2H9V11H6V8L2,12Z"
                    ></path>
                  </svg>
                </PanelResizeHandle>
                <Panel
                  defaultSize={26}
                  minSize={22}
                  className="side-panel right"
                >
                  <LeftSidebar
                    inter={inter}
                    newSelect={newSelect}
                    newState={newState}
                    setNewState={setNewState}
                  />
                </Panel>
              </DndContext>
            </PanelGroup>
          </div>
        </div>
      </TasksProvider>
    </>
  );
}

export default withNoSSR(Home);
