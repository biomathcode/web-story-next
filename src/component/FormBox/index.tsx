import { Analytics } from "@/component/SEO/index";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { Toaster } from "react-hot-toast";
import { CalendarPlaceHolder, Check } from "@/component/Icons";
function FormBox({
  title,
  children,
  isValid,
}: {
  title: string;
  children: ReactNode;
  isValid: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Toaster />

      <div className="flex jc center w-100">
        <div
          className="flex center  col gap-10"
          style={{
            border: "1px solid #D8DCE1",
            borderRadius: "4px",
            minWidth: "600px",

            margin: "10px",
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
                  {title}
                </h1>
                <div
                  style={{
                    padding: "5px",
                    background: isValid ? "#1B91FB" : "#444",
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
              {children}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FormBox;
