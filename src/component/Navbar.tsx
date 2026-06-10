import Select from "react-select";
import { Suspense, useState } from "react";
import axios from "axios";
import { config } from "../axios";

import {
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
  MagnifyingGlassIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import Link from "next/link";
import useLocalStorage from "use-local-storage";
import { SCHEMA } from "@/lib/constants";
import OnBoarding from "./OnBoarding";
import mdParser from "@/lib/markdownParser";

const socialLinks = [
  {
    href: "https://coolhead.in",
    label: "Pratik Sharma website",
    icon: GlobeIcon,
  },
  {
    href: "https://github.com/biomathcode",
    label: "Pratik Sharma GitHub",
    icon: GitHubLogoIcon,
  },
  {
    href: "https://linkedin.com/in/biomathcode",
    label: "Pratik Sharma LinkedIn",
    icon: LinkedInLogoIcon,
  },
];

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
    <nav className="topbar">
      <div className="brand-lockup">
        <span className="brand-title">Web Story Generator</span>
        <span className="brand-subtitle">Free, no sign up required</span>
      </div>
      <div className="flex center gap-10 url-form">
        <Suspense fallback={<p>Error happend</p>}>
          <form
            onSubmit={handleSubmit(async (data) => {
              setLoading(true);

              if (data.username.length > 1) {
                const response = await axios.get(
                  `/api/hello?url=${data.username}`
                );
                if (response) {
                  const el = await mdParser(response.data.data);

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

      <div className="topbar-actions">
        <OnBoarding />
        <Link
          className="nav-link-button"
          href="/learn"
          target="_blank"
          rel="noreferrer"
        >
          <RocketIcon />
          Learn
        </Link>
        <div className="social-link-group" aria-label="Social links">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              className="nav-link-button secondary icon-only"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
