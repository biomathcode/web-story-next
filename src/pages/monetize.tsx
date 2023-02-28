import ColorComponent from "@/component/ColorComponent";
import { BankPlaceholder, CalendarPlaceHolder, Check } from "@/component/Icons";

import { Monetize } from "@/component/SEO/index";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function MonetiseComponent() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Toaster />
      <div className="flex jc center mt-10 w-100">
        <div className="flex  center gap-10  ">
          <BankPlaceholder />

          <div
            className="flex col gap-10 h-100  jc"
            style={{ maxWidth: "400px" }}
          >
            <h2
              style={{
                fontWeight: 400,
              }}
            >
              Add Monetization{" "}
            </h2>
            <p className="gray">
              Learn more about how to add google adsense to your webstories.
              {"  "}
              <Link
                href="/how-to-monetize-web-stories"
                target="_blank"
                rel="noreferrer"
              >
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex jc center w-100">
        <div
          className="flex center  col gap-10"
          style={{
            border: "1px solid #D8DCE1",
            borderRadius: "4px",
            minWidth: "600px",

            margin: "40px",
          }}
        >
          <div className="flex center jc w-100  gap-10 ">
            <div className="w-100 p-10 pointer" onClick={() => setOpen(!open)}>
              <div className="flex js center w-100 px-10">
                <div className="flex gap-10">
                  <ChevronLeftIcon />
                  <ChevronRightIcon />
                </div>
                <h1
                  className="inter"
                  style={{
                    color: "#222",
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                >
                  Add Monetization of your webstory
                </h1>
                <div
                  style={{
                    padding: "5px",
                    background: open ? "#1B91FB" : "#444",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  className="flex center jc "
                >
                  <Check color={"white"} width={2} />
                </div>
              </div>
            </div>
          </div>
          {open && (
            <div
              style={{
                borderTop: "1px solid #dcdcdc",
              }}
              className="w-100 p-10  "
            >
              <Monetize />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MonetiseComponent;

//#59CB04

//
