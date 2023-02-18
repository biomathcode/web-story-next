// title
// info
// children
// open
// setOpen

// use case for Code generated display
// Copy, Download File

import Editor from "@monaco-editor/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, GearIcon } from "@radix-ui/react-icons";
import useLocalStorage from "use-local-storage";

import styles from "./Model.module.css";

const Model = () => {
  const data = window ? window?.localStorage?.getItem("state") : " something";

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
            Make changes to your profile here. Click save when done.
          </Dialog.Description>

          <Editor
            width="100%"
            height="700"
            language="json"
            theme="vs-dark"
            className={styles.editor}
            value={data || "somethng"}
          />
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
