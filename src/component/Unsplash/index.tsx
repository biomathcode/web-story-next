import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction, useState } from "react";
import { createApi } from "unsplash-js";
import useLocalStorage from "use-local-storage";
import Droppable from "../Droppable";
import PlaceHolder from "../Placeholder/Placeholder";

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESSKEY || "",
});

function UnsplashContainer() {
  const [query, setQuery] = useState("");
  const [data, setData] = useLocalStorage("image", []);

  const [loading, setLoading] = useState(false);

  return (
    <div className="flex col gap-10 center jc" style={{ width: "100%" }}>
      <Search
        query={query}
        loading={loading}
        setLoading={setLoading}
        setQuery={setQuery}
        setData={setData}
      />

      <ImageContainer data={data} />
    </div>
  );
}

export default UnsplashContainer;

function Search({
  query,
  setQuery,
  setData,
  loading,
  setLoading,
}: {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  setData: any;
  loading: any;
  setLoading: any;
}) {
  return (
    <form
      className="flex gap-10 center jc scroll"
      style={{ width: "100%" }}
      onSubmit={(e) => {
        setLoading(true);
        e.preventDefault();
        const response = unsplash.search
          .getPhotos({
            query: query,
            page: 1,
            perPage: 10,
            orientation: "portrait",
          })
          .then((el) => {
            if (el.errors) {
              console.log("error occused", el.errors[0]);
              setLoading(false);
            } else {
              setData(el.response.results);
              setLoading(false);
            }
          });

        console.log(response);
      }}
    >
      <input
        style={{ width: "90%" }}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search here ..."
      />
      <button
        disabled={loading}
        type="submit"
        className="btn flex center fs-12  gap-10"
      >
        {loading ? (
          "Loading ..."
        ) : (
          <>
            <MagnifyingGlassIcon />
            Search
          </>
        )}
      </button>
    </form>
  );
}

function ImageContainer({ data }: { data: any }) {
  return (
    <div
      style={{
        overflow: "scroll",
        height: "calc(100vh - 180px)",
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        padding: "20px 0px",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="scroll"
    >
      {data.length === 0 ? (
        <PlaceHolder />
      ) : (
        data.map((el: any) => {
          return (
            <Droppable
              key={el.id}
              id={el.id}
              href={el.urls.small}
              type="image"
              data={{
                id: el.id,
                type: "image",
                href: el.urls.small,
                content: el.urls.small,
              }}
            />
            // <div className="flex col gap-10" key={el.id}>
            //   <img
            //     src={el.urls.small}
            //     style={{
            //       borderRadius: "10px",
            //     }}
            //     width={170}
            //     height={300}
            //     alt={el.alt_description}
            //   />
            //   <p className="fs-12">
            //     by{" "}
            //     <a
            //       rel="noopener noreferrer"
            //       href={el.user.links.html}
            //       target="_blank"
            //     >
            //       {el.user.name}
            //     </a>
            //   </p>
            // </div>
          );
        })
      )}
    </div>
  );
}
