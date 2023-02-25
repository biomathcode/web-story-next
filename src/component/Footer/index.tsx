import { FileIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: "5px",
        zIndex: 3,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "5px 10px",
          display: "flex",
          gap: "10px",
          background: "#222",
          borderRadius: "4px",
        }}
      >
        <Link className="btn flex center gap-10 no-style" href="/">
          <HomeIcon />
          home
        </Link>
        <Link
          className="btn flex center gap-10 no-style"
          href="/learn"
          target="_blank"
          rel="noreferrer"
        >
          <FileIcon />
          Learn
        </Link>
        <Link
          className="btn flex center gap-10 no-style fs-14"
          href="/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
