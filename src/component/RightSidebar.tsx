import Droppable from "./Droppable";
import * as Tabs from "@radix-ui/react-tabs";
import PlaceHolder from "./Placeholder/Placeholder";

import UnsplashContainer from "./Unsplash";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { useTasks } from "@/context/data";
import { CalendarPlaceHolder } from "./Icons";

const TemplateComponent = () => {
  const getData = useTasks();

  return (
    <div className="flex col gap-10 scroll" style={{ overflow: "auto" }}>
      {getData.map((el) => (
        <Droppable
          data={el}
          type="template"
          href={"Lorem ipsum"}
          key={el.id}
          id={el.id}
        />
      ))}
      {getData.length === 0 && (
        <div className="flex col gap-10 center">
          {" "}
          <CalendarPlaceHolder /> <p className="label">No templates found</p>
        </div>
      )}
    </div>
  );
};

const RightSidebar = ({ content }: { content: any }) => {
  return (
    <Tabs.Root
      className="TabsRoot rightSidebar"
      defaultValue="tab1"
      style={{ overflow: "auto", width: "100%" }}
    >
      <Tabs.List className="TabsList scroll" aria-label="Manage your account">
        <Tabs.Trigger className="TabsTrigger" value="tab1">
          Content
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="tab2">
          Unsplash
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="tab3">
          Template
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        value="tab3"
        className="scroll"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxHeight: "calc(100vh - 150px ) ",

          overflow: "scroll",

          // maxWidth: "300px",

          minWidth: "150px",
          padding: "10px 20px",
        }}
      >
        <TemplateComponent />
      </Tabs.Content>
      <Tabs.Content
        className="flex  center jc scroll"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",

          overflow: "scroll",

          padding: "10px 20px",
        }}
        value="tab2"
      >
        <ScrollArea.Root>
          <ScrollArea.Viewport>
            <UnsplashContainer />
          </ScrollArea.Viewport>
        </ScrollArea.Root>
      </Tabs.Content>
      <Tabs.Content
        value="tab1"
        className="scroll"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxHeight: "calc(100vh - 150px ) ",

          overflow: "scroll",

          // maxWidth: "300px",

          minWidth: "150px",
          padding: "10px 20px",
        }}
      >
        {content.length > 0
          ? content.map((el: any, i: any) => {
              if (el.type === "list") {
                console.log(el, "this is list");
              }

              // three types content, code, image
              if (el?.raw?.match(/!\[(.*)\]\((.+)\)/g) && el?.type !== "list") {
                console.log("this is image", el);
                return (
                  <Droppable
                    data={el}
                    type="image"
                    href={el?.tokens[0]?.href || el.tokens[1]?.href}
                    key={i}
                    id={i}
                  />
                );
              } else {
                return (
                  el?.text?.length > 3 && (
                    <Droppable
                      data={el}
                      type="text"
                      href={el.text}
                      key={i}
                      id={i}
                    />
                  )
                );
              }
            })
          : null}
        {content.length === 0 && <PlaceHolder />}
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default RightSidebar;
