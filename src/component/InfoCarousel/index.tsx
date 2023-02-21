import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import useLocalStorage from "use-local-storage";

type InfoCarouselType = {
  info: string | string[];
};

function InfoCarousel({ info = ["working"] }: InfoCarouselType) {
  const [current, setCurrent] = useState(0);

  const is_first = current === 0 ? true : false;

  const is_last = info?.length - 1 === current ? true : false;

  const flexStyles = {
    display: "flex",
    gap: "10px",
    background: "#eee",
    color: "#222",
    padding: "10px",
    transition: "all 216ms ease-in",
  };
  const center = {
    alignContent: "center",
    alignItems: "center",
  };

  const button = {
    cursor: "pointer",
  };
  return (
    <div className="flex gap-10 " style={{ ...flexStyles, ...center }}>
      <div style={{ ...flexStyles }}>
        <button
          disabled={is_first}
          style={{ ...button, color: is_first ? "#777" : "#222" }}
          onClick={() => setCurrent(current - 1)}
        >
          <ChevronLeftIcon />
        </button>
        <button
          disabled={is_last}
          style={{ ...button, color: is_last ? "#777" : "#222" }}
          onClick={() => setCurrent(current + 1)}
        >
          <ChevronRightIcon />
        </button>
      </div>
      <div>{info[current]}</div>
    </div>
  );
}

export default InfoCarousel;
