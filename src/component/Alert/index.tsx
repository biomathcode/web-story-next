import React, { useState } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import styles from "./styles.module.css";
import classname from "classnames";
import { TrashIcon } from "@radix-ui/react-icons";
import { TemplateType, Types, useTasksDispatch } from "@/context/data";
import { nanoid } from "nanoid";
import { animationType } from "@/lib";

export interface payloadType {
  fontSize: number;
  lineHeight: number;
  textPosition: number;
  textAlign: string;
  color: string;
  background: string;
  highlight: string;
  textAnimation: animationType;
  imageAnimation: animationType;
  overlay: boolean;
  cta: boolean;
  url: string;
  ctaText: string;
  paddingX: number;
  paddingY: number;
}

type AlertType = {
  actionName: string;
  action: any;
  title: string;
  description: string;
  icon: any;
  triggerName: string;
  type: string;
  buttonText?: string;
  data?: payloadType | null;
};

const Alert = ({
  actionName,
  action,
  title,
  description,
  icon,
  triggerName,
  type = "delete",
  buttonText = "Delete",
  data = {
    fontSize: 24,
    lineHeight: 20,
    textPosition: 36,
    textAlign: "center",
    color: "rgba(255,255,255,0.9)",
    background: "rgba(255,255,255,0.1)",
    highlight: "box",
    textAnimation: "fade-in",
    imageAnimation: "fade-in",
    overlay: false,
    cta: false,
    url: "",
    ctaText: "",
    paddingX: 10,
    paddingY: 10,
  },
}: AlertType) => {
  const [input, setInput] = useState("");

  const dispatch = useTasksDispatch();
  return (
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
            {type === "delete" ? (
              description
            ) : (
              <div className="flex gap-10 center mt-10 ">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
            )}
          </AlertDialog.Description>
          <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
            <AlertDialog.Cancel asChild>
              <button className={[styles.Button, styles.mauve].join(" ")}>
                Cancel
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action
              disabled={input.length > 0 || type === "delete" ? false : true}
              asChild
            >
              <button
                onClick={
                  type === "delete"
                    ? action
                    : () => {
                        if (data) {
                          dispatch({
                            type: Types.Create,
                            payload: {
                              ...data,
                              name: input,
                              id: nanoid(),
                            },
                          });
                          setInput("");
                        }
                      }
                }
                style={{ transition: "all ease-in 216ms" }}
                className={
                  input.length > 0 || type === "delete" ? "btn fs-12" : " fs-12"
                }
                // className={[styles.Button, styles.red].join(" ")}
              >
                {buttonText}
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default Alert;
