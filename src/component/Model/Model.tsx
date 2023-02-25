// title
// info
// children
// open
// setOpen

// use case for Code generated display
// Copy, Download File

import {
  AMP_CTA_LAYER,
  AMP_GRID_LAYER,
  AMP_IMAGE,
  AMP_OVERLAY,
  AMP_STORY,
  AMP_STORY_PAGE,
  AMP_TEXT,
  HTML_TEMPLATE,
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
    const item = window.localStorage.getItem("state");

    const data = item && JSON.parse(item);
    const ampStory = AMP_STORY(
      data
        .map((el: any, i: any) => {
          return AMP_STORY_PAGE(
            AMP_GRID_LAYER(
              AMP_IMAGE(el.image, 360, 720, "fill", "fade-in"),
              "fill"
            ) +
              AMP_GRID_LAYER(AMP_OVERLAY(), "fill") +
              AMP_GRID_LAYER(AMP_TEXT(el.text, "fly-in-top"), "vertical"),
            i
          );
        })
        .join("\n"),
      "this is an amp story",
      "Coolhead",
      "https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
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
      ""
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
              onClick={handle.enter}
              style={{ padding: "2px 5px" }}
              className="btn flex gap-10 center"
            >
              <EnterFullScreenIcon />
              FullScreen
            </button>
            <button
              style={{ padding: "2px 5px" }}
              className="btn flex gap-10 center"
            >
              <DownloadIcon />
              Download JSX
            </button>
            <button
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
            <button className={styles.IconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Model;
