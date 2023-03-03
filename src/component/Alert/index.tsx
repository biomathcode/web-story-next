import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import styles from "./styles.module.css";
import classname from "classnames";
import { TrashIcon } from "@radix-ui/react-icons";

const Alert = ({
  actionName,
  action,
  title,
  description,
  icon,
  triggerName,
}) => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button
        style={{
          padding: "10px",
          borderRadius: "10px",
          background: "#eee",
          width: "fit-content",
          height: "fit-content",
          cursor: "pointer",
          fontFamily: "Inter",
          fontSize: "12px",
        }}
        aria-label="delete"
        id="delete"
        className={classname(
          styles.Button,
          styles.violet,
          "flex",
          "center",
          "gap-10"
        )}
      >
        {triggerName}

        {icon}
      </button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal style={{ zIndex: 10 }}>
      <AlertDialog.Overlay className={styles.AlertDialogOverlay} />
      <AlertDialog.Content
        style={{ zIndex: 20 }}
        className={styles.AlertDialogContent}
      >
        <AlertDialog.Title className={styles.AlertDialogTitle}>
          {title}
        </AlertDialog.Title>
        <AlertDialog.Description className={styles.AlertDialogDescription}>
          {description}
        </AlertDialog.Description>
        <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
          <AlertDialog.Cancel asChild>
            <button className={classname(styles.Button, styles.mauve)}>
              Cancel
            </button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button
              onClick={action}
              className={classname(styles.Button, styles.red)}
            >
              Yes, delete
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default Alert;
