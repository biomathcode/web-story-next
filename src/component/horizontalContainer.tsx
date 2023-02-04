import { useDroppable } from "@dnd-kit/core";

export const HorizontalContainer = ({ children, id }: {children: any, id: any}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id
  });
  const style = {
    backgroundColor: isOver ? "light-green" : "#fff"
  };

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,

        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        padding: "10px 20px",
        gap: "10px",
        height: "60px"
      }}
    >
      {children}
    </div>
  );
};
