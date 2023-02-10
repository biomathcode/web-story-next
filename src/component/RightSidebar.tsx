import { LoadingIndicator } from "react-select/dist/declarations/src/components/indicators";
import Droppable from "./Droppable";

const RightSidebar = ({ content }: { content: any }) => {
  return (
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
        <p>Loading..</p>
      )}
    </div>
  );
};

export default RightSidebar;
