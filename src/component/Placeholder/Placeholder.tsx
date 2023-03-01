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
        Click hold the 6 dots icon and drag them to the Canvas
      </p>
    </div>
  );
}

export default PlaceHolder;
