import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InfoCarousel from "../component/InfoCarousel";
import "../pages/globals.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Carousel",
  component: InfoCarousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    info: {
      name: "infoCarousel",
      description: "add , to create a new array",
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof InfoCarousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InfoCarousel> = (args) => {
  const arr = typeof args.info === "string" ? args.info.split(",") : ["this "];

  console.log(arr);
  return <InfoCarousel info={arr} />;
};

export const Primary = Template.bind({});
