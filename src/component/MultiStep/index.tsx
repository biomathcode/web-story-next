import { useState } from "react";
import { Analytics, AuthorInfo, PublisherInfo, SEO } from "../SEO";

const data = {
  0: <AuthorInfo />,
  1: <PublisherInfo />,
  2: <SEO />,
  3: <Analytics />,
};

function MultiStep() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      {data[index]}

      <div className="flex js center mt-10">
        <button
          onClick={() => {
            index !== 0 && setIndex(index - 1);
          }}
          className="btn fs-12 "
        >
          Skip
        </button>
        <button
          onClick={() => {
            index !== 3 && setIndex(index + 1);
          }}
          className="btn fs-12"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default MultiStep;
