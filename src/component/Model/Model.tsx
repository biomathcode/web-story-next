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
  AMP_STORY,
  AMP_STORY_PAGE,
  AMP_TEXT,
} from "@/lib";
import Editor from "@monaco-editor/react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Cross2Icon,
  EnterFullScreenIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import useLocalStorage from "use-local-storage";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import styles from "./Model.module.css";

const Model = () => {
  const [data, setData] = useLocalStorage("state", []);

  const newData = AMP_STORY(
    data
      .map((el: any, i: any) => {
        return AMP_STORY_PAGE(
          AMP_GRID_LAYER(
            AMP_IMAGE(el.image, 360, 720, "fill", "fade-in"),
            "fill"
          ) + AMP_GRID_LAYER(AMP_TEXT(el.text, "fade-in"), "fill"),
          i
        );
      })
      .join("\n"),
    "this is an amp story",
    "Coolhead",
    "https://coolhead.in",
    ""
  );

  const options = {
    selectOnLineNumbers: true,
    minimap: {
      autohide: true,
      enabled: false,
    },
    fontSize: 14,
  };

  const handle = useFullScreenHandle();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="btn violet flex center gap-10">
          <GearIcon />
          Generate Code
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.DialogTitle}>
            Edit profile
          </Dialog.Title>
          <Dialog.Description className={styles.DialogDescription}>
            <button
              onClick={handle.enter}
              style={{ padding: "2px 5px" }}
              className="btn flex gap-10 center"
            >
              <EnterFullScreenIcon />
              FullScreen
            </button>
          </Dialog.Description>
          <FullScreen handle={handle}>
            <Editor
              options={options}
              width="100%"
              height="100%"
              language="html"
              theme="vs-dark"
              className={styles.editor}
              value={newData || "somethng"}
            />
          </FullScreen>
          {/* <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.Input}
            id="name"
            defaultValue="Pedro Duarte"
          />
        </fieldset>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="username">
            Username
          </label>
          <input
            className={styles.Input}
            id="username"
            defaultValue="@peduarte"
          />
        </fieldset> */}
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
          </div>
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
