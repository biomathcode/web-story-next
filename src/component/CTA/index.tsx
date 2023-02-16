// CTA
// props => url
// text

import { ArrowUpIcon } from "@radix-ui/react-icons";

const CTA = ({ url, text }: { url: string; text: string }) => (
  <div className="flex col gap-10 jc center">
    <ArrowUpIcon style={{ color: "#ffffff", fontSize: "20px" }} stroke="10" />
    <a
      onClick={(e) => {
        e.preventDefault();
        alert(`Redirect to ${url} `);
      }}
      href={url}
      style={{
        padding: "5px 10px",
        width: "fit-content",
        color: "#000",
        background: "white",
        fontFamily: "Inter",
        fontSize: "14px",
        borderRadius: "10px",
      }}
    >
      {text}
    </a>
  </div>
);
export default CTA;
