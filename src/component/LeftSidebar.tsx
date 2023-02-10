import { useState } from "react";

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
  // const [data, setData] = useState({
  //   text: newState[newSelect].text,
  //   image: newState[newSelect].image,
  // });

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

  function handleChange(e: any) {
    console.log("this si working", newState, e.target.value);
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
          padding: "0px 10px",
          width: "300px",
          height: "100vh",
          position: "absolute",
          right: "0px",
          background: "#eee",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          fontSize: "14px",
        }}
        className={inter.className}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
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
        {/* <fieldset className="flex js  col mt-10 gap-10">
          <label>Change Image URL </label>
          <input
            readOnly
            name="imageUrl"
            className={inter.className}
            type="url"
            value={newState[newSelect]?.image}
          />
        </fieldset> */}
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

        <button className="btn">Generate Code</button>
      </div>
    )
  );
};

export default LeftSidebar;
