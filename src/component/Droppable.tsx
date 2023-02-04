import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const Droppable = ({ id }: {id:any}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: {
      id: id,
      title: "something"
    }
  });
  const style = {
    display: "flex",
    gap: "10px",
    border: "1px solid #eee",
    background: "#fff",

    transform: CSS.Translate.toString(transform)
  };
  return (
    <div style={style} ref={setNodeRef}>
      <button className="DragHandle" {...attributes} {...listeners}>
        <svg viewBox="0 0 20 20" width="12">
          <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
        </svg>
      </button>
      <p>something</p>
    </div>
  );
};

export default Droppable;
