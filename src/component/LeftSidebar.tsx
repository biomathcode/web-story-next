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

  function handleChange(e: any) {
    console.log("this si working", newState, e.target.value);
    const state = newState.map((el: any, i: any) => {
      console.log(i, newSelect, el);
      return i === newSelect
        ? {
            image: el.image,
            text: e.target.value,
          }
        : el;
    });

    console.log("new state", state);

    setNewState(state);
  }
  return (
    newState && (
      <div
        style={{
          padding: "0px 10px",
          width: "400px",
          height: "100vh",
          position: "absolute",
          right: "0px",
          background: "#eee",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        className={inter.className}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <p>Configurations</p>
        <fieldset className="flex js col mt-10  gap-10">
          <label>Change Text</label>
          <textarea
            name="text"
            className={inter.className}
            style={{ minHeight: "200px" }}
            value={newState[newSelect]?.text}
            onChange={(e) => handleChange(e)}
          />
        </fieldset>
        <fieldset className="flex js  col mt-10 gap-10">
          <label>Change Image URL </label>
          <input
            readOnly
            name="imageUrl"
            className={inter.className}
            type="url"
            value={newState[newSelect]?.image}
          />
        </fieldset>
        <fieldset className="flex js  col mt-10 gap-10">
          <label>Font Size</label>
          <input
            readOnly
            name="fontSize"
            className={inter.className}
            type="number"
            min="14"
            value="16"
          />
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
        <button className="btn" type="submit">
          Save
        </button>
        <button className="btn">Generate Code</button>
      </div>
    )
  );
};

export default LeftSidebar;
