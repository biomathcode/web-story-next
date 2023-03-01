// title
// info
// children
// open
// setOpen

// use case for Code generated display
// Copy, Download File

import {
  AMP_ANALYTICS,
  AMP_CTA_LAYER,
  AMP_GRID_LAYER,
  AMP_HIGHLIGHTED_TEXT,
  AMP_IMAGE,
  AMP_OVERLAY,
  AMP_STORY,
  AMP_STORY_AUTO_ADS,
  AMP_STORY_PAGE,
  AMP_TEXT,
  HTML_TEMPLATE,
  slugify,
} from "@/lib";
import Editor from "@monaco-editor/react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Cross2Icon,
  DownloadIcon,
  EnterFullScreenIcon,
  GearIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import useLocalStorage from "use-local-storage";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { z } from "zod";
import styles from "./Model.module.css";
import { useEffect, useState } from "react";
import {
  analyticsType,
  authorType,
  monetizeType,
  publisherType,
  seoType,
  state,
} from "@/pages";
import {
  ANALYTICS,
  AUTHOR,
  MONETIZE,
  PUBLISHER,
  SCHEMA,
  STATE,
} from "@/lib/constants";
import { StructuredData } from "../SEO";

const storyObject = z.object({
  image: z.string().url(),
  paddingX: z.number(),
  paddingY: z.number(),
  fontSize: z.number(),
  textAlign: z.enum(["left", "right", "center"]),
  text: z.string(),
  color: z.string(),
  lineHeight: z.string(),
  background: z.string(),
  highlight: z.enum(["box", "mark"]),
  cta: z.boolean(),
  url: z.string().url(),
  ctaText: z.string(),
  overlay: z.boolean(),
  textAnimation: z.string(),
  imageAnimation: z.string(),
});

const Model = () => {
  const [code, setCode] = useState("");

  const [previewLink, setPreviewLink] = useState("");

  const options = {
    selectOnLineNumbers: true,
    minimap: {
      autohide: true,
      enabled: false,
    },
    fontSize: 14,
  };

  const handle = useFullScreenHandle();

  function handleChange() {
    const item = window.localStorage.getItem(STATE);
    const pubinfo = window.localStorage.getItem(PUBLISHER);

    const monetizeinfo = window.localStorage.getItem(MONETIZE);

    const analyticInfo = window.localStorage.getItem(ANALYTICS);

    const authorinfo = window.localStorage.getItem(AUTHOR);

    const structedinfo = window.localStorage.getItem(SCHEMA);

    const data = item && JSON.parse(item);
    const publisher: publisherType = pubinfo && JSON.parse(pubinfo);

    const monetize: monetizeType = monetizeinfo && JSON.parse(monetizeinfo);

    const analytics: analyticsType = analyticInfo && JSON.parse(analyticInfo);

    const author: authorType = authorinfo && JSON.parse(authorinfo);

    const structeddata: seoType = structedinfo && JSON.parse(structedinfo);

    const ampStory = AMP_STORY(
      data
        .map((el: state, i: any) => {
          const cta = el.cta ? AMP_CTA_LAYER(el.url, el.ctaText) : "";

          const tag = i === 0 ? "h1" : "p";

          const text =
            el.highlight === "box"
              ? AMP_TEXT(" ", "drop")
              : AMP_HIGHLIGHTED_TEXT("", "fade-in");

          const overlay = el.overlay
            ? AMP_GRID_LAYER(AMP_OVERLAY(), "fill")
            : "";

          return AMP_STORY_PAGE(
            AMP_GRID_LAYER(
              AMP_IMAGE(el.image, 360, 720, "fill", el.imageAnimation),
              "fill"
            ) +
              overlay +
              AMP_GRID_LAYER(
                AMP_TEXT(
                  el.text,
                  el.textAnimation,
                  el.color,
                  el.background,
                  tag,
                  el.textPosition,
                  el.fontSize.toString(),
                  el.textAlign,
                  el.paddingY.toString(),
                  el.paddingX.toString(),
                  el.lineHeight.toString()
                ),
                "vertical"
              ) +
              cta,
            i
          );
        })
        .join("\n"),
      structeddata.title,
      publisher.websiteName,
      publisher.websiteLogo,
      data[0].image,
      analytics?.gtag && AMP_ANALYTICS(analytics.gtag),
      monetize?.client && AMP_STORY_AUTO_ADS(monetize.client, monetize.slot)
    );

    const schema = JSON.stringify(
      StructuredData({
        title: structeddata.title,
        description: structeddata.description,
        image: structeddata.image,
        authorName: author.authorName,
        authorUrl: author.authorUrl,
        publisherName: publisher.websiteName,
        publisherWebsite: publisher.websiteUrl,
      })
    );

    const schemaScript = `<script type="application/ld+json">${schema}</script>`;

    const newData = HTML_TEMPLATE(
      ampStory,
      `
      body {
        background-color: #000;
        padding: 0 1rem;
        text-align: center;
        font-family: 'Inter', sans-serif;
      }
    h1{
      font-size: 14px;
      margin-top:  50%;
    }
      `,
      `
      <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
      `,
      schemaScript,
      `${publisher.websiteUrl}/${slugify(structeddata.title)}`
    );

    setCode(newData);

    const baseData = btoa(unescape(encodeURIComponent(newData)));

    const previewLink = `https://playground.amp.dev/#share=${baseData}`;

    setPreviewLink(previewLink);
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          onClick={() => handleChange()}
          className="btn violet flex center gap-10"
        >
          <GearIcon />
          Generate Code
        </button>
      </Dialog.Trigger>
      <Dialog.Portal style={{ zIndex: 10 }}>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent} style={{ zIndex: 10 }}>
          <Dialog.Description className={styles.DialogDescription}>
            <button
              id="fullScreen"
              aria-label="Full Screen"
              onClick={handle.enter}
              style={{ padding: "2px 5px" }}
              className="btn flex gap-10 center"
            >
              <EnterFullScreenIcon />
              FullScreen
            </button>
            <button
              id="download_jsx"
              aria-label="download jsx"
              style={{ padding: "2px 5px" }}
              className="btn flex gap-10 center"
            >
              <DownloadIcon />
              Download JSX
            </button>
            <button
              aria-label="Download html"
              id="download_html"
              style={{ padding: "2px 5px" }}
              className="btn flex gap-10 center"
            >
              <DownloadIcon />
              Download html
            </button>
            <a
              target="_blank"
              rel="noreferrer"
              href={previewLink}
              className="btn inter flex gap-10 center "
            >
              <RocketIcon />
              Preview
            </a>
          </Dialog.Description>
          <FullScreen handle={handle}>
            <Editor
              options={options}
              width="100%"
              height="560px"
              language="html"
              theme="vs-dark"
              className={styles.editor}
              value={code || "somethng"}
            />
          </FullScreen>

          <Dialog.Close asChild>
            <button
              aria-labelledby="close"
              id="close"
              className={styles.IconButton}
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Model;
