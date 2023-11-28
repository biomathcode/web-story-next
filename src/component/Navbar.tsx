import Select from "react-select";
import { Suspense, useState } from "react";
import axios from "axios";
import { config } from "../axios";

import {
  GitHubLogoIcon,
  MagnifyingGlassIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import Link from "next/link";
import useLocalStorage from "use-local-storage";
import { SCHEMA } from "@/lib/constants";
import OnBoarding from "./OnBoarding";
import mdParser from "@/lib/markdownParser";

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
  url,
  setUrl,
  setData,
}: {
  url: string;
  setUrl: any;
  setData: any;
}) {
  const [value, setValue] = useState(url);

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
        <Suspense fallback={<p>Error happend</p>}>
          <form
            onSubmit={handleSubmit(async (data) => {
              setLoading(true);

              if (data.username.length > 1) {
                const response = await axios.get(data.username);
                if (response) {
                  console.log(response.data);
                  const el = await mdParser(response.data);
                  console.log("promise", el);
                  setData(el);

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
                id="username"
                aria-label="username"
                {...register("username", {
                  required: true,
                })}
                type="text"
                className="fs-12 inter"
                defaultValue={url}
                placeholder="https://coolhead.in"
              />
            </fieldset>
            <fieldset>
              <button
                id="search"
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

      <div className="flex gap-10 center">
        <OnBoarding />
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
        <Link
          className="flex  center gap-10 fs-12"
          style={{
            color: "var(--slate2)",
            padding: "10px 15px",
            background: "var(--slate12)",
            borderRadius: "5px",

            textDecorationStyle: "solid",
          }}
          href="https://github.com/biomathcode/web-story-next"
          target="_blank"
          rel="noreferrer"
          aria-label="github link"
        >
          <GitHubLogoIcon />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
