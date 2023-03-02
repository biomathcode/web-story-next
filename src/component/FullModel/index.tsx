import { ComponentType, FunctionComponent, ReactNode } from "react";
import styles from "./styles.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import { BackpackIcon, Cross2Icon, GearIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

type ModelType = {
  triggerName: string;
  children: ReactNode;
  icon: any;
};

function FullModel({ triggerName, children, icon }: ModelType) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          aria-label={triggerName}
          id={triggerName}
          className="btn violet flex center gap-10 fs-12 publish"
          style={{
            background:
              triggerName === "Publish" ? "var(--violet10)" : "var(--slate12)",
          }}
        >
          {icon}

          {triggerName}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal style={{ zIndex: 10 }}>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content
          className={classNames(styles.DialogContent, "inter")}
          style={{ zIndex: 10, overflow: "scroll" }}
        >
          <Dialog.Title>Add Aditional Information</Dialog.Title>
          <Dialog.Description className={styles.DialogDescription}>
            Add author, publication and strucuted data information to enable
            code generation
          </Dialog.Description>

          <div className="flex gap-10 col center jc">{children}</div>

          <Dialog.Close asChild>
            <button
              aria-labelledby="Close"
              id="Close"
              className={styles.IconButton}
              aria-label="Close"
            >
              <Cross2Icon width={80} height={80} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default FullModel;
