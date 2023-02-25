import ColorComponent from "@/component/ColorComponent";
import InfoCarousel from "@/component/InfoCarousel";
import MultiStep from "@/component/MultiStep";
import { AuthorInfo, PublisherInfo, SEO } from "@/component/SEO/index";
import { useState } from "react";

function Component() {
  const [color, setColor] = useState("rgba(255,255,255,0.1)");
  return (
    <div className="flex center jc col gap-10" style={{ width: "100vw" }}>
      <MultiStep />
      <ColorComponent
        name="color"
        colorValue={color}
        setColorValue={setColor}
      />
      <input style={{ color: color }} value={color} />
    </div>
  );
}

export default Component;
