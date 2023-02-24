import Select from "react-select";
import { useState } from "react";
import axios from "axios";
import { config } from "../axios";

import { MagnifyingGlassIcon, RocketIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import Link from "next/link";

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
  setUser,
}: {
  user: any;
  page: any;
  setPage: any;
  setUser: any;
  info: any;
  setInfo: any;
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

  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();

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
      className="flex center ja gap-10"
    >
      <div className="flex center gap-10 ">
        {user ? (
          <Select
            className="select"
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
        <form
          onSubmit={handleSubmit(async (data) => {
            setLoading(true);
            const response = await axios(
              config(data.username, Number(data.page))
            );
            console.log("this is response", response);
            if (
              response.data?.data?.user?.publication?.posts?.length > 0 &&
              response.data.data.user
            ) {
              setUser(response.data.data.user);
              setLoading(false);
            } else {
              alert(`No data found on page ${data.page}`);
              setLoading(false);
            }

            console.log(response);
          })}
          className="flex center jc gap-10"
        >
          <fieldset>
            <input
              {...register("page", {
                required: true,
              })}
              min={0}
              max={10}
              defaultValue={0}
              type="number"
              style={{ width: "50px" }}
              placeholder="Page"
            />
          </fieldset>
          <fieldset>
            <input
              {...register("username", {
                required: true,
              })}
              type="text"
              defaultValue={user?.username}
              placeholder="username"
            />
          </fieldset>
          <fieldset>
            <button
              disabled={loading}
              className="btn fs-12 flex gap-10 center"
              type="submit"
            >
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <MagnifyingGlassIcon />
                  <span>Search</span>
                </>
              )}
            </button>
          </fieldset>
        </form>
      </div>

      <div>
        <Link
          className="flex  center gap-10 fs-14"
          style={{
            color: "var(--violet2)",
            padding: "10px 15px",
            background: "var(--violet9)",
            borderRadius: "5px",

            textDecorationStyle: "solid",
          }}
          href="/learn"
          target="_blank"
          rel="noreferrer"
        >
          <RocketIcon />
          Learn
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
