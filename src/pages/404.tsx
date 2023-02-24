import PlaceHolderIcon from "@/component/Icons";
import Link from "next/link";

function ErrorPage() {
  return (
    <div className="flex center js label col gap-10">
      <PlaceHolderIcon />
      <p className="fs-16 ">404 Error Page not found</p>
      <ul className="flex gap-10 col">
        <Link
          style={{
            color: "blue",
            fontSize: "16px",
          }}
          href="/"
        >
          Home
        </Link>
        <Link
          style={{
            color: "blue",
            fontSize: "16px",
          }}
          href="/learn"
        >
          Learn
        </Link>
      </ul>
    </div>
  );
}

export default ErrorPage;
