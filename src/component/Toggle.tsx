import React from "react";
import * as Switch from "@radix-ui/react-switch";
import styles from "./Toggle.module.css";
import InfoCard from "./InfoCard";

type ToggleType = {
  label: string;
  infoText: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Toggle = ({ label, infoText, open, setOpen }: ToggleType) => (
  <div className="flex js">
    <div className="flex gap-10 center">
      <InfoCard text={infoText} />

      <label
        className={styles.Label}
        htmlFor={label}
        style={{ paddingRight: 15 }}
      >
        {label}
      </label>
    </div>

    <Switch.Root
      checked={open}
      onCheckedChange={(e) => setOpen(e)}
      className={styles.SwitchRoot}
      id="airplane-mode"
    >
      <Switch.Thumb className={styles.SwitchThumb} />
    </Switch.Root>
  </div>
);

export default Toggle;
