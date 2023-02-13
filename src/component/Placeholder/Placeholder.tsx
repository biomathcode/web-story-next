import PlaceHolderIcon from "../Icons";

function PlaceHolder() {
  return (
    <div className="flex col  center jc">
      <PlaceHolderIcon />
      <p
        style={{
          color: "var(--slate11)",
          fontSize: "14px",
          textAlign: "center",
        }}
      >
        Something went wrong ! <br />
        Don&apos;t worry We are working on it.
      </p>
    </div>
  );
}

export default PlaceHolder;
