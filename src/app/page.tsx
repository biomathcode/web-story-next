"use client";

import { Inter } from "@next/font/google";

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Editor from "@monaco-editor/react";
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
import {
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
  arrayMove,
} from "@dnd-kit/sortable";

import { useForm } from "react-hook-form";

import Droppable from "@/component/Droppable";

import NavBar from "@/component/Navbar";
import {
  AMP_CTA_LAYER,
  AMP_GRID_LAYER,
  AMP_IMAGE,
  AMP_STORY,
  AMP_STORY_PAGE,
  AMP_TEXT,
} from "@/lib";
import NewView from "@/component/NewView";
import { createPortal } from "react-dom";
import LeftSidebar from "@/component/LeftSidebar";

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
  const [page, setPage] = useState(0);

  const [content, setContent] = useState([]);

  const [select, setSelect] = useState(0);

  const [user, setUser] = useState({
    name: "Pratik ",
    publication: {
      posts: [
        {
          title: "this is the title",
          contentMarkdown: "#sfhdsiafosijiojtgiowjeifgjweeifajwlk",
          coverImage: image[0],
        },
      ],
    },
  });
  const [newSelect, setNewSelect] = useState(0);

  const [loading, setLoading] = useState(false);

  const [activeId, setActiveId] = useState(null);

  let coverImage = user.publication.posts[select].coverImage;
  let title = user.publication.posts[select].title;

  const [newState, setNewState] = useState([
    {
      image: image[0],
      text: title,
    },
  ]);

  useEffect(() => {
    setContent(mdParser(user.publication.posts[select]?.contentMarkdown) as []);
    title = user.publication.posts[select].title;
    coverImage = user.publication.posts[select].coverImage;
  }, [user, page, select]);

  useEffect(() => {
    async function fetchFunction() {
      const response = await axios(config);

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
    } else {
      if (active.id && active.data.current.title) {
        const state = newState.map((e, i) => {
          if (active.data.current.type === "image") {
            return i === newSelect
              ? {
                  image: active.data.current.href,
                  text: e.image,
                }
              : e;
          } else {
            return i === newSelect
              ? {
                  image: e.image,
                  text: active.data.current.title,
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

  const ode =
    AMP_STORY_PAGE(AMP_GRID_LAYER(AMP_TEXT(title), "thirds")) +
    AMP_CTA_LAYER("https://coolhead.in", "Website") +
    AMP_STORY_PAGE(
      AMP_GRID_LAYER(AMP_IMAGE(coverImage, 720, 1080, "responsive"), "fill")
    );

  const newCode = AMP_STORY(
    ode,
    "this is working",
    "coolhead",
    image[0],
    image[1]
  );
  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }

  return (
    <div className={inter.className}>
      <NavBar page={select} setPage={setSelect} loading={loading} user={user} />
      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "100vw",
        }}
      >
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={(e) => handleDragEnd(e)}
          collisionDetection={closestCenter}
        >
          <div className="flex ja ">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                height: "100vh",
                overflow: "scroll",

                minWidth: "150px",
                padding: "0px 20px",

                maxWidth: "400px",
              }}
            >
              {content &&
                content.map((el: any, i) => {
                  // three types content, code, image
                  if (
                    el.raw.match(/!\[(.*)\]\((.+)\)/g) &&
                    el.type !== "list"
                  ) {
                    console.log("image", el);
                    return (
                      <Droppable
                        type="image"
                        href={el?.tokens[1]?.href}
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
          </div>
          {/* {createPortal( */}
          <DragOverlay
            dropAnimation={{
              duration: 500,
              easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
            }}
          >
            {activeId ? <p>This is drag</p> : null}
          </DragOverlay>
          ,
          {/* document.body
          )} */}
          {/* <DragOverlay></DragOverlay> */}
          <LeftSidebar
            inter={inter}
            newSelect={newSelect}
            newState={newState}
            setNewState={setNewState}
          />
        </DndContext>
      </div>
    </div>
  );
}
