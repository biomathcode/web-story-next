"use client";

import { Inter } from "@next/font/google";

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Editor from "@monaco-editor/react";
import axios from "axios";
import { config } from "../axios/index";
import mdParser from "@/lib/markdownParser";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Token from "marked";
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

  const [content, setContent] = useState([]);

  const [user, setUser] = useState({
    name: "Pratik ",
    publication: {
      posts: [
        {
          title: "this is the title",
        },
      ],
    },
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFunction() {
      const response = await axios(config);

      setContent(
        mdParser(
          response.data.data.user.publication.posts[1].contentMarkdown
        ) as []
      );

      setUser(response.data.data.user);

      console.log(response.data.data.user);
      return response.data;
    }

    fetchFunction();
    setLoading(true);
  }, []);

  const handleDragEnd = ({ active, over }: { active: any; over: any }) => {
    if (!over) {
      return;
    }
    if (active.id && active.data.current.title) {
      console.log(active.id, over.id);
      const oldIndex = items.find((item) => item.id === over.id);

      const newChildren = oldIndex?.children.push({
        id: nanoid(),
        type: active.data.current.type,
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

  const newCode = AMP_STORY(
    ode,
    "this is working",
    "coolhead",
    image[0],
    image[1]
  );

  return (
    <>
      <NavBar loading={loading} user={user} />
      <div style={{ display: "flex", gap: "20px" }}>
        <DndContext
          sensors={sensors}
          onDragEnd={(e) => handleDragEnd(e)}
          collisionDetection={closestCenter}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                height: "100vh",

                minWidth: "250px",
                padding: "0px 20px",
                // overflow: "scroll",
              }}
            >
              {content &&
                content.map((el: any, i) => {
                  // three types content, code, image
                  if (el.raw.match(/!\[(.*)\]\((.+)\)/g)) {
                    console.log(el);
                    return (
                      <Droppable
                        type="image"
                        href={el.tokens[1].href}
                        key={i}
                        id={i}
                      />
                    );
                  }
                  return (
                    el?.text?.length > 3 && (
                      <Droppable type="text" href={el.text} key={i} id={i} />
                    )
                  );
                })}
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
              <button onClick={AddItem}>Add</button>
            </div>
            {/* </Panel> */}
          </div>

          <div
            style={{
              padding: "0px 10px",
              width: "300px",
            }}
          >
            <Editor
              height="90vh"
              width="600px"
              theme="vs-dark"
              defaultLanguage="html"
              defaultValue={newCode}
            />
            {/* <textarea
              value={newCode}
              style={{ width: "500px", height: "600px" }}
            /> */}
          </div>
        </DndContext>
      </div>
    </>
  );
}