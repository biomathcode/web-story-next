import Droppable from "./Droppable";
import * as Tabs from "@radix-ui/react-tabs";

//TODO: Replace Loading with a Illustration

const RightSidebar = ({ content }: { content: any }) => {
  return (
    <Tabs.Root
      className="TabsRoot"
      defaultValue="tab1"
      style={{ overflow: "auto", width: "100%" }}
    >
      <Tabs.List className="TabsList" aria-label="Manage your account">
        <Tabs.Trigger className="TabsTrigger" value="tab1">
          Content
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="tab2">
          Unsplash
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px",

          overflow: "scroll",

          padding: "10px 20px",
        }}
        value="tab2"
      >
        <div>
          <h1>Content</h1>
          <h1>Contente</h1>
          <h1>Contnet</h1>
        </div>
      </Tabs.Content>
      <Tabs.Content
        value="tab1"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          height: "calc(100vh - 60px ) ",

          overflow: "scroll",

          maxWidth: "300px",

          minWidth: "150px",
          padding: "10px 20px",
        }}
      >
        {content.length > 0 ? (
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
          <div style={{ marginTop: "20px", color: "#000", zIndex: 20 }}>
            loading...
          </div>
        )}
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default RightSidebar;
