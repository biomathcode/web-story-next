import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";
import styles from "./styles.module.css";

function SliderComponent({ label, name, value, onChange }) {
  return (
    <div className="flex gap-10">
      <Slider.Root
        className={styles.SliderRoot}
        defaultValue={[50]}
        onValueChange={(e) => {
          onChange({
            target: {
              name: "fontSize",
              value: e,
            },
          });
        }}
        max={100}
        min={0}
        name={name}
        step={1}
        aria-label="Volume"
        orientation="horizontal"
      >
        <Slider.Track className={styles.SliderTrack}>
          <Slider.Range className={styles.SliderRange} />
        </Slider.Track>
        <Slider.Thumb
          onChange={(e) => console.log(e)}
          className={styles.SliderThumb}
        />
      </Slider.Root>
      <div>{value}</div>
    </div>
  );
}

export default SliderComponent;
