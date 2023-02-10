import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

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
    background: "#fff",
    maxWidth: "300px",
    minHeigth: "50px",
    padding: "5px 10px",
    OverflowX: "hidden",
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
        <p>{href}</p>
      )}
    </div>
  );
};

export default Droppable;
