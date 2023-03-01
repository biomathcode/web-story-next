import {
  AlignBaselineIcon,
  ColorWheelIcon,
  FontFamilyIcon,
} from "@radix-ui/react-icons";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function InputComponent({ label, name, onchange, value, type, icon }) {
  return (
    <label
      aria-label={label}
      htmlFor={label}
      style={{
        border: "1px solid #eee",

        borderRadius: "10px",
        display: "flex",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <span
        className="flex center jc"
        style={{
          background: "#eee",
          marginRight: "10px",
          width: "40px",
          padding: "5spx",
          textAlign: "center",
        }}
      >
        <abbr title={label}>{icon}</abbr>
      </span>

      <input
        type={type}
        onChange={onchange}
        name={name}
        id={label}
        className="fs-12"
        style={{
          all: "unset",
          padding: "5px",
        }}
      ></input>
    </label>
  );
}

export default InputComponent;
