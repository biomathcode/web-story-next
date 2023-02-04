"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import {
  DndContext,
  closestCenter,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
  arrayMove,
} from "@dnd-kit/sortable";

import VerticalContainer from "@/component/verticalContainer";

import Droppable from "@/component/Droppable";
import data from "./data";
import { useUniqueId } from "@dnd-kit/utilities";
import NavBar from "@/component/Navbar";
import {
  AMP_CTA_LAYER,
  AMP_GRID_LAYER,
  AMP_IMAGE,
  AMP_STORY,
  AMP_TEXT,
} from "@/lib";

const inter = Inter({ subsets: ["latin"] });

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

export default function Home() {
  const [isDropped, setIsDropped] = useState(false);

  const [items, setItems] = useState(data);

  const [page, setPage] = useState();

  const [content, setContent] = useState();

  const handleDragEnd = ({ active, over }: { active: any; over: any }) => {
    if (!over) {
      return;
    }
    if (active.id && active.data.current.title) {
      console.log(active.id, over.id);
      const oldIndex = items.find((item) => item.id === over.id);

      const newChildren = oldIndex?.children.push({
        id: nanoid(),
        type: "text",
        content: active.data.current.title || "something",
      });
      const filterItems = items.filter((el) => el.id === over.id);

      setItems((items: any) =>
        items.map((item: any) => {
          return item.id !== over.id ? item : oldIndex;
        })
      );

      console.log(oldIndex);

      console.log(oldIndex);
    } else {
      if (active.id !== over.id) {
        setItems((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);

          return arrayMove(items, oldIndex, newIndex);
        });
      }
    }
  };

  // const sensors = [useSensor(PointerSensor)];

  const AddItem = (e: any) => {
    setItems([
      ...items,
      {
        id: nanoid(),
        name: "Pratik ",
        children: [
          {
            id: nanoid(),
            type: "text",
            content: "dasfa",
          },
          {
            id: nanoid(),
            type: "text",
            content: "Second to none",
          },
        ],
      },
    ]);
  };

  const handleAddNewitem = (e: any) => {
    console.log(e);
  };

  const removeItem = (id: any) => {
    console.log("this is working");

    const newItem = items.filter((el) => el.id !== id);
    console.log("this is working");
    setItems([...newItem]);
  };
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const ode =
    AMP_TEXT() +
    AMP_CTA_LAYER("https://coolhead.in", "Website") +
    AMP_GRID_LAYER(AMP_IMAGE(image[0], 720, 1080, "responsive"), "fill");
  // AMP_IMAGE(image[0], 720, 1080, "responsive");
  const newCode = AMP_STORY(
    ode,
    "this is working",
    "coolhead",
    image[0],
    image[1]
  );

  return (
    <>
      <NavBar />
      <div className="App" style={{ display: "flex", gap: "20px" }}>
        <DndContext
          sensors={sensors}
          onDragEnd={(e) => handleDragEnd(e)}
          collisionDetection={closestCenter}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              height: "100vh",
              borderRight: "2px solid #333",
              minWidth: "250px",
              padding: "0px 20px",
            }}
          >
            <Droppable id="kldmfssd1" />
            <Droppable id="asdf2" />

            <Droppable id="fasdf3" />

            <Droppable id="fdsf4" />
            <Droppable id="asd5" />

            <button onClick={AddItem}>Add</button>
          </div>

          <div
            style={{
              height: "100vh",
              overflow: "scroll",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              minWidth: "600px",
            }}
          >
            <SortableContext
              items={items.map((item) => item.id)}
              strategy={verticalListSortingStrategy}
            >
              {items.map((el) => {
                return (
                  <VerticalContainer
                    items={items}
                    setItems={setItems}
                    key={el.id}
                    el={el}
                  />
                );
              })}
            </SortableContext>
          </div>
          <div
            style={{
              borderLeft: "2px solid #222",
              padding: "0px 10px",
              width: "300px",
            }}
          >
            <textarea
              value={newCode}
              style={{ width: "500px", height: "600px" }}
            />
          </div>
        </DndContext>
      </div>
    </>
  );
}
