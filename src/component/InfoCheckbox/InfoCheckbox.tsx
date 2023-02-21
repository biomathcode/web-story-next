import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

// action cards
// info cards
//

type InfoCheckBoxType = {
  icon: "success" | "warning" | "info" | "danger";
  title: string;
  description: string;
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

function InfoCheckBox({ icon, title, description }: InfoCheckBoxType) {
  return (
    <div
      className="flex gap-10 center"
      style={{
        padding: " 10px 10px",
        fontFamily: "Inter",
        fontSize: "14px",
        borderRadius: "4px",
        color: "#f3f3f3",
        background: colors[icon],
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: colors[icon],
        lineHeight: "28px",

        // display: "flex",
        // gap: "10px",

        // alignContent: "center",
        // alignItems: "center",
      }}
    >
      {IconEnum[icon]}

      <div>
        <b>{title}:</b> <span>{description}</span>
      </div>
    </div>
  );
}

export default InfoCheckBox;
