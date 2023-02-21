import {
  ColorWheelIcon,
  FontSizeIcon,
  GearIcon,
  LineHeightIcon,
  SpaceBetweenHorizontallyIcon,
  SpaceBetweenVerticallyIcon,
  TextAlignBottomIcon,
  TextIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { BlockPicker } from "react-color";
import Toggle from "./Toggle/Toggle";
import { AnimationOptions } from "@/lib";
import Model from "./Model/Model";
import AccordianContainer from "./Accordian";
import { state } from "@/app/page";

// Text, Image, Cta, Animation,

// TODO: Add a Accordian here for text, image, CTA,

//

const LeftSidebar = ({
  inter,
  newState,
  newSelect,
  setNewState,
}: {
  inter: any;
  newState: state[];
  newSelect: any;
  setNewState: any;
}) => {
  const animationTypes = [
    "Fade In",
    "Twirl In",
    "Fly In Left",
    "Fly In Right",
    "Fly In Top",
    "Fly In Bottom",
    "Rotate In Left",
    "Rotate In Right",
    "Whoosh In Left",
    "Whoosh In Right",
    "Drop",
    "Zoom Out",
  ];

  const [open, setOpen] = useState(false);

  function handleChange(e: any) {
    const state = newState.map((el: any, i: any) => {
      const newObject: any = {
        text: {
          ...el,
          text: e.target.value,
        },
        textAlign: {
          ...el,
          textAlign: e.target.value,
        },
        color: {
          ...el,
          color: e.target.value,
        },
        highlight: {
          ...el,
          highlight: e.target.value === "Box" ? "box" : "mark",
        },
        background: {
          ...el,
          background: e.target.value,
        },
        fontSize: {
          ...el,
          fontSize: e.target.value,
        },
        cta: {
          ...el,
          cta: e.target.value === "true" ? true : false,
        },
        url: {
          ...el,
          url: e.target.value,
        },
        ctaText: {
          ...el,
          ctaText: e.target.value,
        },
        lineHeight: {
          ...el,
          lineHeight: e.target.value,
        },
        paddingX: {
          ...el,
          paddingX: e.target.value,
        },
        paddingY: {
          ...el,
          paddingY: e.target.value,
        },
        textAnimation: {
          ...el,
          textAnimation: e.target.value,
        },
        imageAnimation: {
          ...el,
          imageAnimation: e.target.value,
        },
      };

      return i === newSelect ? newObject[e.target.name] : el;
    });

    console.log("new state", state);

    setNewState(state);
  }
  return (
    newState && (
      <div
        style={{
          padding: "10px 10px",
          margin: "0px px",
          overflow: "scroll",

          width: "100%",
          height: "calc(100vh - 60px ) ",

          right: "0px",
          background: "#eee",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "10px",
          fontSize: "14px",
        }}
        className={inter.className}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        {/* <AccordianContainer /> */}
        <div
          className="flex gap-10 col"
          style={{ transition: "width 300ms linear" }}
        >
          <fieldset className="flex js col mt-10  gap-10">
            <label className="label flex gap-10 center">
              Change Text
              <TextIcon />
            </label>
            <textarea
              name="text"
              className={inter.className}
              style={{ minHeight: "70px" }}
              value={newState[newSelect]?.text}
              onChange={(e) => handleChange(e)}
            />
          </fieldset>

          <fieldset className="flex js  center mt-10 gap-10">
            <label className="label flex center gap-10">
              Font Size
              <FontSizeIcon />
            </label>
            <input
              onChange={(e) => handleChange(e)}
              name="fontSize"
              className={inter.className}
              type="number"
              min="14"
              value={newState[newSelect]?.fontSize}
            />
          </fieldset>
          <fieldset className="flex js  center mt-10 gap-10">
            <label className="label flex center gap-10">
              Line height
              <LineHeightIcon />
            </label>
            <input
              onChange={(e) => handleChange(e)}
              name="lineHeight"
              className={inter.className}
              type="number"
              min="1"
              max="100"
              value={newState[newSelect]?.lineHeight}
            />
          </fieldset>
          <fieldset className="flex js center">
            <label className="label flex gap-10 center">
              Text Align
              <TextAlignBottomIcon />
            </label>
            <select
              name="textAlign"
              onChange={(e) => handleChange(e)}
              value={newState[newSelect]?.textAlign}
            >
              <option>left</option>

              <option>center</option>
              <option>right</option>
            </select>
          </fieldset>
          <fieldset className="flex js center">
            <label className="label"> Text Position</label>
            <select
              name="textPosition"
              // onChange={(e) => handleChange(e)}
              // value={newState[newSelect]?.textAlign}
            >
              <option>top</option>

              <option>middle</option>
              <option>bottom</option>
            </select>
          </fieldset>
          <fieldset className="flex js center">
            <label className="label flex gap-10 center">
              Text Color
              <ColorWheelIcon />
            </label>
            <input
              type="color"
              name="color"
              onChange={(e) => handleChange(e)}
              value={newState[newSelect]?.color}
              style={{
                width: "40px",
                height: "30px",
                padding: "0px",
                borderRadius: "4px",
              }}
            />
          </fieldset>
          <fieldset className="flex js center">
            <label className="label">Text Highlight</label>
            <select
              name="highlight"
              onChange={(e) => handleChange(e)}
              value={
                newState[newSelect]?.highlight === "box" ? "Box" : "Marked"
              }
            >
              <option>Box </option>
              <option>Marked</option>
            </select>
          </fieldset>

          <fieldset className="flex js center">
            <label className="label flex gap-10 center">
              Background
              <ColorWheelIcon />
            </label>
            <input
              type="color"
              name="background"
              onChange={(e) => handleChange(e)}
              value={newState[newSelect]?.background}
              style={{
                width: "40px",
                height: "30px",
                padding: "0px",
                borderRadius: "4px",
              }}
            />
          </fieldset>
          <fieldset className="flex js center">
            <label className="label flex gap-10 center">
              Padding Vertical
              <SpaceBetweenVerticallyIcon />
            </label>
            <input
              type="number"
              name="paddingY"
              min={0}
              max={100}
              onChange={(e) => handleChange(e)}
              value={newState[newSelect]?.paddingY}
            />
          </fieldset>
          <fieldset className="flex js center">
            <label className="label flex gap-10 center">
              Padding Horizontal
              <SpaceBetweenHorizontallyIcon />
            </label>
            <input
              type="number"
              name="paddingX"
              min={0}
              max={100}
              onChange={(e) => handleChange(e)}
              value={newState[newSelect]?.paddingX}
            />
          </fieldset>

          {/* <Toggle
            infoText="You can only add one CTA per page"
            label="Call to Action"
            open={open}
            setOpen={setOpen}
          />
          {open && ( */}
          <div>
            <fieldset className="flex js center gap-10">
              <label className="label">CTA</label>
              <select
                name="cta"
                className={inter.className}
                onChange={(e) => handleChange(e)}
                value={newState[newSelect]?.cta ? "true" : "false"}
              >
                <option>true</option>
                <option>false</option>
              </select>
            </fieldset>
            {newState[newSelect]?.cta ? (
              <>
                <fieldset className="flex js  col mt-10 gap-10">
                  <label className="label">CTA Button URL</label>
                  <input
                    onChange={(e) => handleChange(e)}
                    name="url"
                    className={inter.className}
                    type="url"
                    value={newState[newSelect]?.url}
                  />
                </fieldset>
                <fieldset className="flex js  col  mt-10 gap-10">
                  <label className="label">CTA Button text</label>
                  <input
                    onChange={(e) => handleChange(e)}
                    name="ctaText"
                    className={inter.className}
                    type="text"
                    value={newState[newSelect]?.ctaText}
                  />
                </fieldset>
              </>
            ) : null}
          </div>

          <fieldset className="flex js  col  mt-10 gap-10">
            <label className="label">Text Animation</label>
            <select
              name="textAnimation"
              defaultValue={newState[newSelect]?.textAnimation}
              onChange={(e) => handleChange(e)}
            >
              {AnimationOptions.map((el) => (
                <option value={el.value} key={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset className="flex js  col  mt-10 gap-10">
            <label className="label">Image Animation</label>
            <select
              name="imageAnimation"
              defaultValue={newState[newSelect]?.imageAnimation}
              onChange={(e) => handleChange(e)}
            >
              {AnimationOptions.map((el) => (
                <option value={el.value} key={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <label className="label"></label>
          </fieldset>
        </div>

        <Model />

        {/* <button className="generate_btn btn flex center gap-10">
          <GearIcon />
          Generate Code
        </button> */}
      </div>
    )
  );
};

export default LeftSidebar;

const CTA_Form = ({
  on,
  url,
  label,
}: {
  on: boolean;
  url: string;
  label: string;
}) => {
  return (
    <div>
      <label>CTA FORM</label>
    </div>
  );
};
