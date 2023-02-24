import { useState } from "react";
import { AuthorInfo, PublisherInfo } from "../SEO";

function MultiStepForm() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <AuthorInfo />
      <PublisherInfo />
      <div className="flex js center">
        <button>Skip to Code generation</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default MultiStepForm;
