import React, { useState } from "react";
import { RgbaColorPicker } from "react-colorful";
import { useClickAway } from "use-click-away";
import { number } from "zod";

type ColorComponentType = {
  colorValue: string;
  name: string;
  setColorValue: (e: any) => void;
};

export default function ColorComponent({
  colorValue,
  setColorValue,
  name,
}: ColorComponentType) {
  const obj = colorValue.match(/[\d\.]+/g)?.map(Number);

  const rgbaObj = obj && {
    r: obj[0],
    g: obj[1],
    b: obj[2],
    a: obj[3],
  };
  const [color, setColor] = useState(rgbaObj);
  const [modal, setModal] = React.useState(false);
  const clickRef = React.useRef<any>("");

  useClickAway(clickRef, () => {
    setModal(false);
  });

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: "40px",
          height: "20px",
          borderRadius: "4px",
          border: "2px solid #222",
          background: `rgba(${color?.r}, ${color?.g}, ${color?.b},${color?.a}`,
        }}
        onClick={() => setModal(true)}
        id={name}
      ></div>

      {modal && (
        <div
          style={{ zIndex: 5, position: "absolute", left: "-200px" }}
          ref={clickRef}
        >
          <RgbaColorPicker
            color={color}
            onChange={(newColor) => {
              setColor(newColor);

              const obj = {
                target: {
                  name: name,
                  value: `rgba(${newColor.r}, ${newColor.g}, ${newColor.b},${newColor.a})`,
                },
              };
              setColorValue(obj);
            }}
          />
        </div>
      )}
    </div>
  );
}
