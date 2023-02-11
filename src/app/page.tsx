"use client";

import { Inter } from "@next/font/google";

import { use, useEffect, useState } from "react";

import axios from "axios";
import { config } from "../axios/index";
import mdParser from "@/lib/markdownParser";

import {
  DndContext,
  closestCenter,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import NavBar from "@/component/Navbar";

import NewView from "@/component/NewView";

import LeftSidebar from "@/component/LeftSidebar";
import RightSidebar from "@/component/RightSidebar";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Item } from "@/component/Droppable";

const inter = Inter({ subsets: ["latin"] });

export type state = {
  image: string;
  fontSize: number;
  textAlign: "left" | "right" | "center";
  text: string;
  color: string;
  background: string;
};

export type userState = {
  name: string;
  photo: string;
  numPosts: number;
  publicationDomain: string;

  publication: {
    posts: Posts[];
  };
};

type Posts = {
  type: string;
  contentMarkdown: string;
  slug: string;
  title: string;
  brief: string;
  coverImage: string;
};

type ContentType = {
  type: string;
  raw: string;
  text: string;
  tokens: string;
};

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
  const [page, setPage] = useState(0);

  const [content, setContent] = useState<ContentType[]>([]);

  const [select, setSelect] = useState(0);

  const [user, setUser] = useState<userState | null>(null);
  const [newSelect, setNewSelect] = useState(0);

  const [activeId, setActiveId] = useState<number | null>(null);

  const [newState, setNewState] = useState<state[]>([
    {
      image: image[0],
      text: "title ",
      fontSize: 16,
      color: "#fff",
      textAlign: "center", // left, right or center
      background: "#000", // string
    },
  ]);

  useEffect(() => {
    if (user) {
      if (user.publication.posts.length > 0) {
        setContent(
          mdParser(user.publication.posts[select]?.contentMarkdown) as []
        );
      }
    }
  }, [user, page, select]);

  useEffect(() => {
    async function fetchFunction() {
      const response = await axios(config);

      setUser(response.data.data.user);

      console.log(response.data.data.user);
      return response.data;
    }

    fetchFunction();
  }, []);

  const handleDragEnd = ({ active, over }: { active: any; over: any }) => {
    if (!over) {
      return;
    } else {
      if (active.id && active.data.current.title) {
        const state = newState.map((e, i) => {
          if (active.data.current.type === "image") {
            return i === newSelect
              ? {
                  image: active.data.current.href,
                  text: e.text,
                  fontSize: e.fontSize,
                  color: e.color,
                  textAlign: e.textAlign, // left, right or center
                  background: e.background,
                }
              : e;
          } else {
            return i === newSelect
              ? {
                  image: e.image,
                  text: active.data.current.title,
                  fontSize: e.fontSize,
                  color: e.color,
                  textAlign: e.textAlign, // left, right or center
                  background: e.background,
                }
              : e;
          }
        });

        setNewState(state);
        console.log(active.id, over.id, active);

        console.log("this is the state", state);
      }
    }
    setActiveId(null);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }

  const cont = activeId && content[activeId];

  console.log("content with active id", cont);

  return (
    <div className={inter.className}>
      {user ? (
        <NavBar page={select} setPage={setSelect} user={user} />
      ) : (
        <nav
          style={{
            width: "100vw",
            height: "60px",
            background: "#eee",
          }}
        />
      )}

      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "100vw",
          height: "calc(100vh - 60px ) ",
        }}
      >
        <PanelGroup direction="horizontal">
          <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={(e) => handleDragEnd(e)}
            collisionDetection={closestCenter}
          >
            <Panel defaultSize={30} minSize={20}>
              <RightSidebar content={content} />
            </Panel>
            <PanelResizeHandle
              style={{
                width: "10px",
                height: "calc(100vh - 60px ) ",

                background: "#eee",
              }}
            />
            <Panel minSize={40}>
              <div
                style={{
                  height: "calc(100vh - 60px ) ",
                  // overflow: "scroll",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  minWidth: "300px",
                }}
              >
                <NewView
                  newState={newState}
                  newSelect={newSelect}
                  setNewSelect={setNewSelect}
                  setNewState={setNewState}
                />
              </div>
              <DragOverlay>
                {activeId ? (
                  <Item type={"text"} href={content[activeId].raw} />
                ) : null}
              </DragOverlay>
            </Panel>

            <PanelResizeHandle
              style={{
                width: "10px",
                height: "calc(100vh - 60px ) ",

                background: "#eee",
              }}
            />
            <Panel minSize={20}>
              <LeftSidebar
                inter={inter}
                newSelect={newSelect}
                newState={newState}
                setNewState={setNewState}
              />
            </Panel>
          </DndContext>
        </PanelGroup>
      </div>
    </div>
  );
}
