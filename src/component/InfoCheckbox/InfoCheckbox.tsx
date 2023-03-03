import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

type InfoCheckBoxType = {
  icon: "success" | "warning" | "info" | "danger";
  title: string;
  description: string;
  size: number;
};

const IconEnum = {
  success: <CheckCircledIcon />,
  warning: <ExclamationTriangleIcon />,
  info: <InfoCircledIcon />,
  danger: <CrossCircledIcon />,
};

const colors = {
  default: "#444",
  info: "#1EA7FD",
  success: "#66BE3A",
  warning: "#FE4500",
  danger: "#ED1644",
};

function InfoCheckBox({ icon, title, description, size }: InfoCheckBoxType) {
  return (
    <div
      className="flex gap-10 center inter"
      style={{
        padding: " 10px 10px",
        fontSize: `${size}px`,
        borderRadius: "4px",
        color: "#333",
        lineHeight: "28px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: colors[icon],
        maxWidth: "600px",
      }}
    >
      <div
        style={{
          color: colors[icon],
        }}
      >
        {IconEnum[icon]}
      </div>

      <div>
        <b>{title}:</b> <span>{description}</span>
      </div>
    </div>
  );
}

export default InfoCheckBox;
