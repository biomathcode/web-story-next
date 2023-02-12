import styles from "./ToggleGroup.module.css";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import {
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
} from "@radix-ui/react-icons";

function ToggleButton() {
  return (
    <ToggleGroup.Root
      className="ToggleGroup"
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="left"
        aria-label="Left aligned"
      >
        <TextAlignLeftIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="center"
        aria-label="Center aligned"
      >
        <TextAlignCenterIcon />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="right"
        aria-label="Right aligned"
      >
        <TextAlignRightIcon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}

export default ToggleButton;
