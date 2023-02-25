import React from "react";
import * as Switch from "@radix-ui/react-switch";
import styles from "./Toggle.module.css";
import InfoCard from "../InfoCard/InfoCard";

type ToggleType = {
  label: string;
  infoText: string;
  // open: boolean;
  value: string;
  name: string;
  onChange: (e) => void;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Toggle = ({ label, infoText, name, onChange, value }: ToggleType) => {
  return (
    <div className="flex js">
      <div className="flex gap-10 center">
        <label
          className={styles.Label}
          htmlFor={label}
          style={{ paddingRight: 15 }}
        >
          {label}
        </label>
        <InfoCard text={infoText} />
      </div>

      <Switch.Root
        onCheckedChange={(e) => {
          const newObje = {
            target: {
              name: name,
              value: e,
            },
          };
          onChange(newObje);
        }}
        checked={value === "true" ? true : false}
        name={name}
        className={styles.SwitchRoot}
        id="airplane-mode"
        value={value}
      >
        <Switch.Thumb className={styles.SwitchThumb} />
      </Switch.Root>
    </div>
  );
};

export default Toggle;
