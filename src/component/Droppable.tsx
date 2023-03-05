import { Types, useTasksDispatch } from "@/context/data";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { TrashIcon } from "@radix-ui/react-icons";
import { CSSProperties } from "@stitches/react";
import Image from "next/image";
import { useState } from "react";
import CodeBlock from "./Codeblock";

export const Item = ({ data }: { data: any }) => {
  const style: React.CSSProperties = {
    display: "flex",
    gap: "10px",
    border: "1px solid #eee",
    background: "#fff",
    width: "100%",

    lineHeight: 1.6,
    letterSpacing: 0.2,
    wordSpacing: "2px",

    padding: "5px 10px",
    overflowX: "hidden",

    wordBreak: "break-word",

    // transform: CSS.Translate.toString(transform),
  };

  if (data?.type === "template") {
    return (
      <div style={style} className="">
        <button className="DragHandle">
          <svg viewBox="0 0 20 20" width="12">
            <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
          </svg>
        </button>
        <p
          key={data.data.id}
          style={{
            fontSize: `${data?.data.fontSize}px`, // change to property
            color: data.data?.color, // change to property
            // position: "absolute",
            // top: `${data?.textPosition}%`,
            width: "100%",
            wordWrap: "break-word",
            // textAlign: `${data?.textAlign}`, // change to property
            background: `${
              data.data?.highlight === "box" ? data.data?.background : "none"
            }`,

            height: "fit-content",
            lineHeight: `${data.data?.lineHeight}px`,
            padding:
              data?.highlight === "box"
                ? `${data.data?.paddingY}px ${data.data?.paddingX}px`
                : "0px",
          }}
        >
          {data?.highlight === "mark" ? (
            <span
              style={{
                background: data?.background,
                borderRadius: "10px",
                boxDecorationBreak: "clone",
                WebkitBoxDecorationBreak: "clone",
                display: "inline",

                padding: `${data?.data.paddingY}px ${data.data?.paddingX}px`,
              }}
            >
              Lorem Ipsum
            </span>
          ) : (
            "Lorem Ipsum"
          )}
        </p>
      </div>
    );
  }

  const type = data?.data?.raw?.match(/!\[(.*)\]\((.+)\)/g)
    ? "image"
    : data?.type;

  const href = data.type !== "code" && data.href;

  if (data.type === "code") {
    return (
      <div className="word-break" style={style}>
        <button aria-label={href} id={href} className="DragHandle">
          <svg viewBox="0 0 20 20" width="12">
            <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
          </svg>
        </button>

        <CodeBlock code={data.text} language={data.lang} />
      </div>
    );
  }

  return (
    <div className="word-break" style={style}>
      <button type="button" aria-label={href} id={href} className="DragHandle">
        <svg viewBox="0 0 20 20" width="12">
          <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
        </svg>
      </button>
      {type === "image" ? (
        <Image alt={href} src={href} width={240} height={360} />
      ) : (
        <p className="fs-14">{data.content}</p>
      )}
    </div>
  );
};

const Droppable = ({
  id,
  href,
  type,
  data,
}: {
  id: any;
  href: string;
  type: string;
  data: any;
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id + 1,
    data: {
      id: id,
      type: type,
      content: href,
      href: href,
      title: href,
      data: data,
    },
  });
  const style: React.CSSProperties = {
    display: "flex",
    gap: "10px",
    border: "1px solid #eee",
    borderRadius: "var(--radius)",
    background: "#fff",
    position: type === "template" ? "relative" : undefined,

    width: "100%",
    lineHeight: 1.6,
    letterSpacing: 0.2,
    wordSpacing: "2px",
    minHeight: "fit-content",
    padding: "5px 10px",

    wordBreak: "break-word",

    color: "#4b4b4b",

    // transform: CSS.Translate.toString(transform),
  };

  const [isHover, setHover] = useState(false);

  const dispatch = useTasksDispatch();

  if (type === "template") {
    return (
      <div
        style={style}
        className=""
        onMouseOver={(e) => setHover(true)}
        onMouseLeave={(e) => setHover(false)}
        ref={setNodeRef}
      >
        <button
          className="DragHandle"
          id={href}
          aria-label={href}
          {...attributes}
          {...listeners}
        >
          <svg viewBox="0 0 20 20" width="12">
            <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
          </svg>
        </button>
        {isHover && (
          <div
            style={{
              position: "absolute",
              right: "1px",
              top: "0px",
              zIndex: 14,
            }}
          >
            <button
              className="btn fs-12"
              onClick={() =>
                dispatch({
                  type: Types.Delete,
                  payload: {
                    id: id,
                  },
                })
              }
            >
              <TrashIcon />
            </button>
          </div>
        )}

        <p
          key={data.id}
          style={{
            fontSize: `${data?.fontSize}px`, // change to property
            color: data?.color, // change to property
            // position: "absolute",
            // top: `${data?.textPosition}%`,
            width: "100%",
            wordWrap: "break-word",
            // textAlign: `${data?.textAlign}`, // change to property
            background: `${
              data?.highlight === "box" ? data?.background : "none"
            }`,

            zIndex: 0,
            height: "fit-content",
            lineHeight: `${data?.lineHeight}px`,
            padding:
              data?.highlight === "box"
                ? `${data?.paddingY}px ${data?.paddingX}px`
                : "0px",
          }}
        >
          {data?.highlight === "mark" ? (
            <span
              style={{
                background: data?.background,
                borderRadius: "10px",
                boxDecorationBreak: "clone",
                WebkitBoxDecorationBreak: "clone",
                display: "inline",

                padding: `${data?.paddingY}px ${data?.paddingX}px`,
              }}
            >
              Lorem Ipsum
            </span>
          ) : (
            "Lorem Ipsum"
          )}
        </p>
      </div>
    );
  }

  if (data.type === "code") {
    return (
      <div style={style} className="word-break" ref={setNodeRef}>
        <button
          className="DragHandle"
          id={href}
          aria-label={href}
          {...attributes}
          {...listeners}
        >
          <svg viewBox="0 0 20 20" width="12">
            <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
          </svg>
        </button>

        <CodeBlock code={data.text} language={data.lang} />
      </div>
    );
  }

  return (
    <div style={style} className="word-break" ref={setNodeRef}>
      <button
        className="DragHandle"
        id={href}
        aria-label={href}
        {...attributes}
        {...listeners}
      >
        <svg viewBox="0 0 20 20" width="12">
          <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
        </svg>
      </button>
      {type === "image" ? (
        <Image alt={href} src={href} width={240} height={360} />
      ) : (
        <p className="fs-14">{href}</p>
      )}
    </div>
  );
};

export default Droppable;
