import Select from "react-select";
import { Suspense, useState } from "react";
import axios from "axios";
import { config } from "../axios";

import { MagnifyingGlassIcon, RocketIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import Link from "next/link";
import useLocalStorage from "use-local-storage";
import { SCHEMA } from "@/lib/constants";

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
  info,
  setInfo,
}: {
  user: any;
  page: any;
  setPage: any;
  setUser: any;
  info: any;
  setInfo: any;
}) {
  const options = user?.publication?.posts?.map((el: any) => {
    return {
      value: el.title,
      label: el.title,
    };
  });

  const [value, setValue] = useState(user && user.name !== null && options[0]);

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
            aria-label="Search"
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
        <Suspense fallback={<p>Error happend</p>}>
          <form
            onSubmit={handleSubmit(async (data) => {
              setLoading(true);

              setInfo(data);

              if (data.username.length > 1) {
                const response = await axios(
                  config(data.username, Number(data.page))
                );
                if (
                  response.data?.data?.user?.publication?.posts?.length > 0 &&
                  response.data.data.user
                ) {
                  setUser(response.data.data.user);
                  setLoading(false);
                } else {
                  alert(
                    `No data found on page ${data.page} and username ${data.username}`
                  );
                  setLoading(false);
                }
              }
            })}
            className="flex center jc gap-10"
          >
            <fieldset>
              <input
                aria-label="page"
                {...register("page", {
                  required: true,
                })}
                min={0}
                max={10}
                defaultValue={Number(info?.page)}
                type="number"
                style={{ width: "50px" }}
                placeholder="Page"
              />
            </fieldset>
            <fieldset>
              <input
                id="username"
                aria-label="username"
                {...register("username", {
                  required: true,
                })}
                type="text"
                defaultValue={info?.username}
                placeholder="username"
              />
            </fieldset>
            <fieldset>
              <button
                aria-label="Click to search"
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
        </Suspense>
      </div>

      <div>
        <Link
          className="flex  center gap-10 fs-12"
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
