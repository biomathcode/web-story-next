import React, { createContext, useContext, useMemo, useState } from "react";

import { useSortable } from "@dnd-kit/sortable";
import type {
  DraggableSyntheticListeners,
  UniqueIdentifier
} from "@dnd-kit/core";

import { CSS } from "@dnd-kit/utilities";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";

import * as Popover from "@radix-ui/react-popover";

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
  ref() {}
});

export function DragHandle() {
  const { attributes, listeners, ref } = useContext(SortableItemContext);

  return (
    <button className="DragHandle" {...attributes} {...listeners} ref={ref}>
      <svg viewBox="0 0 20 20" width="12">
        <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
      </svg>
    </button>
  );
}

const updateContent = ({ id, parentId, items, setItems, newContent }: {
  id: any, 
  parentId: any, 
  items: any, 
  setItems: any, 
  newContent: any
}) => {
  const parent = items.filter((item: any) => item.id === parentId);

  const newChildren = parent[0].children.map((el:any) => {
    return el.id === id
      ? {
          id: id,
          type: "text",
          content: newContent
        }
      : el;
  });

  const newParent = {
    id: parent[0].id,
    name: parent[0].name,
    children: newChildren
  };

  console.log("this are the children", newParent);
  setItems((items: any) => {
    return items.map((item : any) => (item.id === parentId ? newParent : item));
  });
};

export function SortableItem(props:any) {
  const [input, setInput] = useState(props.children);

  const [font, setFont] = useState("16");
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });
  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef
    }),
    [attributes, listeners, setActivatorNodeRef]
  );

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    background: "#fff",

    border: "1px solid #eee",
    width: "fit-content",
    marginLeft: "10px",
    paddingRight: "20px",

    display: "flex",
    gap: "10px"
  };
  return (
    <>
      <SortableItemContext.Provider value={context}>
        <Popover.Root>
          <Popover.Trigger asChild>
            <div className="SortableItem" ref={setNodeRef} style={style}>
              <DragHandle />

              <p style={{ fontSize: font + "px" }}>{props.children}</p>
            </div>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="PopoverContent" sideOffset={5}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <fieldset className="Fieldset">
                  <label className="Label" htmlFor="width">
                    Content
                  </label>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onBlur={() =>
                      updateContent({
                        id: props.id,
                        parentId: props.parentId,
                        items: props.items,
                        setItems: props.setItems,
                        newContent: input
                      })
                    }
                    className="Input"
                    id="width"
                  />
                </fieldset>
                <fieldset className="Fieldset">
                  <label className="Label" htmlFor="width">
                    font
                  </label>

                  <input
                    value={font}
                    type="number"
                    min="14"
                    onChange={(e) => setFont(e.target.value)}
                    className="Input"
                    id="width"
                  />
                </fieldset>
              </div>
              <Popover.Close className="PopoverClose" aria-label="Close">
                <Cross2Icon />
              </Popover.Close>
              <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </SortableItemContext.Provider>
    </>
  );
}
