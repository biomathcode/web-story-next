import { ColorWheelIcon, GearIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { BlockPicker } from "react-color";
import Toggle from "./Toggle";

const LeftSidebar = ({
  inter,
  newState,
  newSelect,
  setNewState,
}: {
  inter: any;
  newState: any;
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
      console.log(i, newSelect, el, e.target.name, e.target.value);
      const newObject =
        e.target.name === "text"
          ? {
              ...el,
              text: e.target.value,
            }
          : e.target.name === "textAlign"
          ? {
              ...el,
              textAlign: e.target.value,
            }
          : {
              ...el,
              fontSize: e.target.value,
            };

      return i === newSelect ? newObject : el;
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
        <div
          className="flex gap-10 col"
          style={{ transition: "width 300ms linear" }}
        >
          <fieldset className="flex js col mt-10  gap-10">
            <label>Change Text</label>
            <textarea
              name="text"
              className={inter.className}
              style={{ minHeight: "70px" }}
              value={newState[newSelect]?.text}
              onChange={(e) => handleChange(e)}
            />
          </fieldset>

          <fieldset className="flex js  col mt-10 gap-10">
            <label>Font Size</label>
            <input
              onChange={(e) => handleChange(e)}
              name="fontSize"
              className={inter.className}
              type="number"
              min="14"
              value={newState[newSelect]?.fontSize}
            />
          </fieldset>
          <fieldset className="flex js center">
            <label>Text Align</label>
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
            <label>Text Position</label>
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
            <label>Text Color</label>
            <input readOnly value={newState[newSelect].color} />
          </fieldset>
          <Toggle
            infoText="You can only add one CTA per page"
            label="Call to Action"
            open={open}
            setOpen={setOpen}
          />
          {open && (
            <div>
              <fieldset className="flex js  col mt-10 gap-10">
                <label>CTA Button URL</label>
                <input
                  readOnly
                  name="ctaUrl"
                  className={inter.className}
                  type="url"
                  value="https://coolhead.in"
                />
              </fieldset>
              <fieldset className="flex js  col  mt-10 gap-10">
                <label>CTA Button text</label>
                <input
                  readOnly
                  name="ctaButton"
                  className={inter.className}
                  type="text"
                  value="Read more"
                />
              </fieldset>
            </div>
          )}

          <fieldset className="flex js  col  mt-10 gap-10">
            <label>Animation Type</label>
            <select>
              {animationTypes.map((el) => (
                <option key={el}>{el}</option>
              ))}
            </select>
          </fieldset>
          {/* <button className="btn" type="submit">
          Save
        </button> */}
        </div>

        <button className="generate_btn btn flex center gap-10">
          <GearIcon />
          Generate Code
        </button>
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
