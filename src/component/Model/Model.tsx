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
  AMP_NEXT_HIGHLIGHTED_TEXT,
  AMP_NEXT_OVERLAY,
  AMP_NEXT_STORY_AUTO_ADS,
  AMP_NEXT_TEXT,
  AMP_OVERLAY,
  AMP_STORY,
  AMP_STORY_AUTO_ADS,
  AMP_STORY_PAGE,
  AMP_TEXT,
  HTML_META,
  HTML_TEMPLATE,
  NEXTJS_TEMPLATE,
  NEXT_HEAD,
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
import Toggle from "../Toggle/Toggle";

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

const Model = ({ isValid = false }) => {
  const [code, setCode] = useState("");

  const [nextcode, setNextCode] = useState("");

  const [previewLink, setPreviewLink] = useState("");

  const [isNext, setIsNext] = useState(false);

  const downloadTxtFile = (code: string, name: string, type = "html") => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${name}.jsx`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const options = {
    selectOnLineNumbers: true,
    minimap: {
      autohide: true,
      enabled: false,
    },
    fontSize: 14,
  };

  const structedinfo = window.localStorage.getItem(SCHEMA);
  const structeddata: seoType = structedinfo && JSON.parse(structedinfo);

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

    const nextStory = AMP_STORY(
      data
        .map((el: state, i: any) => {
          const cta = el.cta ? AMP_CTA_LAYER(el.url, el.ctaText) : "";

          const tag = i === 0 ? "h1" : "p";

          const text =
            el.highlight === "box"
              ? AMP_NEXT_TEXT(
                  el.text,
                  el.textAnimation,
                  el.color,
                  el.background,
                  tag,
                  el.textPosition,
                  el.fontSize,
                  el.textAlign,
                  el.paddingY,
                  el.paddingX,
                  el.lineHeight
                )
              : AMP_NEXT_HIGHLIGHTED_TEXT(
                  el.text,
                  el.textAnimation,
                  el.color,
                  el.background,
                  tag,
                  el.textPosition,
                  el.fontSize,
                  el.textAlign,
                  el.paddingY,
                  el.paddingX,
                  el.lineHeight
                );

          const overlay = el.overlay
            ? AMP_GRID_LAYER(AMP_NEXT_OVERLAY(), "fill")
            : "";

          return AMP_STORY_PAGE(
            AMP_GRID_LAYER(
              AMP_IMAGE(el.image, 360, 720, "fill", el.imageAnimation),
              "fill"
            ) +
              overlay +
              AMP_GRID_LAYER(text, "vertical") +
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
      monetize?.client &&
        AMP_NEXT_STORY_AUTO_ADS(monetize.client, monetize.slot),
      'standalone=""'
    );

    const nextStyles = `
    <style jsx>
        {\`
          
          .overlay {
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, transparent 0%, black 100%);
          }
        \`}
      </style>
    
    `;

    const ampStory = AMP_STORY(
      data
        .map((el: state, i: any) => {
          const cta = el.cta ? AMP_CTA_LAYER(el.url, el.ctaText) : "";

          const tag = i === 0 ? "h1" : "p";

          const text =
            el.highlight === "box"
              ? AMP_TEXT(
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
                )
              : AMP_HIGHLIGHTED_TEXT(
                  el.text,
                  el.textAnimation,
                  el.color,
                  el.background,
                  tag,
                  el.textPosition,
                  el.fontSize,
                  el.textAlign,
                  el.paddingY,
                  el.paddingX,
                  el.lineHeight
                );

          const overlay = el.overlay
            ? AMP_GRID_LAYER(AMP_OVERLAY(), "fill")
            : "";

          return AMP_STORY_PAGE(
            AMP_GRID_LAYER(
              AMP_IMAGE(el.image, 360, 720, "fill", el.imageAnimation),
              "fill"
            ) +
              overlay +
              AMP_GRID_LAYER(text, "vertical") +
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

    const nextFile = NEXTJS_TEMPLATE(
      nextStory,
      NEXT_HEAD(
        structeddata.title,
        String(structeddata.description).replace(/(\r\n|\n|\r)/gm, ""),
        structeddata.image,
        `${publisher.websiteUrl}/${slugify(structeddata.title)}`,
        schema
      ),
      nextStyles
    );

    const schemaScript = `<script type="application/ld+json">${schema}</script> \n`;

    const meta =
      schemaScript +
      HTML_META(
        structeddata.title,
        String(structeddata.description).replace(/(\r\n|\n|\r)/gm, ""),
        structeddata.image
      );

    const newData = HTML_TEMPLATE(
      ampStory,
      `
      body {
        background-color: #000;
        padding: 0 1rem;
        text-align: center;
        font-family: 'Inter', sans-serif;
      }
      `,
      `
      <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
      `,
      meta,
      ``
    );

    setNextCode(nextFile);

    setCode(newData);

    const baseData = btoa(unescape(encodeURIComponent(newData)));

    const previewLink = `https://playground.amp.dev/#share=${baseData}`;

    setPreviewLink(previewLink);
  }

  return (
    <Dialog.Root modal={false}>
      <Dialog.Trigger disabled={false} asChild>
        <button
          onClick={() => handleChange()}
          disabled={false}
          style={{
            background: isValid ? "var(--blue10)" : "var(--slate12)",
          }}
          className="btn violet flex center gap-10"
        >
          <GearIcon />
          Generate Code
        </button>
      </Dialog.Trigger>
      {isValid && (
        <Dialog.Portal style={{ zIndex: 10, fontFamily: "Inter" }}>
          <Dialog.Overlay className={styles.DialogOverlay} />
          <Dialog.Content
            className={styles.DialogContent}
            style={{ zIndex: 10 }}
          >
            <Dialog.Description className={styles.DialogDescription}>
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="flex gap-10 center">
                  <button
                    id="download_jsx"
                    aria-label="download jsx"
                    className="btn flex gap-10 center fs-12"
                    onClick={(e) =>
                      downloadTxtFile(
                        nextcode,
                        slugify(structeddata.title),
                        "jsx"
                      )
                    }
                  >
                    <DownloadIcon />
                    Download JSX
                  </button>
                  <button
                    aria-label="Download html"
                    id="download_html"
                    // style={{ padding: "2px 5px" }}
                    className="btn flex gap-10 center fs-12"
                    onClick={(e) =>
                      downloadTxtFile(code, slugify(structeddata.title))
                    }
                  >
                    <DownloadIcon />
                    Download html
                  </button>
                </div>

                <div className="flex gap-10 center ">
                  <label>HTML</label>
                  <Toggle
                    name="isNext"
                    infoText="Get the code for nextjs"
                    onChange={(e) => setIsNext(e.target.value)}
                    value={isNext ? "true" : "false"}
                  />
                  <label>NEXTJS</label>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={previewLink}
                  style={{
                    background: "var(--violet10)",
                    textDecoration: "none",
                  }}
                  className="btn inter flex gap-10 center fs-12 "
                >
                  <RocketIcon />
                  Preview
                </a>
              </div>
            </Dialog.Description>
            <Editor
              options={options}
              width="100%"
              height="560px"
              language={isNext ? "javascript" : "html"}
              theme="vs-dark"
              className={styles.editor}
              value={isNext ? nextcode : code}
            />
            <div>
              Please add a canonical link inside the html, before deploying the
              webstory
            </div>

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
      )}
    </Dialog.Root>
  );
};

export default Model;
