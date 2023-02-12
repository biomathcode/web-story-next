import Select from "react-select";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../axios";
import mdParser from "@/lib/markdownParser";
import { MagicWandIcon } from "@radix-ui/react-icons";

export interface ColourOption {
  value: string;
  label: string;
  color: string;
  isFixed?: boolean;
  isDisabled?: boolean;
}

export const colourOptions: ColourOption[] = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

function NavBar({
  user,
  page,
  setPage,
}: {
  user: any;
  page: any;
  setPage: any;
}) {
  const options =
    user &&
    user?.publication?.posts?.map((el: any) => {
      return {
        value: el.title,
        label: el.title,
      };
    });

  const [value, setValue] = useState(user && options[0]);

  return (
    <nav
      style={{
        width: "100vw",
        height: "60px",
        minHeight: "60px",
        background: "#eee",
        margin: "0px",
        padding: "0px 20px",
      }}
      className="flex center jc gap-10"
    >
      {user ? (
        <Select
          className="dropdown"
          options={options}
          value={value}
          onChange={(newValue: any) => {
            console.log("this is the new Value", newValue);
            const index = options.findIndex(
              (el: any) => el.value === newValue.value
            );

            setValue(options[index]);

            console.log(index, "new index");
            setPage(index);
          }}
        />
      ) : (
        <p>loading...</p>
      )}
      <fieldset>
        <input
          min={0}
          max={10}
          defaultValue={0}
          type="number"
          style={{ width: "50px" }}
          placeholder="Page"
        />
      </fieldset>
      <fieldset>
        <input type="text" value={user?.username} placeholder="username" />
      </fieldset>
      <fieldset>
        <button className="btn fs-12 flex gap-10 center" type="submit">
          <MagicWandIcon />
          Search
        </button>
      </fieldset>
    </nav>
  );
}

export default NavBar;
