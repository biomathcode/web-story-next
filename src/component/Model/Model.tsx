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
  ClipboardCopyIcon,
  CodeIcon,
  Cross2Icon,
  DownloadIcon,
  EyeOpenIcon,
  GearIcon,
} from "@radix-ui/react-icons";

import styles from "./Model.module.css";
import { useState } from "react";
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
import InfoCheckBox from "../InfoCheckbox/InfoCheckbox";

const Model = ({ isValid = false }) => {
  const [code, setCode] = useState("");

  const [nextcode, setNextCode] = useState("");

  const [previewLink, setPreviewLink] = useState("");

  const [isNext, setIsNext] = useState(false);
  const [viewMode, setViewMode] = useState<"code" | "preview">("code");
  const [copyStatus, setCopyStatus] = useState("");

  const activeCode = isNext ? nextcode : code;
  const activeLanguage = isNext ? "javascript" : "html";
  const activeLabel = isNext ? "Next JSX" : "HTML";

  const downloadTxtFile = (code: string, name: string, type = "html") => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${name}.${type}`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const copyToClipboard = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopyStatus(`${label} copied`);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = value;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopyStatus(`${label} copied`);
    }

    window.setTimeout(() => setCopyStatus(""), 2000);
  };

  const options = {
    selectOnLineNumbers: true,
    minimap: {
      autohide: "mouseover" as const,
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
    setViewMode("code");
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
        <Dialog.Portal>
          <Dialog.Overlay
            style={{ zIndex: 10 }}
            className={styles.DialogOverlay}
          />
          <Dialog.Content
            className={styles.DialogContent}
            style={{ zIndex: 10, fontFamily: "Inter" }}
          >
            <Dialog.Description className={styles.DialogDescription}>
              <div className={styles.Toolbar}>
                <div className={styles.ToolbarGroup}>
                  <button
                    aria-label={`Copy ${activeLabel}`}
                    className="btn flex gap-10 center fs-12"
                    onClick={() => copyToClipboard(activeCode, activeLabel)}
                    type="button"
                  >
                    <ClipboardCopyIcon />
                    Copy {activeLabel}
                  </button>
                  <button
                    aria-label="Copy HTML"
                    className="btn subtle flex gap-10 center fs-12"
                    onClick={() => copyToClipboard(code, "HTML")}
                    type="button"
                  >
                    <ClipboardCopyIcon />
                    HTML
                  </button>
                  <button
                    aria-label="Copy Next JSX"
                    className="btn subtle flex gap-10 center fs-12"
                    onClick={() => copyToClipboard(nextcode, "Next JSX")}
                    type="button"
                  >
                    <ClipboardCopyIcon />
                    JSX
                  </button>
                  <button
                    aria-label="Download html"
                    id="download_html"
                    // style={{ padding: "2px 5px" }}
                    className="btn flex gap-10 center fs-12"
                    onClick={(e) =>
                      downloadTxtFile(code, slugify(structeddata.title), "html")
                    }
                  >
                    <DownloadIcon />
                    Download html
                  </button>
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
                </div>

                <div className={styles.ToolbarGroup}>
                  <button
                    aria-pressed={viewMode === "code"}
                    className={
                      viewMode === "code"
                        ? "btn flex gap-10 center fs-12"
                        : "btn subtle flex gap-10 center fs-12"
                    }
                    onClick={() => setViewMode("code")}
                    type="button"
                  >
                    <CodeIcon />
                    Code
                  </button>
                  <button
                    aria-pressed={viewMode === "preview"}
                    className={
                      viewMode === "preview"
                        ? "btn flex gap-10 center fs-12"
                        : "btn subtle flex gap-10 center fs-12"
                    }
                    onClick={() => setViewMode("preview")}
                    type="button"
                  >
                    <EyeOpenIcon />
                    Preview here
                  </button>
                </div>

                <div className={styles.ToolbarGroup}>
                  <label>HTML</label>
                  <Toggle
                    name="isNext"
                    infoText="Get the code for nextjs"
                    onChange={(e) => setIsNext(e.target.value)}
                    value={isNext ? "true" : "false"}
                  />
                  <label>NEXTJS</label>
                </div>
              </div>
            </Dialog.Description>
            {copyStatus ? (
              <div className={styles.StatusMessage}>{copyStatus}</div>
            ) : null}
            {viewMode === "code" ? (
              <Editor
                options={options}
                width="100%"
                height="560px"
                language={activeLanguage}
                theme="vs-dark"
                className={styles.editor}
                value={activeCode}
              />
            ) : (
              <div className={styles.PreviewShell}>
                <iframe
                  title="Generated Web Story preview"
                  className={styles.PreviewFrame}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  srcDoc={code}
                />
                <div className={styles.PreviewAside}>
                  <h2>In-editor preview</h2>
                  <p>
                    This preview renders the generated HTML directly in this
                    editor. Use the copy buttons above when you are ready to
                    ship or test elsewhere.
                  </p>
                  {previewLink ? (
                    <a
                      href={previewLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn subtle flex gap-10 center fs-12"
                    >
                      Open AMP Playground
                    </a>
                  ) : null}
                </div>
              </div>
            )}
            <div
              style={{
                padding: "5px",
                border: "1px solid var(--blue10)",
              }}
            >
              Please add a canonical link within the head tag, before deploying
              the webstory
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
