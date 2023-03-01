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
      className="inter"
      style={{
        border: "1px solid var(--mauve8)",
        background: "var(--mauve1)",
        color: "var(--slate12)",

        borderRadius: "2px",
        display: "flex",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <span
        className="flex center jc"
        style={{
          background: "var(--mauve3)",
          color: "var(--slate11)",
          width: "30px",
          padding: "5spx",
          textAlign: "center",

          borderRight: "1px solid var(--mauve8)",
        }}
      >
        <abbr title={label}>{icon}</abbr>
      </span>

      <input
        type={type}
        value={value}
        onChange={(e) => {
          onchange({
            target: {
              name: name,
              value: e.target.value,
            },
          });
        }}
        name={name}
        id={label}
        className="fs-12"
        style={{
          background: "var(--mauve1)",
          color: "var(--slate12)",
          all: "unset",
          padding: "5px",
          paddingLeft: "10px",
          maxWidth: "50px",
        }}
      ></input>
    </label>
  );
}

export default InputComponent;
