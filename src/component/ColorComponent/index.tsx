import React, { useEffect, useState } from "react";
import { RgbaColorPicker } from "react-colorful";
import { useClickAway } from "use-click-away";

type ColorComponentType = {
  colorValue: string;
  name: string;
  setColorValue: (e: any) => void;
};

function stringToRGB(color: string) {
  const obj = color.match(/[\d\.]+/g)?.map(Number);

  const rgbaObj = obj && {
    r: obj[0],
    g: obj[1],
    b: obj[2],
    a: obj[3],
  };

  return rgbaObj;
}

export default function ColorComponent({
  colorValue,
  setColorValue,
  name,
}: ColorComponentType) {
  const [color, setColor] = useState(stringToRGB(colorValue));
  const [modal, setModal] = React.useState(false);
  const clickRef = React.useRef<any>("");

  useEffect(() => {
    setColor(stringToRGB(colorValue));
  }, [colorValue]);

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
        tabIndex={0}
        onKeyDown={(e) => {
          e.key === "Enter" && setModal(true);
          e.key === "Escape" && setModal(false);
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
