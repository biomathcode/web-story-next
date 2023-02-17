import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import CodeBlock from "./Codeblock";

export const Item = ({ el }: { el: any }) => {
  const style = {
    display: "flex",
    gap: "10px",
    border: "1px solid #eee",
    background: "#fff",
    width: "100%",
    minHeigth: "50px",
    lineHeight: 1.6,
    letterSpacing: 0.2,
    wordSpacing: "2px",

    padding: "5px 10px",
    OverflowX: "hidden",

    breakWord: "break-all",
    WordBreak: "break-word",

    // transform: CSS.Translate.toString(transform),
  };

  const type = el?.data?.raw?.match(/!\[(.*)\]\((.+)\)/g) ? "image" : el.type;

  const href = el.type !== "code" && el.href;

  if (el.type === "code") {
    return (
      <div className="word-break" style={style}>
        <button className="DragHandle">
          <svg viewBox="0 0 20 20" width="12">
            <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
          </svg>
        </button>

        <CodeBlock code={el.text} language={el.lang} />
      </div>
    );
  }

  return (
    <div className="word-break" style={style}>
      <button className="DragHandle">
        <svg viewBox="0 0 20 20" width="12">
          <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
        </svg>
      </button>
      {type === "image" ? (
        <img alt={href} src={href} width="250px" height="300px" />
      ) : (
        <p className="fs-14">{el.content}</p>
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
  const style = {
    display: "flex",
    gap: "10px",
    border: "1px solid #eee",
    borderRadius: "var(--radius)",
    background: "#fff",
    width: "100%",
    lineHeight: 1.6,
    letterSpacing: 0.2,
    wordSpacing: "2px",

    minHeigth: "120px",
    padding: "5px 10px",
    OverflowX: "hidden",
    breakWord: "break-all",
    WordBreak: "break-word",

    color: "#4b4b4b",

    // transform: CSS.Translate.toString(transform),
  };

  if (data.type === "code") {
    return (
      <div style={style} className="word-break" ref={setNodeRef}>
        <button className="DragHandle" {...attributes} {...listeners}>
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
      <button className="DragHandle" {...attributes} {...listeners}>
        <svg viewBox="0 0 20 20" width="12">
          <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
        </svg>
      </button>
      {type === "image" ? (
        <img alt={href} src={href} width="250px" height="300px" />
      ) : (
        <p className="fs-14">{href}</p>
      )}
    </div>
  );
};

const ImageDroppbale = () => {
  return <div></div>;
};

export default Droppable;
