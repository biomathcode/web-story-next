"use client";

import { state } from "@/app/page";
import { useDroppable } from "@dnd-kit/core";
import {
  ArrowLeftIcon,
  PlusIcon,
  ArrowRightIcon,
  TrashIcon,
  ResetIcon,
  CopyIcon,
} from "@radix-ui/react-icons";

import { nanoid } from "nanoid";
import { useRef, useState } from "react";
import CTA from "./CTA";
import ToolTip from "./ToolTip/ToolTip";

const image = [
  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80",
  "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80",
  "https://images.unsplash.com/photo-1554595666-19ceabf46a84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
];

function NewView({
  newState,
  setNewState,
  newSelect,
  setNewSelect,
}: {
  newState: state[];
  setNewState: any;
  newSelect: any;
  setNewSelect: any;
}) {
  const { isOver, setNodeRef } = useDroppable({
    id: "content_" + nanoid(),
  });
  const style = {
    backgroundColor: isOver ? "light-green" : "#fff",
  };

  function deleteState() {
    const state = newState.filter((el: any, i: any) => i !== newSelect);
    setNewState(state);
    setNewSelect(newSelect - 1);
  }

  const [mouseOver, setMouseOver] = useState(false);

  const data = useRef<state[] | null>();

  return (
    <div className="flex center col " suppressHydrationWarning={true}>
      <div
        className="flex"
        style={{ margin: "10px 0px", overflow: "scroll", width: "600px" }}
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        {newState &&
          newState?.map((el: any, i: any) => {
            return (
              <div
                onClick={() => setNewSelect(i)}
                key={i}
                style={{
                  width: "40px",
                  height: mouseOver ? "10px" : "5px",
                  borderRadius: "10px",
                  background: i === newSelect ? "#222" : "#ccc",
                  cursor: "pointer",
                  marginLeft: "2px",
                  transition: "all 100ms linear",
                }}
              />
            );
          })}
      </div>
      <div className="flex center gap-10">
        <ToolTip text="Previous Page">
          <button
            style={{
              padding: "10px",
              borderRadius: "10px",
              background: "#eee",
              width: "fit-content",
              height: "fit-content",
              cursor: "pointer",
            }}
            onClick={() => setNewSelect(newSelect - 1)}
            disabled={newSelect === 0}
          >
            <ArrowLeftIcon />
          </button>
        </ToolTip>
        <div
          ref={setNodeRef}
          style={{
            ...style,
            backgroundImage: `url(${newState[newSelect]?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",

            transition: "all 100ms linear 0s",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
            width: "350px",
            height: "620px",
            borderRadius: "10px",
            border: "1px solid #eee",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              position: "relative",
              bottom: "-530px",
              // left: "70px",
              height: "fit-content",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <CTA url="https://coolhead.in" text="Learn more" />
          </div>
          <p
            style={{
              fontSize: `${newState[newSelect]?.fontSize}px`, // change to property
              color: newState[newSelect]?.color, // change to property
              position: "relative",
              top: "36%",
              width: "330px",

              wordWrap: "break-word",
              textAlign: `${newState[newSelect]?.textAlign}`, // change to property
              background: `${
                newState[newSelect]?.highlight === "box"
                  ? newState[newSelect]?.background
                  : "none"
              }`,
              height: "fit-content",
              lineHeight: "45px",
            }}
          >
            {newState[newSelect]?.highlight === "mark" ? (
              <span
                style={{
                  background: newState[newSelect]?.background,
                  borderRadius: "10px",
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                  display: "inline",

                  padding: "2px 10px",
                }}
              >
                {newState[newSelect]?.text}
              </span>
            ) : (
              newState[newSelect]?.text
            )}
          </p>
        </div>
        <>
          {newSelect === newState.length - 1 ? (
            <ToolTip text="Add new page">
              <button
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  background: "#000",
                  color: "#eee",
                  width: "fit-content",
                  height: "fit-content",
                  cursor: "pointer",
                }}
                onClick={() =>
                  setNewState([
                    ...newState,

                    {
                      image: image[newSelect + 1],
                      text: String(newSelect + 2),
                      fontSize: 16,
                      color: "#fff",
                      background: "#000",
                      highlight: "box",
                    },
                  ])
                }
              >
                <PlusIcon fontSize={30} />
              </button>
            </ToolTip>
          ) : (
            <ToolTip text={"Next page"}>
              <button
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  background: "#eee",
                  width: "fit-content",
                  height: "fit-content",
                  cursor: "pointer",
                }}
                onClick={() => setNewSelect(newSelect + 1)}
              >
                <ArrowRightIcon />
              </button>
            </ToolTip>
          )}
        </>
      </div>
      <div className="flex gap-10 center mt-10">
        <ToolTip text="Delete the present page">
          {newState.length > 1 && newSelect > 0 && (
            <button
              style={{
                padding: "10px",
                borderRadius: "10px",
                background: "#eee",
                width: "fit-content",
                height: "fit-content",
                cursor: "pointer",
                fontFamily: "Inter",
              }}
              onClick={() => deleteState()}
            >
              <TrashIcon />
            </button>
          )}
        </ToolTip>
        <ToolTip text="Reset">
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
          >
            <ResetIcon />
          </button>
        </ToolTip>
        {/* <ToolTip text="Reorder Pages">
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
            className="flex gap-10 center"
          >
            Sort
            <CopyIcon />
          </button>
        </ToolTip> */}
      </div>
    </div>
  );
}

export default NewView;
