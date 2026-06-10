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
    <div className="unsplash-panel">
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
      className="unsplash-search"
      onSubmit={(e) => {
        setLoading(true);
        e.preventDefault();
        unsplash
          .GET("/search/photos", {
            params: {
              query: {
                query,
                page: 1,
                per_page: 10,
                orientation: "portrait",
              },
            },
          })
          .then((el) => {
            if (el.error) {
              setLoading(false);
            } else {
              setData(el.data.results);
              setLoading(false);
            }
          });
      }}
    >
      <input
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
    <div className="unsplash-results scroll">
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
