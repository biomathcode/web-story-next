import { useSortable } from "@dnd-kit/sortable";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export const Box = ({ width = "50px", height = "50px", id }: BoxType) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable"
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        ...style,
        width,
        height,
        backgroundColor: "#222",
        borderRadius: "5px"
      }}
    ></div>
  );
};

type BoxType = {
  width?: string;
  height?: string;
  id: string;
};
