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
        Search Images and drag them to the Canvas
      </p>
    </div>
  );
}

export default PlaceHolder;
