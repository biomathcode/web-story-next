import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction, useState } from "react";
import { createApi } from "unsplash-js";
import useLocalStorage from "use-local-storage";
import PlaceHolder from "../Placeholder/Placeholder";

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESSKEY || "",
});

function UnsplashContainer() {
  const [query, setQuery] = useState("");
  const [data, setData] = useLocalStorage("image", []);

  return (
    <div className="flex col gap-10 center jc" style={{ width: "100%" }}>
      <Search query={query} setQuery={setQuery} setData={setData} />
      <ImageContainer data={data} />
    </div>
  );
}

export default UnsplashContainer;

// search container
//

function Search({
  query,
  setQuery,
  setData,
}: {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  setData: any;
}) {
  return (
    <form
      className="flex gap-10 center jc"
      onSubmit={(e) => {
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
            } else {
              setData(el.response.results);
            }
          });

        console.log(response);
      }}
    >
      <input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Developer"
      />
      <button type="submit" className="btn flex center fs-12  gap-10">
        <MagnifyingGlassIcon />
        Search
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
    >
      {data.length === 0 ? (
        <PlaceHolder />
      ) : (
        data.map((el: any) => {
          return (
            <div className="flex col gap-10" key={el.id}>
              <img
                src={el.urls.small}
                style={{
                  borderRadius: "10px",
                }}
                width={170}
                height={300}
                alt={el.alt_description}
              />
              <p className="fs-12">
                by{" "}
                <a
                  rel="noopener noreferrer"
                  href={el.user.links.html}
                  target="_blank"
                >
                  {el.user.name}
                </a>
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}
