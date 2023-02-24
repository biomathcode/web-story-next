import { HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: "10px",
        zIndex: 3,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "10px 10px",
          display: "flex",
          gap: "10px",
          background: "#222",
          borderRadius: "4px",
        }}
      >
        <Link className="btn flex center gap-10" href="/">
          <HomeIcon />
          home
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
