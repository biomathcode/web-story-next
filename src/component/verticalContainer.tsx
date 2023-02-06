import React, { createContext, useContext, useMemo } from "react";

import {
  DndContext,
  closestCenter,
  useDroppable,
  DraggableSyntheticListeners,
  UniqueIdentifier,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  restrictToHorizontalAxis,
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import {
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SortableItem } from "./SortableItem";
import { HorizontalContainer } from "./horizontalContainer";

interface Props {
  id: UniqueIdentifier;
}

interface Context {
  attributes: Record<string, any>;
  listeners: DraggableSyntheticListeners;
  ref(node: HTMLElement | null): void;
}

const SortableItemContext = createContext<Context>({
  attributes: {},
  listeners: undefined,
  ref() {},
});
export function DragHandle() {
  const { attributes, listeners, ref } = useContext(SortableItemContext);

  return (
    <button
      style={{
        position: "relative",
        top: "1px",
        left: "-0px",
      }}
      className="DragHandle"
      {...attributes}
      {...listeners}
      ref={ref}
    >
      <svg viewBox="0 0 20 20" width="12">
        <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
      </svg>
    </button>
  );
}

const VerticalContainer = ({ el, setItems, items }: any) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
    isDragging,
  } = useSortable({ id: el.id });

  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
    }),
    [attributes, listeners, setActivatorNodeRef]
  );

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    background: "#fff",
    display: "flex",

    border: "1px solid #eee",
    borderRadius: "10px",
  };

  const handleDragEnd = ({ active, over }: { active: any; over: any }) => {
    if (!over) {
      return;
    }
    if (active.id !== over.id) {
      const newElChildren = () => {
        const oldIndex = el.children.findIndex((e: any) => e.id === active.id);
        const newIndex = el.children.findIndex((e: any) => e.id === over.id);

        return arrayMove(el.children, oldIndex, newIndex);
      };

      setItems((items: any) => {
        const newItems = items.map((item: any) =>
          item.id !== el.id
            ? item
            : { id: el.id, name: el.name, children: newElChildren() }
        );

        return newItems;
      });
    }
  };
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <SortableItemContext.Provider value={context}>
      <div ref={setNodeRef} style={style}>
        <DragHandle />

        <HorizontalContainer id={el.id}>
          <DndContext
            modifiers={[restrictToHorizontalAxis]}
            sensors={sensors}
            onDragEnd={(e) => handleDragEnd(e)}
            collisionDetection={closestCenter}
          >
            <div
              style={{
                display: "flex",

                overflow: "scroll",
                overflowX: "scroll",
              }}
            >
              <SortableContext
                items={el.children.map((item: any) => item.id)}
                strategy={horizontalListSortingStrategy}
              >
                {el.children.map((e: any) => {
                  console.log("this is the iamge children", e);
                  return (
                    <SortableItem
                      setItems={setItems}
                      parentId={el.id}
                      items={items}
                      id={e.id}
                      key={e.id}
                      type={e.type}
                    >
                      {e.content}
                    </SortableItem>
                  );
                })}
              </SortableContext>
            </div>
          </DndContext>
        </HorizontalContainer>
      </div>
    </SortableItemContext.Provider>
  );
};

export default VerticalContainer;
