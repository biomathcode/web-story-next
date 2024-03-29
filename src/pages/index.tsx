import { Inter } from "@next/font/google";

import { useEffect, useState } from "react";

import axios from "axios";
import { config } from "../axios/index";
import mdParser from "@/lib/markdownParser";
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
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Item } from "@/component/Droppable";
import { animationType } from "@/lib";
import Script from "next/script";
import { StructuredData } from "@/component/SEO";
import withNoSSR from "@/component/Nossr";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { INFO, SCHEMA, STATE } from "@/lib/constants";
import { TasksContext, TasksProvider } from "@/context/data";

const inter = Inter({ subsets: ["latin"] });

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
    console.log("this works");
    setActiveId(null);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragStart(event: any) {
    console.log(event.active.id);
    setActiveId(event.active.data.current);
  }

  return (
    <>
      <Head>
        <title>
          Webstory code generator- no code editor to create google web stories
          for free
        </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@biomathcode" />
        <meta
          name="twitter:title"
          content="Webstory code generator- no code editor to create google web stories for free"
        />
        <meta
          name="twitter:description"
          content="Learn the basic of seo of AMP web stories. Tips and tricks to improve the seo of your amp web stories."
        />
        <meta
          name="twitter:image"
          content="https://webstory.coolhead.in/og.jpeg"
        />
        <meta
          name="title"
          content="Webstory code generator- no code editor to create google web stories for free"
        />
        <meta
          name="description"
          content="Learn the basic of seo of AMP web stories. Tips and tricks to improve the seo of your amp web stories. "
        />
        <meta
          property="keywords"
          content="webstory, no-code, amp, free, hashnode, blog, coolhead "
        />

        <meta
          property="title"
          content="Webstory code generator- free no code editor web stories "
        />

        <meta
          property="description"
          content="Learn the basic of seo of AMP web stories. Tips and tricks to improve the seo of your amp web stories. "
        />
        <meta
          property="og:title"
          content="Webstory code generator- free no code editor web stories "
        />
        <meta
          property="og:description"
          content="Learn the basic of seo of AMP web stories. Tips and tricks to improve the seo of your amp web stories. - Coolhead || Web story"
        />
        <meta
          property="og:image"
          content="https://webstory.coolhead.in/og.jpeg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:url" content="https://webstory.coolhead.in" />
        <meta property="og:site" content="https://webstory.coolhead.in" />
      </Head>
      <Script
        id="this"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            StructuredData({
              title:
                "Webstory code generator- no code editor to create google web stories for free",
              description:
                " Learn the basic of seo of AMP web stories. Tips and tricks to improve the seo of your amp web stories. - Coolhead || Web story",
              image: "https://webstory.coolhead.in/og.jpeg",
              authorName: "Pratik Sharma",
              authorUrl: "https://coolhead.in",
              publisherName: "Coolhead",
              publisherWebsite: "https://coolhead.in",
            })
          ),
        }}
      />
      <TasksProvider>
        <div className={inter.className}>
          <Toaster />

          <NavBar url={url} setUrl={setUrl} setData={setContent} />

          <div
            style={{
              display: "flex",
              gap: "20px",
              width: "100vw",
              height: "calc(100vh - 60px ) ",
            }}
          >
            <PanelGroup direction="horizontal">
              <DndContext
                sensors={sensors}
                onDragStart={handleDragStart}
                onDragEnd={(e) => handleDragEnd(e)}
              >
                <Panel defaultSize={25} minSize={20}>
                  <RightSidebar content={content} />
                </Panel>
                <PanelResizeHandle
                  style={{
                    width: "10px",
                    height: "calc(100vh - 60px ) ",
                    display: "flex",
                    justifyContent: "center",

                    background: "#eee",
                  }}
                >
                  <svg className="drag_handler" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M18,16V13H15V22H13V2H15V11H18V8L22,12L18,16M2,12L6,16V13H9V22H11V2H9V11H6V8L2,12Z"
                    ></path>
                  </svg>
                </PanelResizeHandle>
                <Panel minSize={40}>
                  <div
                    style={{
                      height: "calc(100vh - 60px ) ",

                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "10px",
                      minWidth: "300px",
                    }}
                  >
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

                <PanelResizeHandle
                  style={{
                    width: "10px",
                    height: "calc(100vh - 60px ) ",
                    display: "flex",
                    justifyContent: "center",

                    background: "#eee",
                  }}
                >
                  <svg className="drag_handler" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M18,16V13H15V22H13V2H15V11H18V8L22,12L18,16M2,12L6,16V13H9V22H11V2H9V11H6V8L2,12Z"
                    ></path>
                  </svg>
                </PanelResizeHandle>
                <Panel
                  defaultSize={20}
                  minSize={20}
                  style={{ background: "#eee" }}
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
