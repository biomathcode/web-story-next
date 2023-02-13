import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

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

    // transform: CSS.Translate.toString(transform),
  };

  const type = el.raw.match(/!\[(.*)\]\((.+)\)/g) ? "image" : "text";

  const href = el?.tokens[1]?.href;

  return (
    <div style={style}>
      <button className="DragHandle">
        <svg viewBox="0 0 20 20" width="12">
          <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
        </svg>
      </button>
      {type === "image" ? (
        <img alt={href} src={href} width="250px" height="300px" />
      ) : (
        <p className="fs-14">{el.text}</p>
      )}
    </div>
  );
};

const Droppable = ({
  id,
  href,
  type,
}: {
  id: any;
  href: string;
  type: string;
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: {
      id: id,
      type: type,
      content: href,
      href: href,
      title: href,
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

    color: "#4b4b4b",

    // transform: CSS.Translate.toString(transform),
  };
  return (
    <div style={style} ref={setNodeRef}>
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

export default Droppable;
