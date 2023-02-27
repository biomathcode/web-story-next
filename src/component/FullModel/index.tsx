import { ComponentType, FunctionComponent, ReactNode } from "react";
import styles from "./styles.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Cross2Icon,
  DownloadIcon,
  EnterFullScreenIcon,
  GearIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

type ModelType = {
  triggerName: string;
  children: ReactNode;
};

function FullModel({ triggerName, children }: ModelType) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          onClick={() => console.log("this")}
          className="btn violet flex center gap-10 fs-12"
        >
          <GearIcon />
          {triggerName}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal style={{ zIndex: 10 }}>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent} style={{ zIndex: 10 }}>
          <Dialog.Title>Add Analytics</Dialog.Title>
          <Dialog.Description className={styles.DialogDescription}>
            <p>Add Analytics to your site</p>
          </Dialog.Description>

          {children}

          <Dialog.Close asChild>
            <button className={styles.IconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default FullModel;
