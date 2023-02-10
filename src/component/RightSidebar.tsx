import Droppable from "./Droppable";
import * as Tabs from "@radix-ui/react-tabs";

const RightSidebar = ({ content }: { content: any }) => {
  return (
    <Tabs.Root className="TabsRoot" defaultValue="tab1">
      <Tabs.List className="TabsList" aria-label="Manage your account">
        <Tabs.Trigger className="TabsTrigger" value="tab1">
          Content
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="tab2">
          Unsplash
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        value="tab1"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",

          overflow: "scroll",

          minWidth: "150px",
          padding: "10px 20px",

          maxWidth: "400px",
        }}
      >
        {content ? (
          content.map((el: any, i: any) => {
            // three types content, code, image
            if (el.raw.match(/!\[(.*)\]\((.+)\)/g) && el.type !== "list") {
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
          })
        ) : (
          <p>loading...</p>
        )}
      </Tabs.Content>
      <Tabs.Content
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",

          overflow: "scroll",

          padding: "10px 20px",

          maxWidth: "400px",
        }}
        value="tab2"
      ></Tabs.Content>
    </Tabs.Root>
  );
};

export default RightSidebar;
